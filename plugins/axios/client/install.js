import Vue from "vue";
import axios from "../index";

const install = function (VueClass, opts = {}) {

	// http method
	// VueClass.http = axios;
	VueClass.prototype.$api = axios;
};
Vue.use(install);
