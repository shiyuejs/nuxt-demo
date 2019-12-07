<template>
    <div class="error-box">
        <h1 v-if="error.statusCode === 404">页面不存在!</h1>
        <h1 v-else>应用发生错误异常</h1>
        <nuxt-link to="/" class="go-home">返回首页</nuxt-link>
    </div>
</template>

<script>
export default {
    props: ["error"],
    layout: "customError",
    created() {
        //console.log(this);
    }
};
</script>

<style lang='scss' scoped>
.error-box{
	text-align: center;
	.go-home{
		font-size: 18px;
		margin-top: 20px;
		display: block;
	}
}
</style>