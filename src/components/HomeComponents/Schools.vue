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
                        <img src="/src/assets/cit.webp" alt="elementary logo">
                    </div>
                </div>
                <div class="HS" :class="{active: activeSchool === 'hs'}" @click = "setActive('hs')">
                    <div class="sc-logo">
                        <img src="/src/assets/cctc.webp" alt="elementary logo">
                        <img src="/src/assets/wblc.webp" alt="elementary logo">
                    </div>
                </div>
                <div class="elementary" :class="{active: activeSchool === 'elementary'}" @click = "setActive('elementary')">
                    <div class="sc-logo">
                        <img src="/src/assets/cctc.webp" alt="elementary logo">
                    </div>
                </div>
            </div>
            <div class="descriptions">
                <div v-if="activeSchool === 'College'"  class="College sc-description ">
                    <h2>Cebu Institute of Technology-University <span>(CIT-U)</span></h2>
                    <p>I hold a Bachelor's degree in Electronics and Communication Engineering with a foundation in robotics and automation. As a front-end developer, I am passionate about programming and aspire to grow in software and full-stack development.</p>
                    <p class="skills">Skills Acquired</p>
                    <ul>
                        <li>python</li>
                        <li>arduino</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>ElctroPnuematics</li>
                        <li>PCB creation</li>
                    </ul>
                </div>
                <div v-if="activeSchool === 'hs'"  class="HS sc-description ">
                    <h2>Consolatrix College & West Bay Learning Center</h2>
                    <p>High School taught me the importance of collaboration and understanding different personalities. I learned to respect others' perspectives, value their decisions, and embrace the importance of patience in achieving meaningful progress.</p>
                </div>
                <div v-if="activeSchool === 'elementary'" class="elementary sc-description ">
                    <h2>Consolatrix College of Toledo City Cebu</h2>
                    <p>I developed proper manners and learned how to handle various situations with grace. I gained an understanding of showing respect to everyone, regardless of status, and cultivated strong morals and ethical conduct in my interactions with others.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .schools{
        align-content: center;
    }
    .skills{
        text-align: center;
    }
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
    .descriptions h2{
        font-weight: 700;
        text-align: center;
    }
    .descriptions h2 span{
        display: block;
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
        justify-content: space-evenly;
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
        max-width: 80px;
        max-height: 80px;
    }
    .sc-logo:has(> img:nth-child(2)) img:nth-child(2){
        margin-top: -50px;
        margin-left: 20px;
    }
    .hidden{
        display: none;
    }
    .descriptions ul{
        columns: 2;
    }

    @media only screen and (max-width:1032px){
        .sc-flex-det{
            flex-direction: column;
        }
        .sc-logo-cont{
            flex-direction: row;
        }
        .sc-logo-cont div.active::before{
            position: absolute;
            content: "";
            background: #333;
            border: solid 10px #333;
            bottom: -30px;
            transform: translateX(-50%) rotate(136deg);
            z-index: -1;
            top: unset;
            left: 50%;
            width: 0;
        }
    }
</style>