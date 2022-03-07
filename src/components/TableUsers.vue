<template>
    <div id="parent">
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
                        <button class="btn btn-light" @click="openModal">Detalhe</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
import axios from "axios";

export default {
    name: "TableUsers",
    el: "#parent",
    data: function (){
        return {
            users: '',
            modal: false
        }
    },
    created: function () {
        axios.get("https://api.github.com/users").then((response) => {
            this.users = response.data;
        });
    },
    methods: {
        openModal() { 
            this.$refs.modal.show();
        }
    }
}
</script>