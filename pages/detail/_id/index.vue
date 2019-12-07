<template>
  <div class="container">
    <div>
      详情的id: {{id}}
      <div>store, list - {{list.length}}</div>

      <div>
        服务端渲染数据: {{type}} <br />
        ajax请求数据：{{time}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios'

export default {
  data() {
    return {
      title: '详情页',
      id: this.$route.params.id,
      time: ''
    }
  },
  asyncData ({ params, error }) {
    // report_api/v1/report
    return axios.get(`http://127.0.0.1:7304/demo/v1/demo?id=${params.id}`)
      .then((res) => {
        return { 
          type: res.data.data.type
        }
      })
      .catch((e) => {
        // error({ statusCode: 404, message: 'Post not found' })
      })
  },

  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'keywords-detail', name: 'keywords', content: `详情页关键字，${this.id}`,},
        { hid: 'description-detail', name: 'description', content: `详情页的description${this.id}` }
      ]
    }
  },
  created() {
      console.log(`router-detail-created-${this.id}`)
  },

  mounted() {
    axios.get(`http://127.0.0.1:7304/report_api/v1/report?id=${this.id}`).then((res) => {
        this.time = res.data.time
      }).catch((e) => {
        console.log(e)
        // error({ statusCode: 404, message: 'Post not found' })
      })
  },

  computed: Object.assign(
    {},
    mapState({
      list: state => state.todos.list,
      
    })
  ),
  components: {

  },
  methods: {

  }
}
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
