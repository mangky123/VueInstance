<template>
    <div class="home">
        
        <div class="body">
            <div class="row">
                <div class="col-4">
                    <div class="float-right">
                        <img  src="../assets/logo.png" alt="" >
                    </div>
                </div>
                <div class="col-8">
                    <div class="textin">
                        <h1>Vue.js</h1>
                        <h1>The Progressive</h1>
                        <h1>JavaScript Framework</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="get">
            <p v-cloak>Get started with <span> Vue.js </span> to make better</p>
        </div>
        

    </div>
</template>

<style scoped>
@import "https://use.fontawesome.com/releases/v5.3.1/css/all.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";



.textin{
    color: #35495E;
}
.body {
    position: absolute;
    top: 28%;
    left: 25%;
    z-index: 3;
}
.body img {
   padding-left:20ch; 
   z-index: 3;
   
}
.get{
    position: absolute;
    top: 60%;
    left: 35%;
    font-size: 25px;
    color: #35495E;
}
.get span{
    font-size: 35px;
    color: #42B883;
}

</style>
