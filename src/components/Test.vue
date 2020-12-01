<template>
<div></div>
  <!--  <div class="preload">
      <img class="logo12" src="../assets/logo-noir.png" alt="logo">
      <h3>Chargement de la page...</h3>
      <img class="wolf1" src="../assets/wolf-run.gif" alt="wolf run1">
       <img class="wolf2" src="../assets/wolf-run.gif" alt="wolf run2">
        <img class="wolf3" src="../assets/wolf-run.gif" alt="wolf run3">
    </div> -->
</template>

<script>
/*  // creation d'une fonction pour le preload 
  window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish'); 
   }); */

    export default {
        name: "loading",
        mounted(){
            const loader = document.querySelector('.loader');

            window.addEventListener('load', () => {
                loader.classList.add('fondu-out');
            })
        } 
    }
</script>

<style>
    svg text {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 5px;
        letter-spacing: 1px;
        animation: text 1s ease-in-out infinite;
    }

    @keyframes text {
        50% {
            opacity: 0.1;
        }
    }

    svg polygon {
        stroke-dasharray: 22;
        stroke-dashoffset: 1;
        animation: dash 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite alternate-reverse;
    }

    @keyframes dash {
        to {
            stroke-dashoffset: 234;
        }
    }

    .loader {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .fondu-out .loader{
        opacity: 0;
    }


    /* Zone head*/

/* 
.preload {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image:url('../assets/preload.jpg') ;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: opacity 40s ease;
}

.wolf1,
.wolf2,
.wolf3 {
  height: 100px;
  position: absolute;
  left: -50%;
}

.wolf1{
  top: 25%;
  transform: translate(100%, -25%);
  animation: wolf 5s  ease infinite 2s;
}
.wolf2{
  top:50%;
  transform: translate(100%, -50%);
  animation: wolf 5s ease infinite 2.5s;

}
.wolf3{
  top:75%;
  transform: translate(100%, -75%);
  animation: wolf  5s ease infinite 1.5s;
}

.logo12 {
  height: 200px;
  z-index: 2;
  animation:  logo 1s ease infinite alternate-reverse;
}

.preload h3 {
  position: absolute;
  top: 75%;
  transform: translate(-75%);
  text-transform: uppercase;
  color: #333333;
  font-size:35px ;
  font-family: Montserrat,sans-serif;
  left: 62%;
}

.preload-finish {
  opacity: 0;
  pointer-events: none;
}


@keyframes logo{
  from {
    transform: translateY(0px);
  }
  to{
    transform: translateY(50px);
  }  
}
@keyframes wolf {
    from{
      left: -20%;
    }
    to {
      left:  120%;
    }
} */
</style>