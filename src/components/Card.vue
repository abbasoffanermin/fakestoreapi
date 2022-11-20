
<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div>
        <div class="card" style="width: 18rem;">
  <img :src="posts.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{posts.title}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <RouterLink to="/details" class="btn btn-primary" @click="send">Details</RouterLink>
  </div>
</div>
    </div>
</template>

<script>
export default {
    data(){
  return{
    p1:{}
}
    },
    props: ["posts"],

    methods:{
      send(){
            this.axios.get("https://fakestoreapi.com/products/"+id).then(({data})=>{
       this.p1=data
    
    })
        }
    }
   
}
</script>