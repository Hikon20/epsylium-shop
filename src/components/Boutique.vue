<template>
    <div class="undermaintenance">
            <div class="undermaintenance1">
                <h1>Nous sommes en maintenance</h1>
                <p>Nous ajustons et mettons a jour les catalogues</p>
                <span class="circle"></span>
                <span class="msg"></span>
                <span class="notifymsg"></span>
                <span class="field"></span>
                <input type="email" placeholder="Entrez votre email">
                <button>Me Notfifier</button>
    </div>
    </div>

</template>
<script>
export default {
    name: "Boutique",
    components: {

    }
}
</script>
<style  scoped>
    .undermaintenance1 {
        background-image: url('../assets/maintenance-boutique.jpg');
        height: 100vh;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>