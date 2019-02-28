<template>
    <div class="skill">
        <section class="head">
          <h2 v-pre class="text-center">v<span>-</span>for</h2>
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
                  <highlight-code lang="JavaScript" >{{ ex1js }}</highlight-code>
              </div> 
            </div>
          </div>
          <div class="box mt-4">
            <h5>output</h5>
            <div class="output">
                <div class="btn-group float-right" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" @click="showAll">All Task</button>
                    <button type="button" class="btn btn-secondary" @click="showCom">Completed Task</button>
                    <button type="button" class="btn btn-secondary" @click="showIncom">Incompleted Task</button>
                </div>
             <h5 class="card-title pl-4">{{taskname}}</h5>   
            <div class="row">
              <div class="col-4">
                <ul>
                  <li v-for="task in tasks" :key="task.index" v-show="all" v-text="task.description"></li>
                  <li v-for="task in tasks" :key="task.index" v-show="com" v-if="task.completed" v-text="task.description"></li>
                  <li v-for="task in tasks" :key="task.index" v-show="incom" v-if="!task.completed" v-text="task.description"></li>
                  
                </ul>
              </div>
              <div class="col-3" id="com">
                <ul>
                  <li v-for="task in tasks" :key="task.index" v-show="all" v-text="task.completed"></li>
                  <li v-for="task in tasks" :key="task.index" v-show="com" v-if="task.completed" v-text="task.completed"></li>
                  <li v-for="task in tasks" :key="task.index" v-show="incom" v-if="!task.completed" v-text="task.completed"></li>
                </ul>
              </div>
            </div>
            </div>

            <div class="output">
                <h5 class="card-title pl-4">Input New Task</h5>
                <input type="text" class="form-control" placeholder="Add task description" v-model="newTask">
                <div class="custom-control custom-checkbox mr-sm-2 m-2">
                  <input type="checkbox" class="custom-control-input" id="customControlAutosizing" v-model="newcompleted">
                  <label class="custom-control-label" for="customControlAutosizing">Completed is true</label>
                </div>
                <div class="text-right">
                
                  <button class="btn btn-outline-secondary" type="button" @click="addTask">Add</button>
                
              </div>

            </div>
        </div>  

        <div class="showcode pt-4">
            <button type="button" class="btn" @click="show">View All Source Code</button>
            <transition name="alert-in" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutDown">
          <div class="row mt-3" v-if="showcode">
            <div class="col-6">
              <div class="box">
                <h5>HTML</h5>
                  <highlight-code lang="HTML">{{ ex2html }}</highlight-code>
              </div> 
            </div>
            <div class="col-6">
              <div class="box">
                <h5>JS</h5>
                  <highlight-code lang="JavaScript" >{{ ex2js }}</highlight-code>
              </div> 
            </div>
          </div>
            </transition>
        </div>
      </section>

      

      <section id="head">
        <h2 v-pre class="text-center">Example</h2>
        <section id="form">
          <form @submit.prevent="appSkill">
            <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill">
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
            </transition>   
          </form>
          <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li v-for="(data, index) in skills" :key='index'>{{data.skill}}
                <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
              </li>
            </transition-group>
          </ul>
            
          <P class="text-center">This are the skills that you possess</P>
    </section>
       

      </section>

      

    </div>

    
</template>

<script>
import codePreview from "@/components/codePreview.vue";
export default {
  name: "page2",
  data() {
    return {
      // codePreview
      ex1html: codePreview.page2[1].html,
      ex1js: codePreview.page2[1].js,
      ex2html: codePreview.page2[2].html,
      ex2js: codePreview.page2[2].js,
      // script
      taskname: "All Task",
      tasks: [
        { description: "Go to the store", completed: true },
        { description: "Finish screencast", completed: false },
        { description: "Make donation", completed: false },
        { description: "clear inbox", completed: false },
        { description: "Make dinner", completed: false },
        { description: "Clean room", completed: true }
      ],
      newcompleted: true,
      newTask: "",
      all: true,
      com: false,
      incom: false,
      skill: "",
      skills: [{ skill: "Vue.js" }, { skill: "Frontend Developer" }],
      showcode: false
    };
  },
  computed: {},
  methods: {
    showAll() {
      if (this.all === false) {
        this.all = true;
        this.com = false;
        this.incom = false;
        this.taskname = "All Task";
      } 
    },
    showCom() {
      if (this.com === false) {
        this.all = false;
        this.com = true;
        this.incom = false;
        this.taskname = "Completed Task";
      } 
    },
    showIncom() {
      if (this.incom === false) {
        this.all = false;
        this.com = false;
        this.incom = true;
        this.taskname = "Incompleted Task";
      } 
    },
    addTask() {
      this.tasks.push({
        description: this.newTask,
        completed: this.newcompleted
      });
      this.newTask = "";
    },
    appSkill() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = "";
        } else {
          console.log("Not valid");
        }
      });
    },
    remove(id) {
      this.skills.splice(id, 1);
    },
    show() {
      if (this.showcode) {
        this.showcode = false;
      } else {
        this.showcode = true;
      }
    }
  }
};
</script>


<style  scoped>
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

#com ul {
  list-style-type: none;
}

#form ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#form ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

#form input {
  width: 100%;
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
i {
  float: right;
}


</style>

