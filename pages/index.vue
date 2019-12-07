<template>
    <div class="container webkit-box flex-center">
        <div>
            <logo />
            <h1>nuxt-demo</h1>

            <el-button @click="handleToUser">个人中心</el-button>
            <el-button @click="handleToList">列表页</el-button>

            <div class="store-box">
                <el-button @click="handleAdd">+ 操作store</el-button>
                <div class="list">
					<div class="item" v-for="(item, index) in list" :key="index">{{item}}</div>
				</div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "~/components/logo.vue";
import { mapState } from "vuex";

export default {
    data() {
        return {};
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
                    source: Math.random()
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    min-height: 100vh;
	text-align: center;
	h1{
		font-size: 30px;
		margin: 20px;
	}

	.store-box{
		width: 400px;
		margin: 20px auto;
		padding: 10px;
		border: 1px solid #d2d2d2;
		text-align: left;
		
		.list{
			margin-top: 10px;
			height: 15vh;
			overflow-y: auto;
			.item{
				line-height: 30px;
				padding-left: 10px;
			}
		}
		
	}
}
</style>
