<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <router-link to="/"><img class="logo" src="https://i.postimg.cc/3rX10F6V/360-F-205478020-a-ISn-V8bu78-AMHElx-Nfxn4y-SYIf-Dg-IXhj.jpg" alt="logo"></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/users">Users</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact Me</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><img class="login" src="https://i.postimg.cc/zDT6kBF8/avatar-symbol-point-brand-text-removebg-preview.png" alt="login">Login</a>
                  </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>