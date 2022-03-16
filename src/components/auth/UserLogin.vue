<template>
    <div class="container">
        <div class="row">
            <div class="text-center">
                <form class="d-block mx-auto mb-4 col-md-4">
                    <h3>Área de acesso</h3>
                    <div class="form-group mb-3">
                        <label>E-mail</label>
                        <input type="email" class="form-control" />
                    </div>
                    <div class="form-group mb-3">
                        <label>Senha</label>
                        <input type="password" class="form-control mb-3" />
                    </div>
                    <div class="form-group mb-2">                
                        <button type="submit" class="btn btn-primary btn-sm">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {  
  name: 'UserLogin'
}
</script>