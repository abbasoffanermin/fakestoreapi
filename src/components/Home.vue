<script setup>
import CardVue from '../components/Card.vue'
</script>
<template>
    <div>
        <h1 class="text-center">Products</h1>
      <div class="container">
         <div class="row">
          
                 <div v-for="item of products" :key="item.id" class="col-3 my-4 mx-4">
                <CardVue :posts="item"/>
            
            </div>
           
         </div>
      </div>
    </div>
</template>


<script>
export default {
    
    data(){
    return{
    products:[]
    }
  },
  created(){
    this.axios.get("https://fakestoreapi.com/products").then(({data})=>{
       this.products=data
    
    })
  }
}
</script>