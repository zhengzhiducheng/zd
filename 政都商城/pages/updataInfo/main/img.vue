<template>
	<view>
		<image style="width: 120upx;height: 120upx;" 
			src="/static/images/demo/cate_02.png" @click="chooseImg"></image>
		<view>
			<image v-for="item in imgList" :src="item" :key="index"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				imgList: []
			}
		},
		methods: {
			chooseImg () {
				uni.chooseImage({
					count: 2,
					success: res=>{
						this.imgList = res.tempFilePaths
					}
				})
			}
		}
	}
</script>
