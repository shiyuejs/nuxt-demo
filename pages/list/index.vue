<template>
    <div class="container">
        <div>
            <el-button @click="handleToDetail(1)">详情页面1</el-button>
            <el-button @click="handleToDetail(2)">详情页面2</el-button>
        </div>
    </div>
</template>

<script>
export default {
	components: {},

	// https://zh.nuxtjs.org/api/pages-fetch
	// fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 
	// 与 asyncData 方法类似，不同的是它不会设置组件的数据。
	async fetch ({ store, params }) {
		console.log('fetch')
	},
    methods: {
        handleToDetail(id) {
            this.$router.push({
                name: "detail-id",
                params: {
                    id: id
                }
            });
        }
    }
};
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
