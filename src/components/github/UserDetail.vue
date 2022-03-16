<template>
  <div class="container">
    <button v-on:click="showModal = !showModal" class="btn btn-outline-primary btn-sm">Detalhe</button>

    <div v-bind:class="modalClass" class="modal-container">
      <div id="user-modal">
          <div class="card">
            <div class="card-header">
              <label><strong>{{ user.login }}</strong></label>
            </div>
            <div class="card-body">
              <div class="form-group">                            
                <img :src="user.avatar_url" width="120" height="120" alt="">       
                <a :href="user.html_url" target="_blank">Acessar perfil</a>  
              </div>        
            </div>
            <div class="card-footer">
              <button v-on:click.prevent="showModal = !showModal" class="btn btn-secondary mr-1">Fechar</button>
            </div>
          </div>
      </div> <!-- end user-table -->
    </div> <!-- end modal-container -->
  </div> <!-- end container -->
</template>

<script>
export default {
    props: ['user'],
    name: "UserDetail",
    data: function() {
        return {
          username: '',
          users: [],
          showModal: false
        };
    },
    computed: {
      modalClass() {
        return this.showModal ? 'show' : '';
      }
    }
}
</script>

<style>
.modal-container {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}
.modal-container.show {
  opacity: 1;
  pointer-events: auto;
}
.user-modal {
  color: #535353;
  background-color: #fff;
  /* background-image: url("../assets/background.jpg"); */
  width: 450px;
  padding: 40px 50px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.user-modal h1 {
  margin: 0;
}
.user-modal p {
  opacity: 0.9;
}
</style>