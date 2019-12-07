<template>
  <div class="container">
    <div>
      <h1>个人中心</h1>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '个人中心'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'keywords-user', name: 'keywords', content: '个人中心关键字',},
        { hid: 'description-user', name: 'description', content: '个人中心的说明' }
      ]
    }
  },
  components: {

  },
  methods: {
    handleToUser() {
      debugger
    },
    handleToList() {

    }
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
