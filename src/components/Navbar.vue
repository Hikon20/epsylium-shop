<template>
<div class="wrap">
  <nav>
    <a @click="openSlideMenu()" href="#/#"><img class="burger open-slide" src="../assets/open-menu.png" height="50" alt=""></a>
    <img class="logo1" src="../assets/logo-noir.png"  alt="">
    <a class="lien1" href="/">Accueil</a>
    <a class="lien2" href="/Boutique">Boutique</a>
    <a class="lien3" href="/Connexion">Compte</a>
    <a class="lien4" href="/Wolf-History">Histoires des loups</a>
   <img class="panier" src="../assets/panier.png" height="50" alt="">
  </nav>
  <div id="side-menu" class="side-nav">
    <a @click="closeSlideMenu()" href="#/" class="btn-close" ><img src="../assets/croix.png"  alt=""></a>
    <a href="/">Accueil</a>
    <a href="/Boutique">Boutique</a>
    <a href="/Connexion">Compte</a>
    <a href="/Wolf-History">Histoires des loups</a>
  </div>
  
<div id="app">
  
  </div>
</div>

 
</template>
<script>
   
  export default {
      methods: {
        openSlideMenu:function(){document.getElementById('side-menu').style.width = '350px'},
        closeSlideMenu:function(){document.getElementById('side-menu').style.width = '0', document.getElementById('app').style.marginLeft = '0px'}

      },
    name: 'Navbar', 
 
  }
   
</script>
<style>
  nav {
    background: #000;
    width: 100%;
    height: 90px;
  }

  .burger{ 
    position: absolute;
    left: 1rem;
    top: 1rem;
    display: none;
    }
  .logo1{
    position: absolute;
    height: 80px;
    left: 2rem;
  }
  .panier{
    position: absolute;
    height: 50px;
    right: 1rem;
    top: 1rem;
  }

  .lien1,
  .lien2,
  .lien3,
  .lien4{
    position: absolute;
  }


  .lien1:hover {
    text-decoration: none;
    color: #cdb682;
  } .lien2:hover {
    text-decoration: none;
    color: #cdb682;
  } .lien3:hover {
    text-decoration: none;
    color: #cdb682;
  } .lien4:hover {
    text-decoration: none;
    color: #cdb682;
  }

  .lien1::after {
  content: '';
  display: block;
  background: #fff;
  width: 0%;
  height: 3px;
  transition: width 0.3s;
}

.lien1:hover:after {
  width: 100%;
}
 .lien2::after {
  content: '';
  display: block;
  background: #fff;
  width: 0%;
  height: 3px;
  transition: width 0.3s;
}

.lien2:hover:after {
  width: 100%;
}
 .lien3::after {
  content: '';
  display: block;
  background: #fff;
  width: 0%;
  height: 3px;
  transition: width 0.3s;
}

.lien3:hover:after {
  width: 100%;
}
 .lien4::after {
  content: '';
  display: block;
  background: #fff;
  width: 0%;
  height: 3px;
  transition: width 0.3s;
}

.lien4:hover:after {
  width: 100%;
}

  .lien1{
    left: 16rem;
    top: 2rem;
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
  }
  .lien2{
    left: 21rem;
    top: 2rem;
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
  }
  .lien3{
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
    right: 21rem;
    top:2rem;
  }
  .lien4{
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
    right: 8rem;
    top: 2rem;
  }


  .side-nav {
     height:100% ;
     width: 0;
     position: fixed;
     top:0;
     left: 0;
     z-index: 1;
     background:url('../assets/bg-1.jpg');
     background-repeat: no-repeat;
     background-size: cover;
    background-position-x: -238PX;
     opacity: 1;
     overflow-x: hidden;
     padding-top: 60px;
     transition: 0.5s;
  } 
  .side-nav a {
    padding: 10px 10px 10px 30px;
    text-decoration: none;
    font-size: 22PX;
    color: #cdb682;
    display: block;
    transition: 0.3s;
    text-align: start;
  }

  .side-nav a:hover {
    text-decoration: none;
    color: #cdb682;
  }

@media screen and (min-width:769px) and (max-width:1024px) {
 nav .lien1,.lien2,.lien3,.lien4 {
    display: none;
  }
  .logo1 {
    left: 45%;
  }
  .burger {
    display: flex;
  }
}
@media screen and (min-width:480px) and (max-width:768px) {
  nav .lien1,.lien2,.lien3,.lien4  {
    display: none;
  }
  .logo1 {
    left: 41%;
  }
  .burger {
    display: flex;
  }
}
@media screen and (min-width:320px) and (max-width:480px){
  nav .lien1,.lien2,.lien3,.lien4 {
    display: none;
  }
  .logo1 {
    left: 41%;
  }
  .burger {
    display: flex;
  }
}
</style>