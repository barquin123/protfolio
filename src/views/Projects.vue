<script setup>
import ProjectItems from '../components/ProjectsComponents/projectsItems.vue'
import project1 from '@/assets/project1.webp';
import project2 from '@/assets/project2.webp';
import project3 from '@/assets/project3.webp';
import project4 from '@/assets/optimizing.webp';
import react from '@/assets/react-2.svg';
import firebase from '@/assets/firebase-1.svg';
import express from '@/assets/icons8-express-js-240.svg';
import electron from '@/assets/electronjs-icon.svg';
import mongodb from '@/assets/mongodb-icon-2.svg';
import nodejs from '@/assets/nodejs-icon.svg';


const items = [
  {title: "Blog", projectImage:project1, techImages: [react, firebase], description: "This project is a blog platform built with React and Firebase, featuring Google Authentication for secure login and Firestore for real-time data storage. Users can create, edit, and delete blog posts, with all changes synced instantly. It showcases a full-stack solution for dynamic content management with secure authentication and real-time updates.", projectLink: 'https://reactblog-cream.netlify.app/', status: 'Live'},
  {title: "Manga Reader", projectImage: project2, techImages: [react, express], description: "This project is a manga reader application that integrates with the Mangadex API, utilizing React for the frontend and ExpressJS for the backend. The server-side functionality is hosted on Render.com, a free web hosting service. The application showcases efficient API handling, allowing users to browse and read manga seamlessly. By combining React's interactive UI with ExpressJS for server-side processing, this project highlights the integration of third-party APIs and demonstrates dynamic data fetching and display in a modern web application.", projectLink: 'https://mangareader-cream.netlify.app/', status: 'Live'},
  {title: "HTML Template Creator", projectImage: project3, techImages: [electron], description: "This project is a productivity tool I developed to streamline the creation of templated HTML files with varying data. By leveraging CSV data from Google Sheets, the tool generates multiple HTML files with the same structure but different content. This project was designed to automate repetitive tasks and improve efficiency, allowing users to easily customize and generate bulk HTML files based on dynamic data, ultimately saving time and reducing manual effort.", projectLink: 'https://shimmering-medovik-3ae807.netlify.app/', status: 'Live'},
  {title: "Task Management System", projectImage: project4, techImages: [mongodb, nodejs,react,express], description: "This is a task management system designed to track and display the status of tasks within a team. It includes a login feature to ensure that only leaders have the authority to assign or modify tasks for team members. Members, on the other hand, can view and update only the tasks that have been specifically assigned to them. This system streamlines task delegation, enhances accountability, and provides clear visibility into the progress of individual tasks, ensuring an efficient workflow within the team.", projectLink: '#', status: 'Coming Soon'}
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

@media only screen and (max-width:1032px){
  .projectListsView{
    display: block;
  }
  .projectListsView > div{
    max-width: 100%;
  }
}
</style>
