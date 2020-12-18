<template>
    <div class="BODY-1">
        <navbar />
        <div class="box22">
            <div class="box11">
                <h2>Inscription</h2>
                <form action="get">
                    <span class="nom">Nom</span>
                    <input class="nom1" type="text" required>
                    <span class="prenom">Prenom</span>
                    <input class="prenom1" type="text" required>
                      <span class="email12">Email</span>
                    <input class="email1" type="email" required>
                    <span class="mdp12">Mot de passe</span>
                    <input class="mot" type="password" required>
                    <span class="mdp0">Comfirmer Mot de passe</span>
                    <input class="mdp2" type="password" required>
                    <input class="btn32" type="submit" value="S'inscrire Maintenant">
                </form>
                    <div class="con">
                        <p>Rejoin-nous et continue ton aventure</p>
                        <a href="#">Connection</a>
                    </div>
                    <div class="img-inscription1">
                    <h2>L'un des notres ?</h2>
                    <p>Rejoin-nous et continue ton aventure</p>
                    <a href="/Connexion">Connection</a>
                </div>
            </div>
        </div>


 <myFooter/>
    </div>
</template>
<script>
    import Navbar from '@/components/Navbar.vue';
    import MyFooter from '@/components/MyFooter.vue';
    export default {

        name: 'Connexion',
        components: {
            Navbar,
            MyFooter
        }
    }
</script>
<style>
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .con {
        display: none;
    }

.box11 .nom, .nom1,.prenom, .prenom1,.email12,.email1,.mdp12,.mot,.mdp0,.mdp2 {
    position: absolute;
}

.box11 .nom {
    top: 18%;
    left: 63%;
}
.box11 .nom1 {
    top: 22%;
    left: 55%;
    border-bottom: 1px solid gray;
}

.box11 .prenom {
    top: 32%;
    left: 62%;
}
.box11 .prenom1 {
    top: 36%;
    left: 55%;
    border-bottom: 1px solid gray;
}

.box11 .email12 {
    top: 45%;
    left: 63%;
}
.box11 .email1 {
    top: 50%;
    left: 55%;
    border-bottom: 1px solid gray;
}


.box11 .mdp12 {
    top: 58%;
    left: 60%;
}
.box11 .mot {
    top: 62%;
    left: 55%;
    border-bottom: 1px solid gray;
}

.box11 .mdp0 {
    top: 72%;
    left: 55%;
}
.box11 .mdp2 {
    top: 77%;
    left: 55%;
    border-bottom: 1px solid gray;
}
.box11 .btn32 {
    border-radius: 30px;
    border: none;
    padding: 7px 30px;
    position: absolute;
    top: 88%;
    left: 49%;
    color: #fff;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    background: -webkit-linear-gradient(left, #988878, #484b4d);
}
.box11 input,button {
    background: none;
    border:none;
    outline: none;
}


    .box22 {
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100vh;
        background: #d4d1d1;
    }

    .box11 {

        height: 550px;
        width: 750px;
        position: relative;
        background: #fff;
    }
