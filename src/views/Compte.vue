<template>
  <div class="wrap2">
    <div class="dash-img">
      <h2 class="first1">Bienvenue dans</h2>
      <h2 class="first2">Votre compte</h2>
    </div>
    <a href=""><img src="../assets/logo-noir.png" alt="" class="logo-compte"></a>
    <h2>Mon Compte</h2>
    <div class="hllo">
      <p>Bonjour,<br><strong >Emmanuel Estanis</strong></p>
      <div class="cds">
        <h2>EE</h2>
      </div>
      <div class="appercu-compte">
        <img src="../assets/user.png" alt="">
        <h2>Aperçu du compte</h2>
      </div>
      <div class="for-me">
      <div class="commande">
        <img src="../assets/commandes.png" alt="">
        <h2>Mes commandes</h2>
      </div>
      <div class="retour">
        <img src="../assets/retours.png" alt="">
        <h2>Mes retours</h2>
      </div>
      <div class="premier">
        <img src="../assets/premier.png" alt="">
        <h2>Livraison Premier</h2>
      </div>
      </div>
      <div class="for-me1">
         <div class="information">
           <img src="../assets/informations.png" alt="">
           <h2>Mes informations</h2>
         </div>
      <div class="mot12">
        <img src="../assets/mdp.png" alt="">
        <h2>Changer le mot de passe</h2>
      </div>
      <div class="carnet">
        <img src="../assets/carnet.png" alt="">
        <h2>Carnet d'adresse</h2>
      </div>
      <div class="paiement1">
        <img src="../assets/mode-pay.png" alt="">
        <h2>Mes modes de paiement</h2>
      </div>
      <div class="preference">
        <img src="../assets/preferences.png" alt="">
        <h2>Préférences de contact</h2>
      </div>
      <div class="user2">
        <img src="../assets/user2.png" alt="">
        <h2>Comptes de réseau sociaux</h2>
      </div>
      </div>
      <div class="cheque">
        <img src="../assets/cadeau.png" alt="">
        <h2>Cartes cadeaux et chèques cadeaux</h2>
      </div>

      <div class="help">
         <div class="appercu-compte15">
           <img src="" alt="">
           <h2>Besoin d'aide ?</h2>
         </div>
      <div class="appercu-compte16">
        <img src="" alt="">
        <h2>Où est ma commande ?</h2>
      </div>
      <div class="appercu-compte17">
        <img src="" alt="">
        <h2>Comment faire un retour ?</h2>
      </div>
      <div class="appercu-compte18">
        <img src="" alt="">
       <h2> J'ai besoin d'un bordereau de retour</h2>
      </div>
      </div>
      <div class="deconnection">
        <img src="" alt="">
        <h2>Déconnexion</h2>
      </div>
    

    </div>
</div>
 
</template>

<script>
  // @ is an alias to /src
  /* import MyFooter from '@/components/MyFooter.vue'; */


  export default {

    name: 'Compte',
    components: {
  
    }
  }
</script>
<style>
  .wrap2{
        position: relative;
        height: 100vh;
        width: 100%;
      
        background: #d4d1d1;
    }
  .wrap2 h2 {
    color: #000;
    font-size: 20px;
    position: absolute;
    top: 9%;
    left: 50%;
}
.dash-img {
    background: url(/img/img-compte.d2ac06e2.jpg);
    background-position: center;
    height: 624px;
    width: 348px;
    position: absolute;
    left: 46%;
    top: 20%;
    background-size: cover;
}
.dash-img .first1,.first2 {
  position: absolute;
}

.dash-img .first1 {
    top: 6%;
    left: 2%;
    background: #111;
    color: #fff;
    padding: 8px 6px;
}
.dash-img .first2{
  top: 10%;
}



.logo-compte {

    position: absolute;
    height: 85px;
    top: 5%;
    left: 30%;
}
.hllo {
    height: 130px;
    width: 210px;
    position: relative;
    background: #fff;
    top: 20%;
    left: 30%;
}
.hllo p {
    position: absolute;
    font-size: 14px;
    left: 45px;
    top: 42px;
}
.cds {
    background: black;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: -10px;
}
  
.cds h2 {
    color: #fff;
    font-family: Montserrat;
    position: absolute;
    font-size: 18px;
    top: 15px;
    left: 11px;
}


.appercu-compte {
    background: #fafafa;
    height: 35px;
    width: 210px;
    position: absolute;
    top: 105%;
    border-left: 2px #00aeef solid;
}

.appercu-compte img {
    height: 16px;
    position: absolute;
    top: 25%;
    left: 10%;
}
.appercu-compte h2 {
    font-size: 10px;
    position: absolute;
    left: 25%;
    top: 32%;
    text-transform: none;
}

