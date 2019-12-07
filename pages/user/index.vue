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
