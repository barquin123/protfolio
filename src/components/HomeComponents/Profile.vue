<script>
</script>

<template>
    <div class="profile">
        <div class="profileImage">
            <img src="/src/assets/profile.webp" alt="profile image" width="150px" height="150px">
            <div class="bios">
                <h2>Jay Frank Barquin</h2>
                <p>Front-End Web Developer</p>
            </div>
        </div>
    <div class="profileDescripton">
        <p>I'm a frontend web developer with a passion for coding, problem-solving, and building intuitive projects that simplify life—whether for myself or others. Aspiring to become a full-stack/software developer, I thrive on creating efficient and user-friendly digital solutions.</p>
        <a class="cv-btn" href="javascript:void(0)">Download CV</a>
    </div>
    </div>
</template>


<style scoped>
    .profileImage{
        display: flex;
        align-items: center;
        gap: 20px;
        flex-direction: column;
    }
    .profileImage img{
        min-width:150px;
        min-height: 150px;
    }
    .cv-btn {
        padding: 10px 20px;
        border-radius: 25px;
        display: block;
        margin: auto;
        margin-top: auto;
        max-width: fit-content;
        text-decoration: none;
        color: #fff;
        border: 1px solid #fff;
        transition: all 0.5s ease;
    }

    .cv-btn:hover {
        background: #fff;
        color: #555;
    }

</style>