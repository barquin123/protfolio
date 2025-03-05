<script>
</script>

<template>
    <div class="contactForm">
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <div class="clearfix"></div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <div class="clearfix"></div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <div class="clearfix"></div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>
.contactForm {
    backdrop-filter: blur(5px);
    max-width: 550px;
    margin: auto;
    border: 1px solid #333;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
}
.contactForm label{
    display: block;
    text-align: left;
}
.contactForm input , .contactForm textarea{
    display: block;
    margin: auto;
    background:none;
    border: 1px solid #555;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    outline: none;
    color: #fff;
}
.contactForm textarea{
    resize: vertical;
    min-height: 200px;
}
button {
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}
button:hover{
    background: #555;
}
</style>