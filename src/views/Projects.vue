<script setup>
import ProjectItems from '../components/ProjectsComponents/projectsItems.vue'
const items = [
  {title: "Blog", projectImage: "https://placehold.co/450x450", techImages: ["https://placehold.co/50x50", "https://placehold.co/50x50"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: 'https://reactblog-cream.netlify.app/', status: 'Live'},
  {title: "Manga Reader", projectImage: "https://placehold.co/450x450", techImages: ["https://placehold.co/50x50", "https://placehold.co/50x50"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: 'https://mangareader-cream.netlify.app/', status: 'Live'},
  {title: "HTML Template Creator", projectImage: "https://placehold.co/450x450", techImages: ["https://placehold.co/50x50", "https://placehold.co/50x50"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: 'https://shimmering-medovik-3ae807.netlify.app/', status: 'Live'},
  {title: "Task Management System", projectImage: "https://placehold.co/450x450", techImages: ["https://placehold.co/50x50", "https://placehold.co/50x50"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam ea nostrum veritatis cumque aperiam, porro, numquam aut quisquam incidunt dolor nobis quae deleniti! Laborum vel praesentium quam provident magni?", projectLink: '#', status: 'Coming Soon'}
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
