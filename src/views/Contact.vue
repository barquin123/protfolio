<script setup>
import Contactform from '../components/ContactComponents/contactForm.vue'
import socmed from '../components/ContactComponents/SocialMedia.vue'
import { ref } from 'vue'

</script>
<template>
    <div class="contact">
        <socmed />
        <Contactform />
    </div>
</template>

<style scoped>
.contact {
    align-content: center;
    height: 100%;
}
</style>