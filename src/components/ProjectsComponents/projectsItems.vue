<script setup>
defineProps({
    title: String,
    projectImage: String,
    techImages: Array,
    description: String,
    projectLink: String,
    status: String
})
</script>

<template>
        <div class="projects glow-on-hover">
            <a :href="status === 'Coming Soon' ? '#' : projectLink" :target="status === 'Coming Soon' ? '' : '_blank'" :class="{ disabled: status === 'Coming Soon' }" draggable="false">
            <h1>{{ title }}</h1>
            <figure>
                <img class="projectImage" :src="projectImage" alt="ProjectImage" loading="lazy" width="450" height="450">
                <figcaption v-if = "status == 'Coming Soon'">{{ status }}</figcaption>
            </figure>
            <div class="techStack">
                <div class="techImages">
                    <img v-for = "(image, index) in techImages" :key="index" :src="image" alt="tech image">
                </div>
            </div>
            <p>{{ description }}</p>
        </a>    
        </div>
</template>

<style scoped>
    figure{
        position: relative;
    }
    .projectImage{
        max-width: 450px;
        height: 450px;
        object-fit: cover;
    }
    figcaption{
        position: absolute;
        top: 10%;
        left: 50%;
        z-index: 999;
        transform: translate(-50%);
        rotate: -34deg;
        border: 3px dashed red;
        color: red;
        padding: 30px;
        font-weight: 700;
        font-size: 40px;
    }
    .disabled{
        pointer-events: none;
    }
    .techImages{
        text-align: center;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    .projects{
        backdrop-filter: blur(5px);
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid #333;
    }
    .glow-on-hover {
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #48ff00, #00ff55, #09ff00, #48ff00, #00ff15, #73ff00, #00ff73, #00ff15, #48ff00);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
.techImages img{
    max-width: 50px;
    max-height: 50px;
    width:100%;
    height:100%;
}

@media only screen and (max-width:1032px){
    .projectImage{
        max-width: 100%;
    }

.glow-on-hover:before {
    display: none !important;
}

.glow-on-hover:hover:before {
    display: none !important;
}

.glow-on-hover:after {
    display: none !important;
}
}
</style>