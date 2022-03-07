<template>
    <div class="container">
        <painel titulo="Tabela">
            <div class="row  mb-1">
                <div class="col-md-5">
                    <input type="search" class="form-control" placeholder="Pesquisar" v-model="username"  v-on:keyup.enter="search" :class="{ 'has-error': error }">
                </div>
            </div>
            <span class="loading" v-if="loading">Pesquisando por "{{ username }}"...</span>
            <div class="box">
                <users ref="users"></users>          
            </div>
            <span v-if="error">Desculpe, não foi possível encontrar o usuário "<i>{{ username }}</i>"!</span>            
        </painel>
    </div>
</template>

<script>
import axios from "axios";
import users from "./TableUsers";

export default {
    name: "GetUsers",
    components: {
        users
    },
    data: function (){
        return {
            username: '',
            buscar:'',
            offset: 0,
            limit: 20,
            total: 0,
            results: '',
            error: '',
            loading: false            
        }
    },
    watch: {
        username: function () {
            this.error = '';
        }
    },
    methods: {
        search: function() {
          if( this.username ){
              this.loading = true;
              console.log("Searching for... " + this.username );
              axios.get('https://api.github.com/users/' + this.username)
                  .then(response => {
                      console.log( response.data );
                      this.results = response.data;
                      this.error = '';
                      this.loading = false;
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
    #modal {
        position:absolute;
        left: calc(50% - 100px);
        top: calc(50% - 100px);
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: grey;
        color:white;
        flex-direction: column;
    }
</style>