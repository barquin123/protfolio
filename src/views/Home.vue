<script setup>
import profile from '../components/HomeComponents/Profile.vue'
import experiences from '../components/HomeComponents/Experiences.vue'
import schools from '../components/HomeComponents/Schools.vue'
import socmed from '../components/HomeComponents/Socmed.vue'
</script>

<template>
    <div class="home">
        <profile />
        <schools />
        <socmed />
        <experiences />
    </div>
</template>

<style scoped>
    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        height: 100vh;
        justify-content: space-evenly;
        gap: 10px;
    }
    .home > div {
      max-width: 45%;
      min-height: 45%;
      height: 100%;
      border: 0.01rem solid #333;
      width: 100%;
      padding: 1rem;
      border-radius: 25px;
      backdrop-filter: blur(5px);
      height: auto;
    }
</style>