.for-me {
    background: #fff;
    height: 110px;
    width: 210px;
    position: absolute;
    top: 135%;
    left: 0%;
}
.for-me .commande{
    position: absolute;
    top: 0%;
    left: 26%;
    background: #fff;
    border-bottom: 1px solid gray;
    height: 35px;
    width: 155px;

}
.for-me .commande h2 {
    font-size: 10px;
    position: absolute;
    left: 0%;
    top: 35%;
    text-transform: none;
}
.for-me .commande img {
    position: absolute;
    top: 32%;
    left: -21%;
    height: 18px;
}
.for-me .retour {
    position: absolute;
    top: 32%;
    left: 26%;
    background: #fff;
    border-bottom: 1px solid gray;
    height: 35px;
    width: 155px;
}
.for-me .retour h2 {
    font-size: 10px;
    position: absolute;
    left: 0%;
    top: 35%;
    text-transform: none;
}
.for-me .retour img {
    position: absolute;
    top: 24%;
    left: -21%;
    height: 18px;
}
.for-me .premier {
    position: absolute;
    top: 65%;
    left: 26%;
    background: #fff;
    height: 35px;
    width: 130px;
}
.for-me .premier h2 {
    font-size: 10px;
    position: absolute;
    left: 2%;
    top: 35%;
    text-transform: none;
}
.for-me .premier img {
    position: absolute;
    top: 0%;
    left: -25%;
    height: 32px;
}
.for-me1 {
    background: #fff;
    height: 255px;
    width: 210px;
    position: absolute;
    top: 225%;
    left: 0%;
}


.for-me1 .information {
    position: absolute;
    height: 35px;
    width: 160px;
    background:  #fff;
    left: 24%;
    top: 0%;
    border-bottom: 1px solid gray;
}
.for-me1 .information h2 {
    position: absolute;
    top: 35%;
    left: 0%;
    font-size: 12px;
    text-transform: none;
}
.for-me1 .information img {
    position: absolute;
    height: 18px;
    top: 25%;
    left: -20%;
}

.for-me1 .mot12 {
    position: absolute;
    height: 35px;
    width: 160px;
    background: #FFF;
    top: 17%;
    left: 24%;
    border-bottom: 1px solid gray;
}

.for-me1 .mot12 h2 {
    font-size: 10px;
    position: absolute;
    top: 35%;
    left: 0%;
    text-transform: none;
}
.for-me1 .mot12 img {
    position: absolute;
    top: 6%;
    left: -20%;
    height: 69%;
}

.for-me1 .carnet {
    position: absolute;
    height: 35px;
    width: 160px;
    background:  #fff;
    top: 34%;
    left: 24%;
    border-bottom: 1px solid gray;
}

.for-me1 .carnet h2 {
    font-size: 10px;
    position: absolute;
    top: 35%;
    left: 0%;
    text-transform: none;
}

.for-me1 .carnet img {
  position: absolute;
  top: 10%;
  left: -19%;
  height: 19px;
}
.for-me1 .paiement1 {
    position: absolute;
    height: 35px;
    width: 160px;
    background: #fff;
    top: 51%;
    border-bottom: 1px solid gray;
    left: 24%;
}
.for-me1 .paiement1 h2 {
    font-size: 10px;
    text-transform: none;
    top: 10%;
    left: 0%;
    position: absolute;
}

.for-me1 .paiement1 img {
  position: absolute;
  left: -20%;
  top: 10%;
  height: 14px;
}
.for-me1 .preference {
    position: absolute;
    height: 35px;
    width: 160px;
    background: #fff;
    top: 68%;
    left: 24%;
    border-bottom: 1px solid gray;
}
.for-me1 .preference h2 {
    font-size: 10px;
    top: 10%;
    left: 0%;
    text-transform: none;
    position: absolute;
}
.for-me1 .preference img {
  position: absolute;
  top: 10%;
  left: -21%;
  height: 22px;
}
.for-me1 .user2 {
    position: absolute;
    height: 35px;
    width: 160px;
    background: #fff;
    top: 85%;
    left: 23%;
}
.for-me1 .user2 h2 {
font-size: 10px;
text-transform: none;
left: 0%;
top: 10%;
position: absolute;
}
.for-me1 .user2 img {
  height: 17px;
  position: absolute;
  top: 10%;
  left: -21%;
}

.cheque {
  position: absolute;
  top: 425%;
  left: 0%;
  background: #FFF;
  height: 35px;
  width: 210px;

}
.cheque h2 {
  font-size: 10px;
  text-transform: none;
  position: absolute;
  left: 24%;
  top: 10%;
}
.cheque img {
    
    position: absolute;
    top: 15%;
    left: 6%;
    height: 19px;
}
</style>
