<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <img class="img-fluid " src="https://static.wixstatic.com/media/b91e09_95ec298e6ed645d197af640983985c6c~mv2.png/v1/fill/w_234,h_56,al_c,q_85,usm_0.66_1.00_0.01/logo_ic_v5_20210604_a4_logo_hQ.webp" alt="" >
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ">
          <router-link class="nav-link active" id="links" aria-current="page" to="/">Home</router-link>
          <router-link class="nav-link active" id="links" to="/about">Sobre</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

</script>


<style scoped>
nav {
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
}
#links{
  margin-top: 29px;
  margin-bottom: 14px;
  margin-left: 37px;
}
.img-fluid{
  margin-left: 29px;
}


</style>
