<template>
  <div class="container">
    <button v-on:click="showModal = !showModal" class="btn btn-outline-primary btn-sm">Cadastrar Usuário</button>

    <div v-bind:class="modalClass" class="modal-container">
      <div class="user-modal">
        <h3>Cadastro de Usuário</h3>
        <form>
          <div class="form-group mb-2">
            <label for="name">Nome</label>
            <input required value="" type="text" id="nameRegister" class="form-control"/>
          </div>

          <div class="form-group mb-2">
            <label for="name">Nome de usuário</label>
            <input required value="" type="text" id="usernameRegister" class="form-control"/>
          </div>
    
          <div class="form-group mb-2">
            <label for="email">Email</label>
            <input required value="" type="email" id="emailRegister" class="form-control"/>
          </div>
          
          <div class="form-group mb-3">
            <label for="password">Senha</label>
            <input required value="" type="password" id="passwordRegister" class="form-control"/>
          </div>
          
          <div class="form-group mb-2">
            <button v-on:click.prevent="showModal = !showModal" class="btn btn-secondary btn-sm">Fechar</button>
            <button v-on:click="createUser()" type="submit" class="btn btn-primary btn-sm">Salvar</button> 
        </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      users: [],
      showModal: false,
    };
  },
  methods: {
    async createUser() {
      await fetch('http://localhost:3000/api/users/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: document.getElementById('nameRegister').value,
          email: document.getElementById('emailRegister').value,
          password: document.getElementById('passwordRegister').value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        console.log('caiu aqui');
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },
  computed: {
    modalClass() {
      return this.showModal ? 'show' : '';
    }
  }
};
</script>