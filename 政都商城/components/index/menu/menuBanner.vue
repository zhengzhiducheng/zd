<template>
	<view class="index_menu">
		<view class="swiper">
			<view class="swiper-box">
					<swiper :autoplay="false" @change="handleDotChange">
						<swiper-item
							class="item"
							v-for="(arr, index) in menuList"
							:key="index"
						>
							<view class="page" v-for="(item,i) in arr" :key="i">
								<image :src="item.url" mode="widthFix"></image>
								<view class="title">
									{{item.name}}
								</view>
							</view>
						</swiper-item>
					</swiper>
			</view>
			<view class="dot">
				<view 
					:class="['dot_item',{active:menuDot == index}]" v-for="(item,index) in menuList.length">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:['menuList'],
	data(){
		return{
			menuDot:0
		}
	},
	methods:{
		handleDotChange({detail}){
			this.menuDot = detail.current
		}
	}
}
</script>

<style lang="scss" scoped>
	.active{
		background: #FFB400!important;
	}
	.index_menu{
		position: relative;
		height: 200rpx;
		overflow: hidden;
		.item{
			height: 150rpx !important;
			display: flex;
			align-items: center;
			.page{
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 20%;
				image{
					width: 100rpx;
					height: 100rpx;
				}
				.title{
					font-size: 20upx;
				}
			}
		}
		.dot{
			position: absolute;
			width: 100%;
			bottom: 0;
			display: flex;
			height: 50rpx;
			align-items: center;
			justify-content: center;
			.dot_item{
				width: 20rpx;
				height: 20rpx;
				border-radius: 20upx;
				background: #BB4739;
				margin: 0 10rpx;
			}
		}
		
	}
</style>
