<script setup>
import Contactform from '../components/ContactComponents/contactForm.vue'
import socmed from '../components/ContactComponents/SocialMedia.vue'
import { ref } from 'vue'

</script>
<template>
    <div class="contact">
        <socmed />
        <h2>*This form is currently under development and not yet functional.</h2>
        <Contactform />
    </div>
</template>

<style scoped>
.contact {
    align-content: center;
    height: 100%;
}
h2 {
    font-weight: 700;
    color: #bc0e0e;
    background: #521c1c;
    width: fit-content;
    margin: 20px auto;
    padding: 10px 20px;
    border: 1px solid #bc0e0e;
}
</style>