.box11 h2 {
    color: #000;
    font-size: 22px;
    font-family: Montserrat;
    position: absolute;
    top: 7%;
    left: 56%;
}


 


   
   

   
    .box11 .img-inscription1 {
        height: 100%;

        width: 280px;
        position: absolute;
        left: 0;
        background-image: url('../assets/wolf-inscription1.jpg');
        background-size: cover;
        background-position: right;
    }

    .box11 .img-inscription1 h2 {
    position: absolute;
    font-size: 20px;
    color: #000;
    text-transform: unset;
    left: 20%;
}

   .box11 .img-inscription1 p {
    position: absolute;
    color: #000;
    max-width: 230px;
    font-size: 13px;
    top: 15%;
    left: 11%;
    text-align: center;
}

 .box11 .img-inscription1 a {
    color: #000;
    position: absolute;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 0px 7px;
    top: 75%;
    left: 33%;
}
    .box11 .img-inscription1 a:hover {
        text-decoration: none;
    }

    @media screen and (min-width:769px) and (max-width:1024px) {
        .box11 .nom, .nom1,.prenom, .prenom1,.email12,.email1,.mdp12,.mot,.mdp0,.mdp2 {
    position: absolute;
}

.box11 .nom {
    top: 18%;
    left: 44%;
}
.box11 .nom1 {
    top: 22%;
    left: 31%;
    border-bottom: 1px solid gray;
}

.box11 .prenom {
    top: 32%;
    left: 43%;
}
.box11 .prenom1 {
    top: 36%;
    left: 31%;
    border-bottom: 1px solid gray;
}

.box11 .email12 {
    top: 45%;
    left: 45%;
}
.box11 .email1 {
    top: 50%;
    left: 31%;
    border-bottom: 1px solid gray;
}


.box11 .mdp12 {
    top: 58%;
    left: 39%;
}
.box11 .mot {
    top: 62%;
    left: 31%;
    border-bottom: 1px solid gray;
}

.box11 .mdp0 {
    top: 72%;
    left: 31%;
}
.box11 .mdp2 {
    top: 77%;
    left: 31%;
    border-bottom: 1px solid gray;
}
.box11 .btn32 {
    border-radius: 30px;
    border: none;
    padding: 7px 30px;
    position: absolute;
    top: 88%;
    left: 23%;
    color: #fff;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    background: -webkit-linear-gradient(left, #988878, #484b4d);
}
.box11 input,button {
    background: none;
    border:none;
    outline: none;
}


    .box22 {
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100vh;
        background: #d4d1d1;
    }

    .box11 {

        height: 550px;
        width: 500px;
        position: relative;
        background: #fff;
    }
.box11 h2 {
    color: #000;
    font-size: 22px;
    font-family: Montserrat;
    position: absolute;
    top: 7%;
    left: 32%;
}


 


   
   

   
    .box11 .img-inscription1 {
    display: none;
    }

  
   .box11 .img-inscription1 p {
    position: absolute;
    color: #000;
    max-width: 230px;
    font-size: 13px;
    top: 15%;
    left: 11%;
    text-align: center;
}

 .box11 .img-inscription1 a {
    color: #000;
    position: absolute;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 0px 7px;
    top: 75%;
    left: 33%;
}
    .box11 .img-inscription1 a:hover {
        text-decoration: none;
    }

        
    }
     @media screen and (min-width:480px) and (max-width:768px){
              .box11 .nom, .nom1,.prenom, .prenom1,.email12,.email1,.mdp12,.mot,.mdp0,.mdp2 {
    position: absolute;
}

.box11 .nom {
    top: 18%;
    left: 44%;
}
.box11 .nom1 {
    top: 22%;
    left: 31%;
    border-bottom: 1px solid gray;
}

.box11 .prenom {
    top: 32%;
    left: 43%;
}
.box11 .prenom1 {
    top: 36%;
    left: 31%;
    border-bottom: 1px solid gray;
}

.box11 .email12 {
    top: 45%;
    left: 45%;
}
.box11 .email1 {
    top: 50%;
    left: 31%;
    border-bottom: 1px solid gray;
}


.box11 .mdp12 {
    top: 58%;
    left: 39%;
}
.box11 .mot {
    top: 62%;
    left: 31%;
    border-bottom: 1px solid gray;
}

.box11 .mdp0 {
    top: 72%;
    left: 31%;
}
.box11 .mdp2 {
    top: 77%;
    left: 31%;
    border-bottom: 1px solid gray;
}
.box11 .btn32 {
    border-radius: 30px;
    border: none;
    padding: 7px 30px;
    position: absolute;
    top: 88%;
    left: 23%;
    color: #fff;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    background: -webkit-linear-gradient(left, #988878, #484b4d);
}
.box11 input,button {
    background: none;
    border:none;
    outline: none;
}


    .box22 {
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100vh;
        background: #d4d1d1;
    }

    .box11 {

        height: 445px;
        width: 470px;
        position: relative;
        background: #fff;
    }
.box11 h2 {
    color: #000;
    font-size: 22px;
    font-family: Montserrat;
    position: absolute;
    top: 7%;
    left: 32%;
}


 


   
   

   
    .box11 .img-inscription1 {
    display: none;
    }

  
   .box11 .img-inscription1 p {
    position: absolute;
    color: #000;
    max-width: 230px;
    font-size: 13px;
    top: 15%;
    left: 11%;
    text-align: center;
}

 .box11 .img-inscription1 a {
    color: #000;
    position: absolute;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 0px 7px;
    top: 75%;
    left: 33%;
}
    .box11 .img-inscription1 a:hover {
        text-decoration: none;
    }

         
        
     }
     @media screen and (min-width:320px) and (max-width:480px){
                    .box11 .nom, .nom1,.prenom, .prenom1,.email12,.email1,.mdp12,.mot,.mdp0,.mdp2 {
    position: absolute;
}

.box11 .nom {
    top: 18%;
    left: 41%;
}
.box11 .nom1 {
    top: 22%;
    left: 21%;
    border-bottom: 1px solid gray;
}

.box11 .prenom {
    top: 32%;
    left: 39%;
}
.box11 .prenom1 {
    top: 36%;
    left: 21%;
    border-bottom: 1px solid gray;
}

.box11 .email12 {
    top: 45%;
    left: 42%;
}
.box11 .email1 {
    top: 50%;
    left: 21%;
    border-bottom: 1px solid gray;
}


.box11 .mdp12 {
    top: 58%;
    left: 35%;
}
.box11 .mot {
    top: 62%;
    left: 21%;
    border-bottom: 1px solid gray;
}

.box11 .mdp0 {
    top: 72%;
    left: 21%;
}
.box11 .mdp2 {
    top: 77%;
    left: 21%;
    border-bottom: 1px solid gray;
}
.box11 .btn32 {
    border-radius: 30px;
    border: none;
    padding: 7px 9px;
    position: absolute;
    top: 88%;
    left: 14%;
    color: #fff;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    background: -webkit-linear-gradient(left, #988878, #484b4d);
}
.box11 input,button {
    background: none;
    border:none;
    outline: none;
}


    .box22 {
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100vh;
        background: #d4d1d1;
    }

    .box11 {

        height: 500px;
        width: 300px;
        position: relative;
        background: #fff;
    }
.box11 h2 {
    color: #000;
    font-size: 22px;
    font-family: Montserrat;
    position: absolute;
    top: 7%;
    left: 25%;
}


 


   
   

   
    .box11 .img-inscription1 {
    display: none;
    }

  
   .box11 .img-inscription1 p {
    position: absolute;
    color: #000;
    max-width: 230px;
    font-size: 13px;
    top: 15%;
    left: 11%;
    text-align: center;
}

 .box11 .img-inscription1 a {
    color: #000;
    position: absolute;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 0px 7px;
    top: 75%;
    left: 33%;
}
    .box11 .img-inscription1 a:hover {
        text-decoration: none;
    }

     }
