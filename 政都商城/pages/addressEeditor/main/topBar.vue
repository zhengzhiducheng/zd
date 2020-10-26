<template>
	<view class="top-bar">
		<view class="top-bar-left">
			<image src="/static/static_public_img/back.png" class="back-img" @click="back"></image>
		</view>
		<view class="top-bar-center">地址编辑</view>
		<view class="top-bar-right">
			<view class="more-img" @click="save">
				完成
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['isShow','changeIsShow'],
		methods:{
			changeButton(){
				this.changeIsShow()
			},
			save(){
				console.log('保存')
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/common/style/socket.scss";
	.top-bar{
		background-color: #FFFFFF;
		height: 80upx;
		padding-top: 30upx;
		border-bottom: 2upx solid #CCCCCC;
		.top-bar-center{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32upx;
		}
	}
</style>
