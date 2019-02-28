<template>
    <div class="skill">
        <section class="head">
            <h2 v-pre class="text-center">v<span>-</span>if</h2>
            <div class="row">
                <div class="col-6">
                    <div class="box">
                        <h5>HTML</h5>
                        <highlight-code lang="HTML">{{ ex1html }}</highlight-code>
                    </div>
                </div>
                <div class="col-6">
                    <div class="box">
                        <h5>JS</h5>
                        <highlight-code lang="JavaScript">{{ ex1js }}</highlight-code>
                    </div>
                </div>
            </div>
            <div class="box mt-4">
                <h5>output</h5>
                <div class="output">
                    <div class="row">
                        <div class="col">
                            <transition name="alert-in" enter-active-class="animated tada" leave-active-class="animated bounceOutLeft">
                                <h1 class="text-center pt-3" v-if="condition > 0.5">Hello <span>Vue</span></h1>
                            </transition>
                        </div>
                        <div class="col text-center my-2">
                            <p class="card-text">condition : {{condition}}</p>
                            <button type="submit" class="btn" @click="con">Toggle</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="head">
            <h2 v-pre class="text-center">v<span>-</span>if</h2>
            <div class="box">
                <h5>output</h5>
                <div class="output text-center">
                    <h3 class="m-3">{{show}}</h3>
                    <button type="submit" class="btn mb-2" @click="showCode">Click</button>
                </div>
            </div>
            <div class="row mt-4">
                <transition name="alert-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
                    <div class="col-6" v-if="showcode">
                        <div class="box">
                            <h5>HTML</h5>
                            <highlight-code lang="HTML" style="max-height: 312px;">{{ ex2html }}</highlight-code>
                        </div>
                    </div>
                </transition>
                <transition name="alert-in" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
                    <div class="col-6" v-if="showcode">
                        <div class="box">
                            <h5>JS</h5>
                            <highlight-code lang="JavaScript" style="max-height: 312px;">{{ ex2js }}</highlight-code>
                        </div>
                    </div>
                </transition>
            </div>
        </section>

        <section id="head">
            <h2 v-pre class="text-center">v<span>-</span>else<span>-</span>if & v<span>-</span>else</h2>
            <div class="row">
                <div class="col-9">
                    <div class="box">
                        <h5>HTML</h5>
                        <highlight-code lang="HTML">{{ ex3html }}</highlight-code>
                    </div>
                </div>
                <div class="col-3">
                    <div class="box">
                        <h5>JS</h5>
                        <highlight-code lang="JavaScript">{{ ex3js }}</highlight-code>
                    </div>
                </div>
            </div>
            <div class="box mt-4">
                <h5>output</h5>
                <div class="output" style="max-height: 250px;min-height: 250px;">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">CSS Framework</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" v-model="type">
                            <option value="bootstrap">Bootstrap</option>
                            <option value="bulma">Bulma css</option>
                            <option value="vuetify">Vuetify</option>

                        </select>
                    </div>
                    <div v-if="type === 'bootstrap'">
                        <div class="row">
                            <div class="col-3">
                                <img src="../assets/bootstrap.png" alt="" width="200px">
                            </div>
                            <div class="col-9">
                                <p class="card-text">Build responsive, mobile-first projects on the web with the
                                    world's most popular front-end component library.</p>
                                <p class="card-text">Bootstrap is an open source toolkit for developing with HTML, CSS,
                                    and JS. Quickly prototype your ideas or build your entire app with our Sass
                                    variables and mixins, responsive grid system, extensive prebuilt components, and
                                    powerful plugins built on jQuery.</p>
                            </div>
                        </div>

                    </div>
                    <div v-else-if="type === 'bulma'">
                        <div class="row">
                            <div class="col-3">
                                <img src="../assets/bulma.png" alt="" width="160px">
                            </div>
                            <div class="col-9">
                                <p class="card-text text-center">Bulma is a simple, elegant, and modern CSS framework
                                    that a lot of
                                    developers prefer over Bootstrap. Personally, I think Bulma has a better design by
                                    default, and it also feels more light-weight.</p>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="type === 'vuetify'">
                        <div class="row">
                            <div class="col-2">
                                <img src="../assets/vuetify.png" alt="" width="150px">
                            </div>
                            <div class="col-9">
                                <p class="card-text text-center">Vuetify is a component framework for Vue.js 2. It aims
                                    to provide clean, semantic and reusable components that make building your
                                    application a breeze. Vuetify utilizes Google's Material Design design pattern,
                                    taking cues from other popular frameworks such as Materialize.css, Material Design
                                    Lite, Semantic UI and Bootstrap 4.</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="card-text">Select CSS Framework</p>
                    </div>
                </div>
            </div>
        </section>

    </div>


</template>

<script>
import codePreview from "@/components/codePreview.vue";
export default {
  name: "page1",
  data() {
    return {
      // codePreview
      ex1html: codePreview.page3[1].html,
      ex1js: codePreview.page3[1].js,
      ex2html: codePreview.page3[2].html,
      ex2js: codePreview.page3[2].js,
      ex3html: codePreview.page3[3].html,
      ex3js: codePreview.page3[3].js,
      // script
      condition: "",
      show: "Show",
      type: "",
      showcode: false
    };
  },
  computed: {},
  methods: {
    con() {
      this.condition = Math.random();
    },
    showCode() {
      if (this.showcode) {
        this.showcode = false;
        this.show = "Show";
      } else {
        this.showcode = true;
        this.show = "Hide";
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

.output h5 span,
.output h1 span {
  color: #42b883;
}
</style>