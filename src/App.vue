<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="navLinks" to="/">Bios 
          <!-- <span id="icons" class="hide"> -->
            <!-- icon</span> -->
          </RouterLink>
        <RouterLink class="navLinks" to="/projects">Projects
          <!-- <span id="icons" class="hide"> -->
            <!-- icon</span> -->
          </RouterLink>
        <RouterLink class="navLinks" to="/contact">Contact Me
          <!-- <span id="icons" class="hide"> -->
            <!-- icon</span> -->
          </RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <transition name="fade-slide" mode="in-out" >
    <RouterView />
  </transition>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background-image: url('/src/assets/grid.svg');
    background-size: auto;
  }
  .hide{
    display: block;
  }
  #icons{
    position: absolute;
    border-radius: 50%;
    /* width: 20px;
    height: 10px; */
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    background: hsla(160, 100%, 37%);
    padding: 14px 10px 14px 10px;
    z-index: 1;
    visibility: hidden;
    transition: right 0.3s ease;
    z-index: -1;
  }
  .navLinks:hover #icons{
    right: -50px;
    right: -50px;
    z-index: 1;
    visibility: visible;
  }
  .navLinks{
    position: relative;
  }
  .navLinks::before{
    content: '';
    background: #fff;
    height: 1px;
    width: 25px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
  }
  .navLinks:hover::before{
    width: 80%;
  }
  .navLinks.router-link-active::before{
    background: hsla(160, 100%, 37%);
    width: 80%;
  }
  /* .navLinks.router-link-active::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 17px 13px hsla(160, 100%, 37%), inset 0px 0px 17px 13px  hsla(160, 100%, 37%);
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
  } */
  .fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
  filter: blur(10px);
}

.fade-slide-enter-to {
  transform: translateX(0);
  opacity: 1;
  filter: blur(0px);
}

.fade-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
  filter: blur(10px);
}

.fade-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  filter: blur(0px);
}
</style>
