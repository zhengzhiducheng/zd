<template>
	<view class="top-bar">
		<view class="top-bar-left" @click="back">
			{{leftWord}}
		</view>
		<view class="top-bar-center">
			{{centerWord}}
		</view>
		<view class="top-bar-right">
			<view class="add">
				<image :src="rightIconUrl" v-if="rightIconUrl"></image>
				{{rightWord?rightWord:''}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['leftWord','centerWord', 'rightIconUrl','rightWord'],
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-bar{
		position: fixed;
		z-index: 1001;
		top: 0;
		left: 0;
		width: 100%;
		height:100rpx;
		padding-top: var(--status-bar-height);
		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		padding: 0 20upx;
		font-size: 30upx;
		padding-top: 30upx;
		.top-bar-left{
			display: flex;
			align-items: center;
			padding-left: $uni-spacing-col-base;
			.my-img{
				margin-right: 76rpx;
			}
			image{
				margin-top: 10rpx;
				width:68rpx;
				height:68rpx;
				border-radius:16rpx;
			}
			.back-img{
				margin-top: 21rpx;
				width: 26rpx;
				height: 46rpx;
			}
			.text{
				font-size:$uni-font-size-lg;
				font-weight:500;
				color:$uni-text-color;
				line-height:88rpx;
			}
		}
		.top-bar-center{
			font-size: 30upx;
			display: flex;
			align-items: center;
		}
		.top-bar-right{
			display: flex;
			align-items: center;
			.search{
				width: 88rpx;
				height: 88rpx;
				display: inline-block;
			}
			.add{
				width: 88rpx;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				display: inline-block;
			}
			.text{
				font-size:$uni-font-size-lg;
				font-weight:500;
				color:$uni-text-color;
				line-height:88rpx;
				//background: #aaa;
				padding-right: $uni-spacing-col-base;
			}
			image{
				padding: 18rpx 0 0 18rpx;
				width: 52rpx;
				height: 52rpx;
			}
			.more-img{
				height: 88rpx;
				padding-top: 10rpx;
				padding-right: $uni-spacing-col-base;
				image{
					width: 52rpx;
					height: 12rpx;
				}
			}
		}
	}
</style>
