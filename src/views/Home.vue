<template>
  <div class="wrap">
    <navbar/>
    <div class="vroum" id="app">
      <h3>Collection sauvage</h3>
      <h2>Epsylium Shop</h2>
      <input type="button"  value="Acheter Maintenant">
    </div>
   <!--  <MyFooter/> -->
  </div>
</template>

<script>
  // @ is an alias to /src
 /*  import MyFooter from '@/components/MyFooter.vue';  */
  import Navbar from '@/components/Navbar.vue';

  export default {

    name: 'Home',
    components: {
      Navbar,
  /*     MyFooter */
    }
  }
</script>
<style>

.btn{
  width: 100%;
  padding: 5px 0 ;
  margin: 10px 0;
  color: #fff;
  border-radius:5px ;
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
  color:#000;
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
.description .icon  {
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
  border-radius:0;
}

.description:hover .icon {
  opacity: 0;
}

.description .contents {
    color:#fff;
    padding: 5%;
    transform: scale(0.5);
    transform: translateY(-200%);
    transition: opacity .2s transform .8s;
    opacity: 0;
}

.description:hover .contents{
   transform: scale(1);
    transform: translateY(0);
   opacity: 1;
}
.description h2 {
  margin:20px 0;
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
    left: 10rem;
    top: 85%;
    font-size: 16px;
  }

  .vroum h2 {
    left: 10rem;
    top: 90%;
    font-size: 25px;
  }

  .vroum input[type=button] {
    position: absolute;
    top: 96%;
    border: none;
    padding: 10px 12px;
    left: 10rem;
    font-size: 18px;
    text-transform: uppercase;
    font-family
    : Montserrat, sans-serif;
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
    left: 9rem;
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



  @media screen and (min-width:769px) and (max-width:1024px) {
    
.appercu {
  position: relative;
  background: red;
  height: 100vh;
  width: 100%;
}
.card1 {
  z-index: 1 ;
     left: 0%;
    top: 10%;
  width: 245px;
  height: 400px;
  background: #f4f4f4;
  position: absolute;
  border-radius: 10px;
  
  transform: scale(0.95);
  transition: box-shadow .5s ease-in-out,
  transform .5s ease-in-out;
  text-align: start;
  overflow: hidden;
 
}

.card1:hover {
  transform: scale(1);
   box-shadow: 5px 20px 30px rgba(0, 0, 0, 2);
}

.card2 {
    left: 25%;
    top: 10%;
  width: 245px;
  height: 400px;
  background: #f4f4f4;
  position: absolute;
  border-radius: 10px;
  
  transform: scale(0.95);
  transition: box-shadow .5s ease-in-out,
  transform .5s ease-in-out;
  text-align: start;
  overflow: hidden;
}

.card2:hover {
  transform: scale(1);
   box-shadow: 5px 20px 30px rgba(0, 0, 0, 2);
}
.card3 {
  z-index: 1 ;
     left: 50%;
    top: 10%;
  width: 245px;
  height: 400px;
  background: #f4f4f4;
  position: absolute;
  border-radius: 10px;
  
  transform: scale(0.95);
  transition: box-shadow .5s ease-in-out,
  transform .5s ease-in-out;
  text-align: start;
  overflow: hidden;
 
}

.card3:hover {
  transform: scale(1);
   box-shadow: 5px 20px 30px rgba(0, 0, 0, 2);
}
.card4 {
  z-index: 1 ;
    left: 75%;
    top: 10%;
  width: 245px;
  height: 400px;
  background: #f4f4f4;
  position: absolute;
  border-radius: 10px;
  
  transform: scale(0.95);
  transition: box-shadow .5s ease-in-out,
  transform .5s ease-in-out;
  text-align: start;
  overflow: hidden;
 
}

.card4:hover {
  transform: scale(1);
   box-shadow: 5px 20px 30px rgba(0, 0, 0, 2);
}

.imgBox {
  width: 100%;
  height: 80%;
  overflow: hidden;
}
.imgBox img {
  width: 100%;
  height: 100%;
}

.details{
  position: absolute;
  width: 100%;
  height: 50%;
  background: #f4f4f4be;
  padding: 10px 20px;
  bottom: -30%;
  transition: .5s;
}
.details:hover{
  bottom: 0;
}
.textContent {
  position: relative;
  margin-top: 10px;
  color: #555;
}
.textContent h4 {
  font-size: 20px;
  padding: 5px 0;
}
.price {
  position: absolute;
  top: 30px;
  right: 0;
  font-size: 30px;
}

h5 {
  font-size: 18px;
  margin-top: 15px;
  padding: 10px 0;
  font-weight:bold;
  color: #555;
}

ul {
  display: flex;
  
}

ul li {
  list-style: none;
  width: 15px;
  height: 15px;
margin: -10px 51px 0px -40px;
  
  cursor: pointer;
}

ul li:nth-child(1){
  background: #00f;
}
ul li:nth-child(2){
  background: #f00;
}
ul li:nth-child(3){
  background: #f55;
}
ul li:nth-child(4){
  background: #ff0;
}
ul li:nth-child(5){
  background: #f0f;
}

button{
  width: 100%;
  padding: 5px 0 ;
  margin: 10px 0;
  color: #fff;
  border-radius:5px ;
  border: none;
  outline: none !important;
  cursor: pointer;
  transition: 0.8s;
}
button {
  background: -webkit-linear-gradient(0deg, #cdb682 50%, transparent 50%);
  background-size: 590px 80px;
  outline: none !important;
}
button:hover {
  outline: none !important;
  color:#000;
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
.description .icon  {
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
  border-radius:0;
}

.description:hover .icon {
  opacity: 0;
}

.description .contents {
    color:#fff;
    padding: 5%;
    transform: scale(0.5);
    transform: translateY(-200%);
    transition: opacity .2s transform .8s;
    opacity: 0;
}

.description:hover .contents{
   transform: scale(1);
    transform: translateY(0);
   opacity: 1;
}
.description h2 {
  margin:20px 0;
  text-align: center !important;
  font-size: 22px;
}
.description p {
  margin-top: 50px;
}

    nav .lien1,
    .lien2,
    .lien3,
    .lien4 {
      display: none;
    }

    .logo1 {
      left: 45%;
    }

    .burger {
      display: flex;
    }

    .vroum {
      background: url('../assets/header-1.jpg');
      background-size: cover;
      width: 100%;
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
    }

    .vroum h3,
    h2 {
      position: absolute;
      text-transform: uppercase;
      color: #fff;
      font-family: Montserrat, sans-serif;

    }

    .vroum h3 {
      left: 1rem;
      top: 76rem;
      font-size: 16px;
    }

    .vroum h2 {
      left: 1rem;
      top: 78rem;
      font-size: 25px;
    }

    .vroum input[type=button] {
      position: absolute;
      top: 81rem;
      border: none;
      padding: 10px 12px;
      left: 1rem;
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
  }

  @media screen and (min-width:480px) and (max-width:768px) {

    nav .lien1,
    .lien2,
    .lien3,
    .lien4 {
      display: none;
    }

    .logo1 {
      left: 41%;
    }

    .burger {
      display: flex;
    }

    .vroum {
      background: url('../assets/header-1.jpg');
      background-size: cover;
      width: 100%;
      height: 100vh;
      background-position: center;
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
      left: 1rem;
      top: 28rem;
      font-size: 12px;
    }

    .vroum h2 {
      left: 1rem;
      top: 30rem;
      font-size: 20px;
    }

    .vroum input[type=button] {
      position: absolute;
      top: 32rem;
      border: none;
      padding: 10px 12px;
      left: 1rem;
      font-size: 16px;
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
  }

  @media screen and (min-width:320px) and (max-width:480px) {

    nav .lien1,
    .lien2,
    .lien3,
    .lien4 {
      display: none;
    }

    .logo1 {
      left: 41%;
    }

    .burger {
      display: flex;
    }

    .vroum {
      background: url('../assets/header-1.jpg');
      background-size: cover;
      width: 100%;
      height: 100vh;
      background-position: center;
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
      left: 1rem;
      top: 35rem;
      font-size: 12px;
    }

    .vroum h2 {
      left: 1rem;
      top: 36rem;
      font-size: 20px;
    }

    .vroum input[type=button] {
      position: absolute;
      top: 38rem;
      border: none;
      padding: 8px 8px;
      left: 1rem;
      font-size: 14px;
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

  }
</style>