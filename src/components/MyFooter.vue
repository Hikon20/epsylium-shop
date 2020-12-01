<template>

    <div class="wrap">
        <footer>
            <div class="footer-top">
                <div class="container-fluid">
                    <div class="row col-12 justify-content-start">
                        <div class="col-lg-4 col-md-6 col-12  segment-one text-md-left text-center ">
                            <h2>À propos</h2>
                            <p>Epsylium Shop est une marque déposer et crée par Hikon, elle consiste a crée des
                                vêtements des accesoires en imprimé loup pour les amoureux de ces derniers,la marque est
                                Franco-Islandaise et son siège social est situé à Paris.</p>
                            
                                <div class="row ">
                        <div class="col-12 text-md-left text-center">

                                    <a href="https://www.facebook.com/Epsylium-Shop-120695233107343/"
                                        target="_blank"><img src="../assets/logo-fb.png" alt="logo fb"></a>
                                    <a href="https://twitter.com/EpsyliumS" target="_blank"><img
                                            src="../assets/logo-tw.png" alt="logo twitter"></a>
                                    <a href="https://www.instagram.com/epsylium/" target="_blank">
                                        <img src="../assets/logo-it.png" alt="logo instagram"></a>
                                    <a href="https://discord.gg/ARgwmbN" target="_blank"><img
                                            src="../assets/logo-discord.png" alt="logo discord"></a>

                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-12 segment-two text-md-left text-center">
                            <h2>Menu Footer</h2>
                            <ul>
                                <li><a href="#">Collection sauvage</a></li>
                                <li><a href="#">Histoires des loups</a></li>
                                <li><a href="#">Tableau des tailles</a></li>
                                <li><a href="#">Politique de retour / remboursement</a></li>
                                <li><a href="#">Politique de confidentialité</a></li>
                            </ul>
                        </div>


                        <div class="col-lg-4 col-md-6 col-12  segment-three text-md-left text-center">
                            <h2>Newsletter</h2>
                            <p>Abonnez-vous a la newsletter et ne rater aucune offres !</p>
                            <form action="">
                                <input type="email" placeholder="Entrez votre email" aria-required="true">
                                <input type="submit" value="S'abonner">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <div class="pay">
             <h2 >© Epsylium Shop</h2>
            <h2>Crée par Hikon</h2>
            <img src="../assets/paiement.png" alt="">
        </div>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'MyFooter',


    }
</script>
<style lang="css">
    .container-fluid {
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box;
    }

    .row {
        background: red;
        padding: 0 !important;
        margin: 0 !important;


    }

    h2 {
        color: #d6be88;
        font-size: 22px;
        text-transform: uppercase;
    }

    .footer-top {
        background: white;

        width: auto;
        height: auto;
    }

    .segment-one {
        padding: 10px;
    }

    .segment-one h2 {
        font-family: Montserrat, sans-serif;
        font-size: 22px;
        letter-spacing: 3px;



    }

    .segment-one p {
        font-size: 22px;
        max-width: 100%;
        color: black;


    }

    .segment-one ul {
        list-style: none;
        margin: 0;
        display: table-footer-group;
    }

    .segment-one li {
        display: inline-flex;

    }


    .segment-one a img {
        height: 55px;
        position: relative;

    }

    .segment-two {
        padding: 10px;
        background: green;
    }

    .segment-two h2 {
        font-family: Montserrat, sans-serif;
        font-size: 22px;
        letter-spacing: 3px;
     
     
    }

    .segment-two ul {
        list-style: none;
        margin: 0;
        margin-left: 0px;
        padding-left: 0px;
        line-height: 33px;
      
    }

    .segment-two ul li a {
        color: black;
        text-decoration: none;
        font-size: 22px;
    }

    .segment-three {
        padding: 10px;
        background: blue;
    }

    .segment-three h2 {
        font-family: Montserrat, sans-serif;
        font-size: 22px;
        letter-spacing: 3px;
    }

    .segment-three p {
        font-size: 18px;
        color: black;
    }

    .segment-three form input[type=submit] {
        background: #d6be88;
        outline: none;
        text-transform: uppercase;
        border: none;
        padding: 7px 7px;
        color: white;

    }

    .segment-three form input[type=email] {
        padding: 7px 7px;
        width: 200px;
    }

    .segment-one,
    .segment-two,
    .segment-three {
        margin-bottom: 30px;
    }

    .footer-bottom-text {
        text-align: center;
        background: #111;
    }

    /* @media only screen and (min-width: 768px) and (max-width: 991px) {
    .md-mb-30 {
        margin-bottom: 30px;
    }
}
@media only screen and (max-width: 767px) {
    .sm-mb-30 {
        margin-bottom: 30px;
    }
    .footer-top {
        padding: 50px 0;
    }
} */

    @media (min-width: 768px) {
        .segment-two {
            padding: 10px 0 10px 200px !important;
        }
    }

    @media (min-width: 992px) {
        .segment-two {
            padding: 10px  !important;
        }
    }


   
   
</style>