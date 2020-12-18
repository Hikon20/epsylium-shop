<template>
<div>
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12 segment-two">
                    <h2>Menu footer</h2>
                    
                      <ul>
                    <li><a href="#">Collection Sauvage</a></li>
                    <li><a href="#">Histoire des loups</a></li>
                    <li><a href="#">Tableau des tailles</a></li>
                    <li><a href="#">Politique de retour / Remboursement</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                </ul>
                </div>
              
          
             <div class="col-md-4 col-sm-6 col-xs-12 segment-three">
                 <h2>Suivez-nous</h2>
                 <p>Suivez-nous sur les réseau sociaux pour ne pas rater des offres spéciales</p>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-pinterest"></i></a>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 segment-four">
            <h2>Newsletter</h2>
            <p>Abonnez-vous a la newsletter et ne rater aucune offres !</p>
        <form action="">
            <input type="email" placeholder="Email" required>
            <input type="submit" value="Subscribe">
        </form>
        
        </div>
        
        </div>
          </div>
    </div>
    <p class="footer-bottom-text">All Right Resevered by &copy;Epsylium Shop</p>
</div>
  
</template>
<script>
import MyFooter from '@/components/MyFooter.vue'
    export default {
        name: 'MyFooter',
        components:
        MyFooter

    }
</script>
<style scoped>

p {
    color: #999;
    line-height: 25px;

}

h2,h3 {
    color: #fff;
}

h2 {
    font-size: 18px;
}

.footer-top {
    background: #111;
    padding: 80px 0;
}

.segment-one h3 {
    font-family: Courgette;
    color: #fff;
    letter-spacing: 3px;
    margin: 10px 0;
}

.segment-two  h2{
    color: #fff;
    font-family: Poppins;
    text-transform: uppercase;
}

.segment-two  h2::before  {
    content:"|";
    color: #cdb682;
    padding-right: 10px;
}

.segment-two ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.segment-two ul li {
    border-bottom:  1px solid rgba(255, 255, 255, 0.3);
    line-height: 40px;
}

.segment-two ul li a {
    color: #999;
    text-decoration: none;
}

.segment-three h2{
    color: #fff;
    font-family: Poppins;
    text-transform: uppercase;
}

.segment-three h2::before {
    content: '|';
    color: #cdb682;
    padding-right: 10px;
}

.segment-three a {
    background: #494848;
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 50%;
}

.segment-three a i {
    font-size: 20px;
    color: #fff;
    padding: 10px 12px;
}

.segment-four h2 {
    color: #fff;
    font-family: Poppins;
    text-transform: uppercase;
}
.segment-four h2::before {
    content: '|';
    color: #cdb682;
    padding-right: 10px;
}

.segment-four form input[type=submit] {
    background: #cdb682!important;
    border: none;
    padding: 3px 15px;
    margin-left: -5px;
    color: #fff;
    text-transform: uppercase;
}


.segment-four form input[type=email] {
    margin-left: -5px;
    margin-bottom: 5px;
    width: 100%;
}

.footer-bottom-text {
    text-align: center;
    background: #000;
    line-height: 75px;
}
</style>
