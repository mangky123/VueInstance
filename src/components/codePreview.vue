<script>
export default {
  page1: {
    1: {
      html: `<div id="app">
    <p>{{message}}</p>
</div> `,
      js: `var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
})`
    },
    2: {
      html: `<div id="app">
    <input type="text" placeholder="input Value" v-model="inputA">
    <p>the value of the input is: {{ input }}</p>
</div>`,
      js: `var app = new Vue({
  el: '#app',
  data: {
    input: '',
  }
})`
    },
    3: {
      html: `<div id="app">
    <section id="head">
        <h2 v-pre class="text-center">Example</h2>
        <div class="box">
            <h5>output</h5>
            <div class="output">
                <div class="row">
                    <div class="col">
                        <h4 class="text-center py-3">Input your detail</h4>
                        <div class="input-group mb-3 ">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">ชื่อผู้รับ</span>
                            </div>
                            <input type="text" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="name">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">ที่อยู่</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="addess">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">จังหวัด</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="province">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">รหัสไปรษณีย์</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="Zipcode">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">เบอร์โทร</span>
                            </div>
                            <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="phone">
                        </div>
                    </div>
                        <div class="col">
                        <div class="card text-white bg-dark">
                            <div class="card-body">
                                <h5 class="card-title text-center">Order Preview</h5>
                                <h6 class="card-subtitle mb-2 ">ชื่อผู้รับ : {{name}}</h6>
                                <h6 class="card-subtitle mb-2  pt-3">ที่อยู่ผู้รับ</h6>
                                <p class="card-text">{{addess+" "+province+" "+Zipcode+" "}}</p>
                                 <h6 class="card-subtitle mb-3 ">หมายเลขโทรศัพท์ : {{phone}}</h6>
                                 <h6 class="card-subtitle mb-2 ">รายการสินค้า</h6>
                                 <ul>
                                    <li v-for="item in items" :key="item.index">{{item.item+" ราคา "+item.price+"
                                        บาท "}}</li>
                                </ul>
                                <p class="card-text">ยอดรวมทั้งหมด {{ sum }} บาท</p>
                                <div class="text-right">
                                     <button type="button" class="btn text-white" style="background:#42b883">Print</button>
                                 </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
     </section>
</div>`,
      js: `var app = new Vue({
    el: '#app',
    data: {
        name: "Noppadon Jannok",
        addess: "",
        province: "songkla",
        Zipcode: "90000",
        phone: "0835354829",
        totel: 0,
        items: [
            { item: "CPU", price: 12000 },
            { item: "RAM", price: 4700 },
            { item: "GPU", price: 15000 },
            { item: "OS", price: 4000 }
            ],
    },
    computed: {
        /* eslint-disable */
        sum() {
        for (const i in this.items) {
            this.totel += this.items[i].price;
        }
        return this.totel;
        }
    },
})`
    }
  },

  page2: {
    1: {
      html: `<div id="app">
    <ul>
        <li v-for="task in tasks" 
        :key="task.index" 
        v-text="task.description"
        ></li>
    </ul>
</div>`,
      js: `var app = new Vue({
  el: "#app",
  data: {
    tasks: [
      { description: "Go to the store", completed: true },
      { description: "Finish screencast", completed: false },
      { description: "Make donation", completed: false },
      { description: "clear inbox", completed: false },
      { description: "Make dinner", completed: false },
      { description: "Clean room", completed: true }
    ]
  }
});`
    },
    2: {
      html: `<div id="app">
    <h5>output</h5>
    <div class="output">
        <div class="btn-group float-right" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" @click="showAll">All Task</button>
            <button type="button" class="btn btn-secondary" @click="showCom">Incompleted Task</button>
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
</div>`,
      js: `var app = new Vue({
  el: "#app",
  data: {
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
    incom: false
  },
  methods: {
    showAll() {
      if (this.all) {
      } else {
        this.all = true;
        this.com = false;
        this.incom = false;
        this.taskname = "All Task";
      }
    },
    showCom() {
      if (this.com) {
      } else {
        this.all = false;
        this.com = true;
        this.incom = false;
        this.taskname = "Completed Task";
      }
    },
    showIncom() {
      if (this.incom) {
      } else {
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
    }
  }
});`
    }
  },
  page3: {
    1: {
      html: `<div id="app">
    <h1 v-if="condition > 0.5">Hello <span>Vue</span></h1>
    <p>condition : {{condition}}</p>
    <button type="submit" @click="con">Toggle</button>
</div>`,
      js: `var app = new Vue({
  el: "#app",
  data: {
    condition: ""
  },
  methods: {
    con() {
      this.condition = Math.random();
    }
  }
});`
    },
    2: {
      html: `<div id="app">
    <div>
        <h3>{{show}}</h3>
        <button type="submit" @click="showCode">Click</button>
    </div>
    <div v-if="showcode">
        <h5>HTML</h5>
        <highlight-code>Code html</highlight-code>
    </div>
    <div v-if="showcode">
        <h5>JS</h5>
        <highlight-code>Code html</highlight-code>
    </div>
</div>`,
      js: `var app = new Vue({
  el: "#app",
  data: {
    show: "Show",
    showcode: false
  },
  methods: {
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
});`
    },
    3:{
        html:`<div id="app">
    <label for="inputGroupSelect01">CSS Framework</label>
    <select id="inputGroupSelect01" v-model="type">
        <option value="bootstrap">Bootstrap</option>
        <option value="bulma">Bulma css</option>
        <option value="vuetify">Vuetify</option>
    </select>
    <div v-if="type === 'bootstrap'">
        <img src="../assets/bootstrap.png" alt="" width="200px">
        <p class="card-text">Build responsive, mobile-first projects on the web with the
            world's most popular front-end component library.</p>
    </div>
    <div v-else-if="type === 'bulma'">
        <img src="../assets/bulma.png" alt="" width="160px">
        <p class="card-text text-center">Bulma is a simple, elegant, and modern CSS framework
            that a lot of
            developers prefer over Bootstrap. Personally, I think Bulma has a better design by
            default, and it also feels more light-weight.</p>
    </div>
    <div v-else-if="type === 'vuetify'">
        <img src="../assets/vuetify.png" alt="" width="150px">

        <p class="card-text text-center">Vuetify is a component framework for Vue.js 2. It aims
            to provide clean, semantic and reusable components that make building your
            application a breeze. Vuetify utilizes Google's Material Design design pattern,
            taking cues from other popular frameworks such as Materialize.css, Material Design
            Lite, Semantic UI and Bootstrap 4.</p>
    </div>
    <div v-else>
        <p class="card-text">Select CSS Framework</p>
    </div>
</div>`,
        js:`var app = new Vue({
  el: "#app",
  data: {
    type: "",
  }
});`,
    }
  },
  page4:{
      1:{
          html:`<div id="app">
    <h1>{{number}}</h1>
    <button type="submit" v-on:click="number+=10">+</button>
    <button type="submit" v-on:click="number-=10">-</button>
</div>`,
js:`var app = new Vue({
  el: "#app",
  data: {
    number: 0
  }
});`,
      },
      2:{
          html:`<div id="app">
    <h5>Show Text</h5>
    <button type="submit" @click="showTitle">click</button>
    <p v-if="show">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>`,
js:`var app = new Vue({
  el: "#app",
  data: {
    show: false
  },
  methods: {
    showTitle() {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
});`,
      },
      3:{
          html:`<div id="app">
    <div :style="styleObjectBox">
        <h5>output</h5>
        <div :style="styleObjectOutput">
            <h3>Click to change style</h3>
            <button type="submit" @click="changeTURBO">TURBO</button>
            <button type="submit" @click="changeJELLY">QUINCE JELLY</button>
            <button type="submit" @click="changePINK">CARMINE PINK</button>
            <button type="submit" @click="changeBLUE">BLUE</button>
            <button type="submit" @click="changeBLURPLE">BLURPLE</button>
        </div>
    </div>
</div>`,
js:`var app = new Vue({
  el: "#app",
  data: {
    styleObjectBox: {
      display: "block",
      background: "#e7e9db",
      "border-radius": "10px",
      color: "#35495e",
      padding: "15px 15px 00px 15px",
      "box-shadow": "3px 6px 15px rgb(78, 94, 112)"
    },
    styleObjectOutput: {
      display: "block",
      background: "whitesmoke",
      "border-radius": "10px",
      color: "#4f424c",
      padding: "0.5em",
      "margin-bottom": "15px"
    }
  },
  methods: {
    changeTURBO() {
      this.styleObjectBox.background = "#535c68";
      this.styleObjectBox.color = "whitesmoke";
      this.styleObjectOutput.background = "#95afc0";
      this.styleObjectOutput.color = "#whitesmoke";
    },
    changeJELLY() {
      this.styleObjectBox.background = "#f0932b";
      this.styleObjectBox.color = "whitesmoke";
      this.styleObjectOutput.background = "#ffbe76";
      this.styleObjectOutput.color = "#whitesmoke";
    },
    changePINK() {
      this.styleObjectBox.background = "#eb4d4b";
      this.styleObjectBox.color = "whitesmoke";
      this.styleObjectOutput.background = "#ff7979";
      this.styleObjectOutput.color = "#whitesmoke";
    },
    changeBLUE() {
      this.styleObjectBox.background = "#22a6b3";
      this.styleObjectBox.color = "whitesmoke";
      this.styleObjectOutput.background = "#7ed6df";
      this.styleObjectOutput.color = "#whitesmoke";
    },
    changeBLURPLE() {
      this.styleObjectBox.background = "#4834d4";
      this.styleObjectBox.color = "whitesmoke";
      this.styleObjectOutput.background = "#686de0";
      this.styleObjectOutput.color = "whitesmoke";
    }
  }
});`,
      }
  }
};
</script>