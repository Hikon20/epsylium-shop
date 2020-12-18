<template>
  <div>
  <preloader />
    <div class="wrap">
     
      <navbar />
      <div class="vroum" id="app">
        <h3>Collection sauvage</h3>
        <h2>Epsylium Shop</h2>
        <input type="button" value="Acheter Maintenant">
      </div>
  <!--debutd'about-->
    <div class="about">
     <div class="boite">
       <div class="boite-about"></div>
       <div class="boite-img"></div>
       <span class="boite-texte"><strong>Epsylium Shop</strong></span>
       <p>Epsylium Shop est une marque déposer et crée par Hikon, elle consiste a crée des
                                vêtements des accesoires en imprimé loup pour les amoureux de ces derniers,la marque est
                                Franco-Islandaise et son siège social est situé à Paris.</p>
     </div>
      <div class="boite">
       <div class="boite-about"></div>
       <div class="boite-img"></div>
       <span class="boite-texte"><strong>La Boutique</strong></span>
       <p>La Boutique ne vend pas que des vêtements mais vous pourrais y retrouvez des accesoires de mode des tableau ou même des mug a l'efigie des loups</p>
     </div>
      <div class="boite single-box">
       <div class="boite-about img-area"></div>
       <div class="boite-img img-text"></div>
       <span class="boite-texte header-text"><strong>Histoire des loups</strong></span>
    <p> Histoire des loups est le nom du Forum communautaire qui a pour but premier, de rassembler une communauté autour des loups, la fonctionalité premiere est le fait que les créateur peuvent poster l.eur  oeuvres et mettre des lien pour que les client puisseant les achetter 
      ils on aussi la possibilité de crée des vêtements ou toute autre produit et de les vendre sur le site.
    </p>
     </div>
     
       </div>
         <!--fin d'about-->
   

    <myFooter /> 
    </div>
    </div>
</template>

<script>
  // @ is an alias to /src
 
  import Navbar from '@/components/Navbar.vue';
  import Preloader from '@/components/Preloader.vue';
  import MyFooter from '@/components/MyFooter.vue';

  export default {

    name: 'Accueil',
    components: {
      Navbar,
      Preloader,
      MyFooter
    }
  }
</script>
<style scoped>

/*about debut*/
  .about {
    background: #d1d4d4;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .boite {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: auto;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    margin: 23px;
    padding: 20px;
    transition: 3s;
  }

  .boite-about {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 6px solid #ddd;
    border-radius: 50%;
    margin-bottom: 10px;
    padding: 20px;
    --webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
  }

  .boite:nth-child(1) .boite-about {
    background-image: url(https://lh3.googleusercontent.com/proxy/L_5KR4q9Z2YDsxkVj8D-1B00gaQy36FzguY96TC1fb2UD6cxTYEwSL293wPoXNeH72wmsHGrIcGxS5u5fmg6Mwtc79Tpift81Brcy3m8qkaNlAafj8jGkWwyOz1LUFcmPUV7R_cQymUBZ7viKtlgX3eB);
  }
  .boite:nth-child(2) .boite-about {
    background-image: url(https://i.pinimg.com/originals/ab/22/4c/ab224c9ff506bfb94f4eacba1c4e3763.jpg);
  }
  .boite:nth-child(3) .boite-about {
    background-image: url(https://www.pngitem.com/pimgs/m/120-1209897_alpha-wolf-head-wolf-logo-transparent-background-hd.png);
  }
.boite-texte {
  font-size: 24px;
  font-weight: 500;
  line-height: 48px;
}
.boite-img {
  padding-top: 20px;
  font-family: Montserrat,sans-serif;
}

.boite-img p{
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
}
.boite:hover {
  background: #cdb682;
  color: #fff;
}

/*about fin*/























  .btn {
    width: 100%;
    padding: 5px 0;
    margin: 10px 0;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none !important;
    cursor: pointer;
    transition: 0.8s;
  }

  .btn {
    background: -webkit-linear-gradient(0deg, #cdb682 50%, transparent 50%);
    background-size: 590px 80px;
    outline: none !important;
  }

  .btn:hover {
    outline: none !important;
    color: #000;
    border: none;

    background-position: 260px 0;
  }

  .description {
    background: #d4d1d1;
    position: absolute;
    width: 140px;
    height: 140px;
    top: -70px;
    right: -70px;
    border-radius: 0 0 200px 200px;
    transition: all .5s, border-radius 1s, top 1s
  }

  .description .icon {
    position: absolute;
    top: 85px;
    right: 85px;
    color: #fff;
  }

  .description:hover {
    width: 100%;
    height: 80%;
    right: 0;
    top: 0;
    border-radius: 0;
  }

  .description:hover .icon {
    opacity: 0;
  }

  .description .contents {
    color: #fff;
    padding: 5%;
    transform: scale(0.5);
    transform: translateY(-200%);
    transition: opacity .2s transform .8s;
    opacity: 0;
  }

  .description:hover .contents {
    transform: scale(1);
    transform: translateY(0);
    opacity: 1;
  }

  .description h2 {
    margin: 20px 0;
    text-align: center !important;
    font-size: 22px;
  }

  .description p {
    margin-top: 50px;
  }


  .vroum {
    background: url('../assets/header-1.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat !important;
  }

  .vroum h3,
  h2 {
    position: absolute;
    text-transform: uppercase;
    color: #fff;
    font-family: Montserrat, sans-serif;

  }

  .vroum h3 {
    left: 2rem;
    top: 85%;
    font-size: 16px;
  }

  .vroum h2 {
    left: 2rem;
    top: 90%;
    font-size: 25px;
  }

  .vroum input[type=button] {
    position: absolute;
    top: 96%;
    border: none;
    padding: 10px 12px;
    left: 2rem;
    font-size: 18px;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    text-decoration: none;
    color: #fff;
    outline: none;
    transition: 0.8s;
  }

  .vroum input[type=button] {
    background: -webkit-linear-gradient(0deg, #111 50%, transparent 50%);
    background-size: 490px 80px;

  }

  .vroum input[type=button]:hover {
    background-position: -242px 0;
    border: 1px solid white;
  }

  nav {
    background: #000;
    width: 100%;
    height: 90px;
  }

  .burger {
    position: absolute;
    left: 1rem;
    top: 1rem;
    display: none;
  }

  .logo1 {
    position: absolute;
    height: 80px;
    left: 2rem;
  }

  .panier {
    position: absolute;
    height: 50px;
    right: 1rem;
    top: 1rem;
  }

  .lien1,
  .lien2,
  .lien3,
  .lien4 {
    position: absolute;
  }


  .lien1:hover {
    text-decoration: none;
    color: #cdb682;
  }

  .lien2:hover {
    text-decoration: none;
    color: #cdb682;
  }

  .lien3:hover {
    text-decoration: none;
    color: #cdb682;
  }

  .lien4:hover {
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

  .lien1 {
    left: 16rem;
    top: 2rem;
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
  }

  .lien2 {
    left: 21rem;
    top: 2rem;
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
  }

  .lien3 {
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
    right: 21rem;
    top: 2rem;
  }

  .lien4 {
    text-transform: uppercase;
    color: #cdb682;
    font-size: 16px;
    right: 8rem;
    top: 2rem;
  }


  .side-nav {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: url('../assets/bg-1.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.9;
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


@media (width: 768px){
  .product {
    padding: 0;
    margin: 10px auto;
  

  }
}

</style>