<template>
  <div class="container">
    <div>
      <logo />
      <h1>nuxt-demo</h1>
      <br />
      <br />
      <br />

      <el-button @click="handleToUser">个人中心</el-button>
      <el-button @click="handleToList">列表页</el-button>
      <br />
      <br />
      <br />

      <div>
        <el-button @click="handleAdd">store-todos-add - {{counter}}</el-button>
        <div v-for="(item, index) in list" :key="index">{{item}}</div>
      </div>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {

    }
  },
  components: {
    Logo
  },
  computed: Object.assign(
    {},
    mapState({
      list: state => state.todos.list,
      counter: state => state.counter
    })
  ),
  methods: {
    handleAdd() {
      this.$store.commit("todos/add", Math.random());
    },
    handleToUser() {
      this.$router.push({
        name: "user",
        query: {
          source: "home"
        }
      });
    },
    handleToList() {
      this.$router.push({
        name: "list",
        query: {
          source: "home"
        }
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
