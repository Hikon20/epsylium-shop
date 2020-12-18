<template>

	<div>
		<div class="preload">
			<img class="logo12" src="../assets/logo-noir.png" alt="">
			<h3>Chargement de la meute..</h3>
			<img class="wolf1" src="../assets/wolf-run2.gif" alt="wolf1">
			<img class="wolf2" src="../assets/wolf-run2.gif"  alt="wolf2">
			<img class="wolf3" src="../assets/wolf-run2.gif" alt="wolf3">
		</div>
	</div>
</template>


<script>
 
import Preloader from '@/components/Preloader.vue';

export default {
 mounted(){ 
	window.addEventListener('load', () => {
		const preload = document.querySelector('.preload');
		preload.classList.add('preload-finish');
	});
 },
	name: 'preloader',
	components:
	Preloader,
	
}
</script>

<style scoped>
* {
	margin:0;
	padding: 0;
	box-sizing: border-box;
}

.preload {
	position: fixed;
	z-index: 1;
	top:0;
	width: 100%;
	height: 100vh;
	background:url(https://images6.alphacoders.com/673/thumb-1920-673751.jpg);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 1.5s ease;
}

.wolf1,
.wolf2,
.wolf3{
	height: 100px;
	position: absolute;
	left: -30%;
}

.wolf1{
	top:25%;
	transform: translate(100%, -25%);
	animation: wolfs 5s ease infinite ;
	
}

.wolf2{
	top: 50%;
	transform: translate(100%, -50%);
	animation: wolfs 5s ease infinite 2s;
	
}
.wolf3{
	top: 75%;
	transform: translate(100%, -75%);
	animation: wolfs 5s ease infinite 3s;
	
}

.logo12 {
	height:200px ;
	z-index: 1;
	animation: logo12 1s ease infinite alternate;
}

.preload h3 {
	position:absolute;
	top:75%;
	transform: translateY(-75%);
	color: #fff;
	font-size: 30px;
	font-family: Montserrat,sans-serif;
}
.preload-finish {
	opacity: 0;
	pointer-events: none;

}

@keyframes logo12 {
	from {
	transform: translateY(0px);
	}

	to{
		transform:translateY(50px)
	}
}

@keyframes wolfs {
	from {
		left:-10%;
	}

	to {
		left: 130%;
	}
} 
	



</style>