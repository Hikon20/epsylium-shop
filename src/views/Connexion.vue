<template>
    <div class="BODY-1">
        <navbar />
        <div class="box2">
            <div class="box1">
                <h2>Connection</h2>
                <form action="get">
                    <span class="email">Adresse email</span>
                    <input type="email" required>
                    <span class="mdp">Mot de passe</span>
                    <input type="password" required>
                    <input type="submit" value="Connection">
                </form>
                <a href="" class="forget">Mot de passe oublié ?</a>
                <p class="nop1">Inscrivez-vous et faites partie de la plus grande famille</p>
                
                <a class="nop2" href="/#/Inscription">Inscription</a>
                <a href=""><img src="../assets/logo-fb-gris.png" alt="facebook" class="fb1"></a>
                <a href=""><img src="../assets/logo-tw-gris.png" alt="twitter" class="tw1"></a>
                <a href=""><img src="../assets/logo-it-gris.png" alt="instagram" class="it1"></a>
                <a href=""><img src="../assets/logo-discord-gris.png" alt="discord" class="discord1"></a>
                <div class="img-inscription">
                    <h2>Nouveau ici ?</h2>
                    <p>Inscrivez-vous et faites partie de la plus grande famille</p>
                    <a href="/Inscription">Inscription</a>
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

    .nop1,
    .nop2 {
        display: none;
    }

    .box2 {
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100vh;
        background: #d4d1d1;
    }

    .box1 {

        height: 550px;
        width: 750px;
        position: relative;
        background: #fff;
    }

    .box1 h2 {
        color: #000;
        font-size: 22px;
        font-family: Montserrat;
        position: absolute;
        top: 10%;
        left: 21%;

    }

    .box1 .email {
        position: absolute;
        top: 20%;
        left: 23%;
        font-size: 18px;
        text-transform: uppercase;
        color: #a7a5a5;
    }

    .box1 input[type=email] {
        position: absolute;
        top: 25%;
        left: 20%;
        border-bottom: 1px solid #111;
    }

    .box1 .mdp {
        position: absolute;
        top: 40%;
        left: 24%;
        font-size: 18px;
        text-transform: uppercase;
        color: #a7a5a5;
    }

    .box1 input[type=password] {
        position: absolute;
        top: 45%;
        left: 20%;
        border-bottom: 1px solid #111;
    }

    .box1 input[type=submit] {
        border-radius: 30px;
        border: none;
        padding: 7px 60px;
        position: absolute;
        top: 55%;
        left: 16%;
        color: #fff;
        text-transform: uppercase;
        font-family: Montserrat, sans-serif;
        background: -webkit-linear-gradient(left, #3e2b28, #322f35);
    }

    .box1 input {
        border: none;
        outline: none;
        background: none;
    }

    .box1 .forget {
        color: #a7a5a5;
        position: absolute;
        top: 65%;
        left: 22%;
    }

    .box1 .forget:hover {
        color: #000;
        text-decoration: none;
    }

    .fb1 {
        position: absolute;
        height: 40px;
        left: 16%;
        top: 74%;
    }

    .tw1 {
        position: absolute;
        height: 40px;
        left: 24%;
        top: 74%;
    }

    .it1 {
        position: absolute;
        height: 40px;
        left: 32%;
        top: 74%;
    }

    .discord1 {
        position: absolute;
        height: 40px;
        left: 42%;
        top: 74%;
    }

    .box1 .img-inscription {
        height: 100%;

        width: 280px;
        position: absolute;
        right: 0;
        background-image: url('../assets/wolf-inscription.jpg');
        background-size: cover;
        background-position: right;
    }

    .box1 .img-inscription h2 {
        position: absolute;
        font-size: 18px;
        color: #fff;
        text-transform: unset;
        left: 30%
    }

    .box1 .img-inscription p {
        position: absolute;
        color: #fff;
        max-width: 230px;
        font-size: 13px;
        top: 15%;
        left: 8%;
        text-align: center;
    }

    .box1 .img-inscription a {
        color: #fff;
        position: absolute;
        border: 2px solid #fff;
        border-radius: 30px;
        padding: 0px 7px;
        top: 75%;
        left: 33%;
    }

    .box1 .img-inscription a:hover {
        text-decoration: none;
    }

    @media screen and (min-width:769px) and (max-width:1024px) {

        .nop1,
        .nop2 {
            display: block;
        }

        .nop1 {
            position: absolute;
            color: #000;
            max-width: 230px;
            font-size: 13px;
            top: 72%;
            left: 23%;
            text-align: center;
        }

        .nop2 {
            color: #000;
            position: absolute;
            border: 2px solid #000;
            border-radius: 30px;
            padding: 0px 7px;
            top: 79%;
            left: 38%;
        }

        .box2 {
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100vh;
            background: #d4d1d1;
        }

        .box1 {

            height: 650px;
            width: 480px;
            position: relative;
            background: #fff;
        }

        .box1 h2 {
            color: #000;
            font-size: 22px;
            font-family: Montserrat;
            position: absolute;
            top: 10%;
            left: 30%;

        }

        .box1 .email {
            position: absolute;
            top: 20%;
            left: 33%;
            font-size: 18px;
            text-transform: uppercase;
            color: #a7a5a5;
        }

        .box1 input[type=email] {
            position: absolute;
            top: 25%;
            left: 28%;
            border-bottom: 1px solid #111;
        }

        .box1 .mdp {
            position: absolute;
            top: 40%;
            left: 34%;
            font-size: 18px;
            text-transform: uppercase;
            color: #a7a5a5;
        }

        .box1 input[type=password] {
            position: absolute;
            top: 45%;
            left: 28%;
            border-bottom: 1px solid #111;
        }

        .box1 input[type=submit] {
            border-radius: 30px;
            border: none;
            padding: 7px 60px;
            position: absolute;
            top: 55%;
            left: 24%;
            color: #fff;
            text-transform: uppercase;
            font-family: Montserrat, sans-serif;
            background: -webkit-linear-gradient(left, #3e2b28, #322f35);
        }

        .box1 input {
            border: none;
            outline: none;
            background: none;
        }

        .box1 .forget {
            color: #a7a5a5;
            position: absolute;
            top: 65%;
            left: 32%;
        }

        .box1 .forget:hover {
            color: #000;
            text-decoration: none;
        }

        .fb1 {
            position: absolute;
            height: 40px;
            left: 24%;
            top: 90%;
        }

        .tw1 {
            position: absolute;
            height: 40px;
            left: 36%;
            top: 90%;
        }

        .it1 {
            position: absolute;
            height: 40px;
            left: 50%;
            top: 90%;
        }

        .discord1 {
            position: absolute;
            height: 40px;
            left: 63%;
            top: 90%;
        }

        .box1 .img-inscription {
            height: 100%;
            display: none;
            width: 280px;
            position: absolute;
            right: 0;
            background-image: url('../assets/wolf-inscription.jpg');
            background-size: cover;
            background-position: right;
        }

        .box1 .img-inscription h2 {
            position: absolute;
            font-size: 18px;
            color: #fff;
            text-transform: unset;
            left: 30%;

        }

        .box1 .img-inscription p {
            position: absolute;
            color: #fff;
            max-width: 230px;
            font-size: 13px;
            top: 15%;
            left: 8%;
            text-align: center;
        }

        .box1 .img-inscription a {
            color: #fff;
            position: absolute;
            border: 2px solid #fff;
            border-radius: 30px;
            padding: 0px 7px;
            top: 75%;
            left: 33%;
        }

        .box1 .img-inscription a:hover {
            text-decoration: none;
        }
    }
     @media screen and (min-width:480px) and (max-width:768px){
         
        .nop1,
        .nop2 {
            display: block;
        }

        .nop1 {
            position: absolute;
            color: #000;
            max-width: 230px;
            font-size: 13px;
            top: 72%;
            left: 23%;
            text-align: center;
        }

     .nop2 {
    color: #000;
    position: absolute;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 0px 7px;
    top: 82%;
    left: 40%;
}
        .box2 {
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100vh;
            background: #d4d1d1;
        }

        .box1 {

            height: 650px;
            width: 400px;
            position: relative;
            background: #fff;
        }

        .box1 h2 {
            color: #000;
            font-size: 22px;
            font-family: Montserrat;
            position: absolute;
            top: 10%;
            left: 30%;

        }

        .box1 .email {
            position: absolute;
            top: 20%;
            left: 33%;
            font-size: 18px;
            text-transform: uppercase;
            color: #a7a5a5;
        }

        .box1 input[type=email] {
            position: absolute;
            top: 25%;
            left: 28%;
            border-bottom: 1px solid #111;
        }

        .box1 .mdp {
            position: absolute;
            top: 40%;
            left: 34%;
            font-size: 18px;
            text-transform: uppercase;
            color: #a7a5a5;
        }

        .box1 input[type=password] {
            position: absolute;
            top: 45%;
            left: 28%;
            border-bottom: 1px solid #111;
        }

      .box1 input[type=submit] {
    border-radius: 30px;
    border: none;
    padding: 7px 60px;
    position: absolute;
    top: 55%;
    left: 21%;
    color: #fff;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    background: -webkit-linear-gradient(left, #3e2b28, #322f35);
}
        .box1 input {
            border: none;
            outline: none;
            background: none;
        }

        .box1 .forget {
            color: #a7a5a5;
            position: absolute;
            top: 65%;
            left: 32%;
        }

        .box1 .forget:hover {
            color: #000;
            text-decoration: none;
        }

        .fb1 {
            position: absolute;
            height: 40px;
            left: 24%;
            top: 90%;
        }

        .tw1 {
            position: absolute;
            height: 40px;
            left: 36%;
            top: 90%;
        }

        .it1 {
            position: absolute;
            height: 40px;
            left: 50%;
            top: 90%;
        }

        .discord1 {
            position: absolute;
            height: 40px;
            left: 63%;
            top: 90%;
        }

        .box1 .img-inscription {
            height: 100%;
            display: none;
            width: 280px;
            position: absolute;
            right: 0;
            background-image: url('../assets/wolf-inscription.jpg');
            background-size: cover;
            background-position: right;
        }

        .box1 .img-inscription h2 {
            position: absolute;
            font-size: 18px;
            color: #fff;
            text-transform: unset;
            left: 30%;

        }

        .box1 .img-inscription p {
            position: absolute;
            color: #fff;
            max-width: 230px;
            font-size: 13px;
            top: 15%;
            left: 8%;
            text-align: center;
        }

        .box1 .img-inscription a {
            color: #fff;
            position: absolute;
            border: 2px solid #fff;
            border-radius: 30px;
            padding: 0px 7px;
            top: 75%;
            left: 33%;
        }

        .box1 .img-inscription a:hover {
            text-decoration: none;
        }
     }
     @media screen and (min-width:320px) and (max-width:480px){
           .nop1,
        .nop2 {
            display: block;
        }

    .nop1 {
    position: absolute;
    color: #000;
    max-width: 230px;
    font-size: 13px;
    top: 72%;
    left: 11%;
    text-align: center;
}
   .nop2 {
    color: #000;
    position: absolute;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 0px 7px;
    top: 82%;
    left: 36%;
}
        .box2 {
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100vh;
            background: #d4d1d1;
        }

     .box1 {
    height: 459px;
    width: 290px;
    position: relative;
    background: #fff;
}
.box1 h2 {
    color: #000;
    font-size: 22px;
    font-family: Montserrat;
    position: absolute;
    top: 10%;
    left: 27%;
}

 .box1 .email {
    position: absolute;
    top: 20%;
    left: 28%;
    font-size: 18px;
    text-transform: uppercase;
    color: #a7a5a5;
}
 .box1 input[type=email] {
    position: absolute;
    top: 25%;
    left: 20%;
    border-bottom: 1px solid #111;
}

       .box1 .mdp {
    position: absolute;
    top: 40%;
    left: 30%;
    font-size: 18px;
    text-transform: uppercase;
    color: #a7a5a5;
}

      .box1 input[type=password] {
    position: absolute;
    top: 45%;
    left: 21%;
    border-bottom: 1px solid #111;
}

 .box1 input[type=submit] {
    border-radius: 30px;
    border: none;
    padding: 7px 33px;
    position: absolute;
    top: 55%;
    left: 21%;
    color: #fff;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    background: -webkit-linear-gradient(left, #3e2b28, #322f35);
}
        .box1 input {
            border: none;
            outline: none;
            background: none;
        }

   .box1 .forget {
    color: #a7a5a5;
    position: absolute;
    top: 65%;
    left: 29%;
}

        .box1 .forget:hover {
            color: #000;
            text-decoration: none;
        }

        .fb1 {
            position: absolute;
            height: 32px;
            left: 27%;
            top: 92%;
        }

        .tw1 {
            position: absolute;
            height: 32px;
            left: 39%;
            top: 92%;
        }

        .it1 {
            position: absolute;
            height: 32px;
            left: 53%;
            top: 92%;
        }

        .discord1 {
            position: absolute;
            height: 32px;
            left: 66%;
            top: 92%;
        }

        .box1 .img-inscription {
            height: 100%;
            display: none;
            width: 280px;
            position: absolute;
            right: 0;
            background-image: url('../assets/wolf-inscription.jpg');
            background-size: cover;
            background-position: right;
        }

        .box1 .img-inscription h2 {
            position: absolute;
            font-size: 18px;
            color: #fff;
            text-transform: unset;
            left: 30%;

        }

        .box1 .img-inscription p {
            position: absolute;
            color: #fff;
            max-width: 230px;
            font-size: 13px;
            top: 15%;
            left: 8%;
            text-align: center;
        }

        .box1 .img-inscription a {
            color: #fff;
            position: absolute;
            border: 2px solid #fff;
            border-radius: 30px;
            padding: 0px 7px;
            top: 75%;
            left: 33%;
        }

        .box1 .img-inscription a:hover {
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