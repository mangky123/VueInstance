<template>
  <div id="app">
    <nav>
        <router-link to="/">HOME</router-link>
        <router-link to="/page1">Page1</router-link>
        <router-link to="/page2">Page2</router-link>
        <router-link to="/page3">Page3</router-link>
        <router-link to="/page4">Page4</router-link>
        <router-link to="/page5">Page5</router-link>
      </nav>
    <router-view/> 
  </div>
</template>



<style >
  @import "https://fonts.googleapis.com/css?family=Kanit:300&amp;subset=thai";
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
  @import "https://use.fontawesome.com/releases/v5.3.1/css/all.css";
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

body {
    background-image: url(assets/bg.jpeg);
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Kanit', sans-serif;
}

body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 100%;
}

nav {
  padding: 50px 20px 20px 35%;
  position: absolute;

}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #35495E;
  border-radius: 3px;
  color: #42B883;
  font-weight: bold;
  margin-right: 15px;
}


nav a.router-link-exact-active {
  padding: 10px;
  text-decoration: none;
  background: #42B883;
  border-radius: 3px;
  color: whitesmoke;
  font-weight: bold;
  margin-right: 15px;
}
</style>
