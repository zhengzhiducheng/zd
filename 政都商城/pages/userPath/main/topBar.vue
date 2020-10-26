<template>
	<view class="top-bar">
		<view class="top-bar-left" @click="back">
			<image src="/static/static_public_img/back.png" class="back-img"></image>
		</view>
		<view class="top-bar-center">发货地址</view>
		<view class="top-bar-right">
			<view class="more-img" @click="changeButton">
				{{isShow?"完成":"编辑"}}
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
			back(){
				uni.navigateBack({
					delta:1
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
