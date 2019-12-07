import Vue from "vue";
import http from "./http";

const install = function (VueClass, opts = {}) {

	// http method
	VueClass.http = http;
	VueClass.prototype.$http = http;
};
Vue.use(install);
