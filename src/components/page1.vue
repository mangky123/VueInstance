<template>
  <div class="skill">
    <section class="head">
      <h2 v-pre class="text-center"><span>{{</span>message<span>}}</span></h2>
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
          <h5 class="card-text text-center">{{ message1 }}</h5>
        </div>
      </div>
    </section>

    <section id="head">
      <h2 v-pre class="text-center">v<span>-</span>model</h2>
      <div class="row">
        <div class="col-6">
          <div class="box">
            <h5>HTML</h5>
            <highlight-code lang="HTML">{{ ex2html }}</highlight-code>
          </div>
        </div>
        <div class="col-6">
          <div class="box">
            <h5>JS</h5>
            <highlight-code lang="JavaScript">{{ ex2js }}</highlight-code>
          </div>
        </div>
      </div>
      <div class="box mt-4">
        <h5>output</h5>
        <div class="output">
          <input type="text" class="form-control mb-3 mt-2" placeholder="input Value" v-model="inputA">
          <h5 class="card-text text-center">the value of the input is: <span> {{ inputA }} </span></h5>
        </div>
      </div>
    </section>

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
                  <span class="input-group-text text-white bgD" id="inputGroup-sizing-default">ชื่อผู้รับ</span>
                </div>
                <input type="text" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"
                  v-model="name">
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bgD" id="inputGroup-sizing-default">ที่อยู่</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                  v-model="addess">
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bgD" id="inputGroup-sizing-default">จังหวัด</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                  v-model="province">
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bgD" id="inputGroup-sizing-default">รหัสไปรษณีย์</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                  v-model="Zipcode">
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bgD" id="inputGroup-sizing-default">เบอร์โทร</span>
                </div>
                <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                  v-model="phone">
              </div>


            </div>
            <div class="col">
              <div class="card text-white bgD">
                <div class="card-body">
                  <h5 class="card-title text-center">Order Preview</h5>
                  <h6 class="card-subtitle mb-2 ">ชื่อผู้รับ : {{name}}</h6>
                  <h6 class="card-subtitle mb-2  pt-3">ที่อยู่ผู้รับ</h6>
                  <p class="card-text">{{addess+" "+province+" "+Zipcode+" "}}</p>
                  <h6 class="card-subtitle mb-3 ">หมายเลขโทรศัพท์ : {{phone}}</h6>
                  <h6 class="card-subtitle mb-2 ">รายการสินค้า</h6>
                  <ul>
                    <li v-for="item in items" :key="item.index">{{item.item+" ราคา "+item.price+" บาท "}}</li>
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

      <div class="showcode pt-4">
        <button type="button" class="btn" @click="show">View Source Code</button>
        <transition name="alert-in" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutDown">
          <div class="row mt-3" v-if="showcode">
            <div class="col-6">
              <div class="box">
                <h5>HTML</h5>
                <highlight-code lang="HTML">{{ ex3html }}</highlight-code>
              </div>
            </div>
            <div class="col-6">
              <div class="box">
                <h5>JS</h5>
                <highlight-code lang="JavaScript">{{ ex3js }}</highlight-code>
              </div>
            </div>
          </div>
        </transition>
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
      ex1html: codePreview.page1[1].html,
      ex1js: codePreview.page1[1].js,
      ex2html: codePreview.page1[2].html,
      ex2js: codePreview.page1[2].js,
      ex3html: codePreview.page1[3].html,
      ex3js: codePreview.page1[3].js,
      // script
      message1: "Hello Vue!",
      inputA: "",
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
      showcode: false
    };
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
  methods: {
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
.bgD{
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

highlight-code {
  max-height: 500px;
}
</style>