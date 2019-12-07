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
    return axios.get(`http://47.95.193.254/demo/v1/demo?id=${params.id}`)
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
    axios.get(`http://47.95.193.254/report_api/v1/report?id=${this.id}`).then((res) => {
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

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
