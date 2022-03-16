<template>
    <div class="container">
        <header>
            <h3 class="text-center mb-2">Usuarios Github</h3>
        </header>
        <div class="card">
            <div class="card-header">
                <div class="row mb-1">
                    <div class="col-md-5">
                        <input type="search" class="form-control" placeholder="Pesquisar" v-model="username"  v-on:keyup.enter="search" :class="{ 'has-error': error }">
                    </div>
                </div>
                <span class="loading" v-if="loading">Pesquisando por "{{ username }}"...</span>
                <div class="box" v-if="users">
                    <div class="card-content">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{ user.id }}</td>
                                    <td>{{ user.login }}</td>
                                    <td>                        
                                        <UserDetail :user="user"/>
                                    </td>
                                </tr>
                            </tbody>                  
                        </table>
                    </div>
                    <div class="card-footer">
                        <default-pagination
                        v-model="current"
                        :total-pages="10"
                        :max-squares="5"
                        no-first-last-icon
                        not-inherit-font
                        @page-click="handleClick"
                        ><template #first> Primeiro </template>
                        <template #last> Último <my-component /> </template>
                        </default-pagination>
                    </div>          
                </div>
                <div class="box" v-else>
                    <span v-if="error">Desculpe, não foi possível encontrar o usuário "<i>{{ username }}</i>"!</span>          
                </div>                
            </div>                
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { emitter } from '@/main.js'
import UserDetail from '@/components/github/UserDetail.vue'
import DefaultPagination from 'default-pagination-vue';

export default {
    name: "TableUsers",
    el: "#user-table",
    components: {
        DefaultPagination,
        UserDetail
    },
    data: function (){
        return {
            users: '',        
            showModal: false,
            username: '',
            buscar:'',
            results: '',
            error: '',
            loading: false,
            user: ''
        }
    },
    watch: {
        username() {
            this.error = '';
        }
    },
    created() {
        axios.get("https://api.github.com/users").then((response) => {
            this.users = response.data;
        });
    },
    methods: {
        emitShowModal(id) {
            axios.get("https://api.github.com/users/" + id).then((response) => {
                this.user = response.data;
                this.showModal = true;
                emitter.emit('click', this.showModal, this.user);
            
                console.log(this.user);
                console.log('UsersTable:', this.showModal);
            });     
        },
        search() {
          if( this.username ){
              this.loading = true;
              console.log("Searching for... " + this.username );
              axios.get('https://api.github.com/users/' + this.username)
                  .then(response => {
                      this.results = response.data;
                      this.error = '';
                      this.loading = false;
                      this.username = response.data.login
                  }).catch(error => {
                      this.results = '';
                      this.error = error;
                      this.loading = false;
                  });
          } else {
              this.results = '';
              this.error = '';
              this.loading = false;
          }
        },
        handleClick({ newPage, totalPages, blurState, cancelChange, done }) {
            console.log(newPage, totalPages, blurState, cancelChange, done);
            blurState();
            setTimeout(() => cancelChange(), 500);
        }
    }
}
</script>

<style scoped>
    .has-error {
        border: 1px solid #96281B;
        outline: none;
    }
    .loading {
        display: block;
        text-align: center;
        color: #6C7A89;
    }
</style>