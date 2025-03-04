<script>
</script>

<template>
    <div class="socMed">
        <div class="socials">
            <h2>Socials</h2>
            <div class="socialsList">
                <div class="social">
                    <a href="mailto:jay.barquin2000@gmail.com"><img src="/src/assets/Gmail-logo.webp" alt="gmail"></a>
                </div>
                <div class="social">
                    <a href="https://www.facebook.com/jay.barquin.12" target="_blank"><img src="/src/assets/Facebook_logo.webp" alt="fb"></a>
                </div>
                <div class="social">
                    <a href="https://www.linkedin.com/in/jay-frank-barquin-618192182/" target="_blank"><img src="/src/assets/linkedin.webp" alt="linkedin"></a>
                </div>
            </div>
        </div>
        <div class="devStack">
            <h2>Tech Stack</h2>
            <div class="techStackList">
                <div class="vue">
                    <img src="/src/assets/vue-9.svg" alt="VueJs">
                </div>
                <div class="react">
                    <img src="/src/assets/react-2.svg" alt="ReactJS">
                </div>
                <div class="tailwind">
                    <img src="/src/assets/tailwindcss-icon.svg" alt="Tailwind CSS">
                </div>
                <div class="php">
                    <img src="/src/assets/php-icon.svg" alt="PHP">
                </div>
                <div class="WordPress">
                    <img src="/src/assets/wordpress-icon.svg" alt="WordPress">
                </div>
                <div class="electron">
                    <img src="/src/assets/electronjs-icon.svg" alt="ElectronJS">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.techStackList, .socialsList{
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
.devStack, .socials{
    text-align: center;
    
    h2{
        font-weight: 700;
    }
}

.socialsList img, .devStack img{
    max-width: 80px;
    max-height: 80px;
    width: 100%;
    height: 100%;
}

</style>