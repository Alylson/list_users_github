<template id="child">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" v-if="showModal">
    <div class="modal-content">
      <div class="modal-body" :key="user.id" id="modal">
        <div class="form-group">
          <img :src="user.avatar_url" width="120" height="120" alt="">        
          <label>{{ user.name }}</label>
          <a :href="user.html_url" target="_blank">Acessar perfil</a>          
      </div>
      <div class="modal-footer">
        <button @click="hide">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: [user],
    name: "UserDetail",
    template: '#child',
    data() {
        return {
            user: '',
            showModal: false
        };
    },
    methods: {
      show() {
        this.showModal = true
      },
      hide(){
        this.showModal = false
      }
    }
};
</script>