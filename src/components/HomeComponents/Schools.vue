<script setup>
    import { ref } from "vue";

    const activeSchool = ref("College");

    const setActive = (school) => {
    activeSchool.value = school;
    };
</script>

<template>
    <div class="schools">
        <div class="sc-flex-det">
            <div class="sc-logo-cont">
                <div class="College" :class="{active: activeSchool === 'College'}" @click="setActive('College')" >
                    <div class="sc-logo">
                        <img src="https://placehold.co/100x100" alt="elementary logo">
                    </div>
                </div>
                <div class="HS" :class="{active: activeSchool === 'hs'}" @click = "setActive('hs')">
                    <div class="sc-logo">
                        <img src="https://placehold.co/100x100" alt="elementary logo">
                        <img src="https://placehold.co/100x100" alt="elementary logo">
                    </div>
                </div>
                <div class="elementary" :class="{active: activeSchool === 'elementary'}" @click = "setActive('elementary')">
                    <div class="sc-logo">
                        <img src="https://placehold.co/100x100" alt="elementary logo">
                    </div>
                </div>
            </div>
            <div class="descriptions">
                <div v-if="activeSchool === 'College'"  class="College sc-description ">
                    <h2>College</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?</p>
                </div>
                <div v-if="activeSchool === 'hs'"  class="HS sc-description ">
                    <h2>HS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?</p>
                </div>
                <div v-if="activeSchool === 'elementary'" class="elementary sc-description ">
                    <h2>Elementary</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .sc-logo-cont > div{
        position: relative;
        cursor: pointer;
    }
    .sc-logo-cont div.active::before{
        position: absolute;
        content: "";
        background: #333;
        border: solid 10px #333;
        right: -30px;
        top: 50%;
        transform: translateY(-50%) rotate(136deg);
        z-index: -1;
    }
    .sc-description{
        background-color: #333;
        padding: 10px;
        height: 100%;
    }
    .sc-flex-det{
        display: flex;
        justify-content: space-between;
        gap: 20px;
        height: 100%;
    }
    .sc-logo-cont{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .sc-logo{
        display: flex;
        flex-direction: column;
    }
    .sc-logo img{
        overflow: hidden;
        max-width: fit-content;
        max-height: 80px;
        border-radius: 50%;
    }
    .sc-logo:has(> img:nth-child(2)) img:nth-child(2){
        margin-top: -50px;
        margin-left: 20px;
    }
    .hidden{
        display: none;
    }
</style>