</style>
<!--  <div class="cont-2">
                <div class="form">
                    <h2>Connection</h2>
                    <form action="" method="post">
                        <label>
                            <span>Adresse email</span>
                            <input type="email" name="email" required>
                        </label>
                        <label>
                            <span>Mot de passe</span>
                            <input type="password" name="password" required>
                        </label>
                        <input class="submit" type="submit" value="Connection">
                    </form>
                    <a class="forgot-pass" href="#">Mot de passe oublié ?</a>
                  <p class="nop"> Inscrivez-vous et faites partie de la plus grande famille</p>
                   <a href="#" class="inscription2">inscription</a>
                    <a href="#"><img src="../assets/logo-fb-gris.png" alt="" class="fb1"></a>
                    <a href="#"><img src="../assets/logo-tw-gris.png" alt="" class="tw1"></a>
                    <a href="#"><img src="../assets/logo-it-gris.png" alt="" class="it1"></a>
                    <a href="#"><img src="../assets/logo-discord-gris.png" alt="" class="discord1"></a>
                </div>
                <div class="sub-cont">
                    <h2>Nouveau ici ?</h2>
                    <p> Inscrivez-vous et faites partie de la plus grande famille</p>
                    <a href="#" class="inscription">inscription</a>
                </div>
            </div>
-->