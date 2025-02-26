<script setup>
import profile from '../components/HomeComponents/Profile.vue'
import experiences from '../components/HomeComponents/Experiences.vue'
import schools from '../components/HomeComponents/Schools.vue'
import socmed from '../components/HomeComponents/Socmed.vue'


function handleActiveStateChange(activeState){
    const profileElement = document.querySelector('.profile');
    const schoolsElement = document.querySelector('.schools');
    const socmedElement = document.querySelector('.socMed');
    if (activeState){
        profileElement?.classList.add('hide');
        schoolsElement?.classList.add('hide');
        socmedElement?.classList.add('hide');
    } else {
        setTimeout(() => {
            profileElement?.classList.remove('hide');
            schoolsElement?.classList.remove('hide');
            socmedElement?.classList.remove('hide');
        }, 500);
    }
}
</script>

<template>
    <div class="home">
        <profile />
        <schools />
        <socmed />
        <experiences @updateActiveState="handleActiveStateChange" />
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
        align-items: stretch;
        padding: 10px 0;
    }
    .home > div:first-child{
        filter: grayscale(0);
    }
    .home > div:hover{
        filter: grayscale(0);
    }
    .home > div {
      max-width: 45%;
      min-height: 45%;
      border: 0.01rem solid #333;
      width: 100%;
      padding: 1rem;
      border-radius: 25px;
      backdrop-filter: blur(5px);
      transition: all 0.5s ease;
      filter: grayscale(1);
    }
    .hide{
        display: none;
    }
    .experiences.active {
        width: 100%;
        max-width: 90%;
        height: 100%;
        max-height: 90%;
        filter: grayscale(0);
        margin: auto;
    }
    .experiences{
        max-width: 45%;
        min-height: 45%;
        transition: all 0.5s ease;
    }
</style>