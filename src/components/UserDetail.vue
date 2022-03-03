<template>
    <div class="ui card" :key="user.id">
      <div class="image">
        <img :src="user.avatar_url" width="120" height="120">
      </div>
      <div class="content">
        <div class="meta">
          <label>{{ user.name }}</label>
        </div>
        <div class="description">
            <a :href="user.html_url" target="_blank">Acessar perfil</a>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "UserDetail",
    data() {
        return {
            user: '',
        };
    },
    created: function () {
        axios.get("https://api.github.com/users/alylson").then((response) => {
            this.user = response.data;
        });
    },
};
</script>