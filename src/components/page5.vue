<template>
  <div class="skill">
    <section class="head">
      <h2 v-pre class="text-center">v<span>-</span>on<span>:click</span></h2>
      <div class="row">
        <div class="col-6">
          <div :style="styleObjectBox">
            <h5>HTML</h5>
            <highlight-code lang="HTML">{{ ex1html }}</highlight-code>
          </div>
        </div>
        <div class="col-6">
          <div :style="styleObjectBox">
            <h5>JS</h5>
            <highlight-code lang="JavaScript">{{ ex1js }}</highlight-code>
          </div>
        </div>
      </div>
      <div class="mt-4" :style="styleObjectBox">
        <h5>output</h5>
        <div :style="styleObjectOutput"> 
          <h1 class="card-text text-center my-2" style="color:#42b883">{{number}}</h1>
          <div class="text-center">
          <button type="submit" class="btn mr-2 px-4" @click="number+=10" style="font-size:20px">+</button>
            <button type="submit" class="btn px-4" @click="number-=10" style="font-size:20px">-</button>
            </div>
        </div>
      </div>
    </section>
    
    <section id="head">
      <h2 v-pre class="text-center">@<span>click</span></h2>
      <div class="row">
        <div class="col-6">
          <div :style="styleObjectBox">
            <h5>HTML</h5>
            <highlight-code lang="HTML">{{ ex2html }}</highlight-code>
          </div>
        </div>
        <div class="col-6">
          <div :style="styleObjectBox">
            <h5>JS</h5>
            <highlight-code  lang="JavaScript">{{ ex2js }}</highlight-code>
          </div>
        </div>
      </div>
      <div class="mt-4" :style="styleObjectBox">
        <h5>output</h5>
        <div :style="styleObjectOutput">
          <h5 class="card-title text-center py-3">Show Text</h5>
            <div class="text-center">
            <button type="submit" class="btn" @click="showTitle">
              <i :class="icon"></i>
              </button>
            </div>
        </div>
      </div>
      <transition name="alert-in" enter-active-class="animated bounceInDown" leave-active-class="animated hinge">
      <div class="mt-2" :style="styleObjectBox" v-show="show">
          <div :style="styleObjectOutput">
            <p class="card-title px-3"  v-text="lorem"></p>
          </div>
      </div>
      </transition>
    </section>

    <section id="head">
      <h2 v-pre class="text-center">@<span>click</span></h2>
      <div class="row">
        <div class="col-6">
          <div :style="styleObjectBox">
            <h5>HTML</h5>
            <highlight-code lang="HTML">{{ ex3html }}</highlight-code>
          </div>
        </div>
        <div class="col-6">
          <div :style="styleObjectBox">
            <h5>JS</h5>
            <highlight-code lang="JavaScript">{{ ex3js }}</highlight-code>
          </div>
        </div>
      </div>
      <div class="mt-4" :style="styleObjectBox">
        <h5>output</h5>
        <div :style="styleObjectOutput"> 
            <h3 class="card-title text-center py-2">Click to change style</h3>
          <div class="text-center m-3">
            <button type="submit" 
            class="btn text-white mx-2" 
            v-for="botton in bottons" 
            :key="botton.index" 
            :style="'background:'+botton.stBg"
            @click="Bt(botton)"
            >{{botton.nameBt}}</button>
            </div>
        </div>
      </div>
    </section>



  </div>


</template>

<script>
import codePreview from "@/components/codePreview.vue";
export default {
  name: "page5",
  data() {
    return {
      // codePreview
      ex1html: codePreview.page4[1].html,
      ex1js: codePreview.page4[1].js,
      ex2html: codePreview.page4[2].html,
      ex2js: codePreview.page4[2].js,
      ex3html: codePreview.page4[3].html,
      ex3js: codePreview.page4[3].js,
      // script
      number: 0,
      lorem:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      show: false,
      icon: "fas fa-angle-down",
      styleObjectBox: {
        display: "block",
        "overflow-x": "auto",
        background: "#e7e9db",
        "border-radius": "10px",
        color: "#35495e",
        padding: "15px 15px 00px 15px",
        "box-shadow": "3px 6px 15px rgb(78, 94, 112)"
      },
      styleObjectOutput: {
        display: "block",
        "overflow-x": "auto",
        background: "whitesmoke",
        "border-radius": "10px",
        color: "#4f424c",
        padding: "0.5em",
        "margin-bottom": "15px"
      },

      bottons:[
        {nameBt:"TURBO",stBg:"#95afc0",Bgbox:"#535c68"},
        {nameBt:"QUINCE JELLY",stBg:"#ffbe76",Bgbox:"#f0932b"},
        {nameBt:"CARMINE PINK",stBg:"#ff7979",Bgbox:"#eb4d4b"},
        {nameBt:"BLUE",stBg:"#7ed6df",Bgbox:"#22a6b3"},
        {nameBt:"BLURPLE",stBg:"#686de0",Bgbox:"#4834d4"},
      ]
    };
  },
  computed: {
  },
  methods: {
    showTitle() {
      if (this.show) {
        this.show = false;
        this.icon = "fas fa-angle-down";
      } else {
        this.show = true;
        this.icon = "fas fa-angle-up";
      }
    },
    Bt(botton) {
      if (this.styleObjectOutput.background !== botton.stBg) {
        this.styleObjectBox.background = botton.Bgbox;
        this.styleObjectBox.color = "whitesmoke";
        this.styleObjectOutput.background = botton.stBg;
        this.styleObjectOutput.color = "#whitesmoke";
      }
    }
  }
};
</script>


<style scoped>
.skill .head {
  padding-left: 8em;
  padding-right: 8em;
  padding-top: 9em;
  padding-bottom: 5em;
  align-items: center;
}

.skill #head {
  padding-left: 8em;
  padding-right: 8em;
  padding-bottom: 5em;
  align-items: center;
}

section h2 {
  color: #35495e;
  padding-bottom: 2em;
}

section h2 span {
  color: #42b883;
}
.bgD {
  background: #35495e;
}
.box {
  display: block;
  overflow-x: auto;
  background: #e7e9db;
  border-radius: 10px;
  color: #35495e;
  padding: 15px 15px 00px 15px;
  box-shadow: 3px 6px 15px rgb(78, 94, 112);
}

.output {
  display: block;
  overflow-x: auto;
  background: whitesmoke;
  border-radius: 10px;
  color: #4f424c;
  padding: 0.5em;
  margin-bottom: 15px;
}

.output h5 span {
  color: #42b883;
}


</style>