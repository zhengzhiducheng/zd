export default{
	// 全局配置
	common:{
		baseUrl:"http://localhost:7000",
		data:{},
		method:"GET",
		dataType:'json'
	},
	// 请求返回
	request(options={}){
		options.url = this.common.baseUrl + options.url
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		return new Promise((res,rej)=>{
			// token
			const token = uni.getStorageSync('token');
			if (token) {
				options.header={Authorization:'Bearer ' + token}
			}
			uni.request({
				...options,
				success:result=>{
					if(result.statusCode !==200){
						uni.showToast({
							title:"请求失败",
							icon:"none"
						})
						return rej()
					}
					return res(result.data)
				},
				fail:err=>{
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
					return rej()
				}
			})
		})
	}
}