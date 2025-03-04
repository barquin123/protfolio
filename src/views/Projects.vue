<script setup>
import ProjectItems from '../components/ProjectsComponents/projectsItems.vue'
const items = [
  {title: "Blog", projectImage: "/src/assets/project1.webp", techImages: ["src/assets/react-2.svg", "src/assets/firebase-1.svg"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: 'https://reactblog-cream.netlify.app/', status: 'Live'},
  {title: "Manga Reader", projectImage: "/src/assets/project2.webp", techImages: ["src/assets/react-2.svg", "src/assets/icons8-express-js-240.svg"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: 'https://mangareader-cream.netlify.app/', status: 'Live'},
  {title: "HTML Template Creator", projectImage: "/src/assets/project3.webp", techImages: ["src/assets/electronjs-icon.svg"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: 'https://shimmering-medovik-3ae807.netlify.app/', status: 'Live'},
  {title: "Task Management System", projectImage: "/src/assets/optimizing.webp", techImages: ["src/assets/mongodb-icon-2.svg", "src/assets/icons8-express-js-240.svg","src/assets/react-2.svg","src/assets/nodejs-icon.svg"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: '#', status: 'Coming Soon'}
  ];
</script>

<template>
  <div class="Projects">
    <h1>Project List</h1>
    <div class="projectListsView">
        <ProjectItems v-for ="(item, index) in items" 
        :title = "item.title" 
        :projectImage = "item.projectImage" 
        :techImages = "item.techImages" 
        :description="item.description" 
        :key="index"
        :projectLink="item.projectLink"
        :status="item.status"
        />
    </div>
  </div>
</template>

<style scoped>
.Projects h1{
  text-align: center;
}
.projectListsView {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: auto;
}
.projectListsView > div{
  max-width: 40%;
}
</style>
