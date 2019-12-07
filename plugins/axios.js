import axios from 'axios'
let options = {}
if (process.server) {
	options.baseURL = 'http://apk.neters.club'
}

let http = axios.create(options)

http.interceptors.request.use(function (config) {
	// if (!process.server) {
	// 	config.headers['Authorization'] = 'Bearer ' + window.localStorage.Token
	// }
	// 在发送请求之前做些什么
	return config
}, function (error) {

	// 对请求错误做些什么
	return Promise.reject(error)
})

// 添加响应拦截器
// http.interceptors.response.use(function (response) {
// 	// 对响应数据做点什么
// 	return response
// }, function (error) {
// 	// 对响应错误做点什么
// 	if (error.response.status != 200) {
// 		let data = {
// 			status: error.response.status,
// 			success: false
// 		}
// 		return { data }
// 	}
// 	return Promise.reject(error)
// })

http.interceptors.response.use((res) => {
	if (res.data.code === 0) {
		return res.data
	}
	return Promise.reject(res)
}, (error) => {
	return Promise.reject(error)
})

export default http
