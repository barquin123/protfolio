<script setup>

import { ref, computed, defineEmits, onMounted, onUnmounted} from "vue";

const windowWidth = ref(window.innerWidth);
const compName = ref(null);
const emit = defineEmits(['updateActiveState']);

function compActive(name){
    compName.value = compName.value === name ? null : name;
}

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const screenWidth = ref(window.innerWidth);

const isAnyActive = computed(() => {
        const activeState = !!compName.value;
        emit('updateActiveState', activeState);
        return activeState;
  
});

</script>

<template>
    <!-- <div v-if="windowWidth >= 1039"> -->
        <div :class="['experiences', { active: isAnyActive }]">
            <h1 v-if="compName === 'insystic'">Insystic Corp. <br> (Site Engineer)</h1>
            <h1 v-else-if="compName === 'proweaver'">ProWeaver Inc.<br> (Front-End Web Developer)</h1>
            <h1 v-else-if="compName === 'FDCI'">Forty Degrees Celcius Inc.<br>(IT Professional)</h1>
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
                    <p>Insystic Corp. serves as a subcontractor for Huawei in the telecommunications industry. As a Site Engineer/Implementer, my primary responsibilities include upgrading telecommunications equipment and performing quality checks to ensure all installations meet industry standards.</p>
                    <p class="skills">Skills Acquired</p>
                    <ul>
                        <li>Site Survey</li>
                        <li>Logistics</li>
                        <li>Electrical Wirings</li>
                        <li>Quality Check And Assurance</li>
                        <li>Integrated Service Delivery Platform (ISDP)<br> Qualification and certification</li>
                        <li>Safety and emergency protocols</li>
                    </ul>
                    <div id="endExp"></div>
                </div>
                </Transition>
                <Transition name="fade" mode="out-in">
                <div v-if="compName == 'proweaver'" class="proweaver">
                    <p>ProWeaver is a web development and solutions company dedicated to helping small businesses scale and grow. As a Front-End Web Developer, my primary responsibilities include enhancing website functionality and transforming designs into responsive, user-friendly web pages. </p>
                    <p class="skills">Skills Acquired</p>
                    <ul>
                        <li>WordPress Custom Themes</li>
                        <li>Web Development</li>
                        <li>HTML,CSS and JS</li>
                        <li>PHP, Wordpress</li>
                        <li>Xara design</li>
                        <li>Responsive Principles</li>
                        <li>SEO</li>
                        <li>GOOGLE manager</li>
                        <li>Elementor</li>
                        <li>DIVI</li>
                    </ul>
                    <div id="endExp"></div>
                </div>
                </Transition>
                <Transition name="fade" mode="in-out">
                <div v-if="compName == 'FDCI'" class="FDCI">
                    <p>As a Front-End Web Developer at FORTY DEGREES CELSIUS, INC., I convert design prototypes into responsive web pages, fix bugs, and investigate design inconsistencies. I collaborate with teams to ensure smooth user experiences and contribute to tasks like web translation, system analysis, and programming for foreign clients.</p>
                    <p class="skills">Skills Acquired</p>
                    <ul>
                        <li>PHP</li>
                        <li>GIT/GITHUB</li>
                        <li>HTML, CSS, JS</li>
                        <li>VUE</li>
                        <li>Angular</li>
                        <li>MVC</li>
                        <li>React</li>
                        <li>ExpressJS</li>
                        <li>Firebase</li>
                    </ul>
                    <div id="endExp"></div>
                </div>
            </Transition>
            </div>
        </div>
    <!-- </div> -->
    <!-- <div v-else>
        <div class="complogoMobile">
            <ul class="compLogosMobile">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div> -->
    
</template>

<style scoped>
.CompImages li.hidden{
    opacity: 0;
    pointer-events: none;
}
.experiences h1{
    text-align: center;
}
.skills{
    text-align: center;
    font-weight: 700;
    padding: 20px 0;
}
ul{
    margin: 0;
    padding: 0;
}
.endExp{display: none;}
li{
    list-style: none;
    
}
.workDetails li{
    list-style-type: disc;
    width: fit-content;
}
.workDetails ul{
    column-count: 2;
    max-width: fit-content;
    margin: auto;
    border: 1px solid #fff;
    padding: 20px 50px;
    column-gap: 50px;
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
    margin-top: 0;
    position: relative;
    text-align: center;
    transition: opacity 0.5s ease;
    opacity: 1;
    cursor: pointer;
}
.CompImages li.active{
    margin-top: 0px;
    position: relative;
    text-align: center;
}
.CompImages li span{
    display: block;
    position: relative;
    top: 30px;
}
.CompImages li:nth-child(2) span{
    top: -118px;
}
.CompImages li::before{
    content: '';
    position: absolute;
    top: 46%;
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
    margin-top: 89px;
}
.CompImages{
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
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

@media only screen and (max-width:1032px){
    .CompImages li{
        width: 30%;
        margin-top: 0px
    }
    .CompImages li:nth-child(2){
        margin-top: 87px
    }
    .CompImages li:nth-child(2) span{
        top: -133px;
    }
    .CompImages li.active{
        margin-top: 0px;
    }
    .CompImages li:nth-child(2).active{
        margin-top: 87px;
    }
    .endExp{display: block;}
    .workDetails ul{
        column-count: 1;
    }
}
</style>