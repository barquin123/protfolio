<script setup>

import { ref, computed, defineEmits } from "vue";

const compName = ref(null);
const emit = defineEmits(['updateActiveState']);

function compActive(name){
    compName.value = compName.value === name ? null : name;
}

const isAnyActive = computed(() => {
    const activeState = !!compName.value;
    emit('updateActiveState', activeState);
    return activeState;
});

</script>

<template>
    <div :class="['experiences', { active: isAnyActive }]">
        <h1 v-if="compName === 'insystic'">Insystic Corp.</h1>
        <h1 v-else-if="compName === 'proweaver'">ProWeaver Inc.</h1>
        <h1 v-else-if="compName === 'FDCI'">Forty Degrees Celcius Inc.</h1>
        <h1 v-else>Work Experiences</h1>
        <div class="TimeLine">
            <ul class="CompImages">
                <li :class = "{active: compName === 'insystic', hidden: compName && compName !== 'insystic'}" @click="compActive('insystic')"><img src="/src/assets/INSYSTIC.webp" alt="Insystec">
                    <span>(Jul 2021 - jan 2022)</span>
                </li>
                <li :class = "{active: compName == 'proweaver', hidden: compName && compName !== 'proweaver'}" @click="compActive('proweaver')"><img src="/src/assets/proweaver_logo.webp" alt="ProWeaver">
                    <span>(april 2022 - jan 2024)</span>
                </li>
                <li :class = "{active: compName == 'FDCI', hidden: compName && compName !== 'FDCI'}" @click="compActive('FDCI')"><img src="/src/assets/forty_degrees_celsius_inc_logo.webp" alt="Forty Degrees">
                    <span>(april 2024 - Present)</span>
                </li>
            </ul>
        </div>
            <div class="workDetails" key="compName">
            <Transition name="fade">
            <div v-if="compName == 'insystic'" class="insystic">
                <h2>Insystic</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?</p>
            </div>
            </Transition>
            <Transition name="fade" mode="out-in">
            <div v-if="compName == 'proweaver'" class="proweaver">
                <h2>ProWeaver</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?</p>
            </div>
            </Transition>
            <Transition name="fade" mode="in-out">
            <div v-if="compName == 'FDCI'" class="FDCI">
                <h2>Forty Degrees</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?</p>
            </div>
        </Transition>
        </div>
    </div>
</template>

<style scoped>
.CompImages li.hidden{
    opacity: 0;
    pointer-events: none;
}
.experiences h1{
    text-align: center;
}
ul{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    
}
.CompImages img{
    border-radius: 50%;
    max-width: 50px;
    max-height: 50px;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.CompImages li{
    margin-top: 30px;
    position: relative;
    text-align: center;
    transition: opacity 0.5s ease;
    opacity: 1;
    cursor: pointer;
}
.CompImages li.active{
    margin-top: 14px;
    position: relative;
    text-align: center;
}
.CompImages li span{
    display: block;
    position: relative;
    top: 30px;
}
.CompImages li:nth-child(2) span{
    top: -110px;
}
.CompImages li::before{
    content: '';
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 10px;
    background: #333;
    border-radius: 25px;
    transition: all 0.5s ease;
}
.CompImages li:nth-child(2):before{
    top:-12%;
}
.CompImages li:nth-child(2){
    margin-top: 110px;
}
.CompImages{
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    align-content: center;
    margin-top: 40px;
    position: relative;
}
.TimeLine{
    height: 150px;
    position: relative;
}
.TimeLine::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 2px;
    background: #333;
    border-radius: 25px;
    transition: all 0.5s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  filter: blur(10px);
}

.fade-enter-to {
  opacity: 1;
  filter: blur(0px);
}

.fade-leave-from {
  opacity: 1;
  filter: blur(10px);
}

.fade-leave-to {
  opacity: 0;
  filter: blur(0px);
}

</style>