<template>
	<view class="">
		<swiper :indicator-dots="true" :autoplay="true" circular :style="{height:'750upx'}">
			<block v-for="(item,index) in carouselList" :key="index">
				<swiper-item>
					<image :src="item.url" lazy-load :style="{height:'750upx'}" @click="preview(index)"></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:['carouselList'],
		computed:{
			imagesArr(){
				return this.carouselList.map(v=>v.url)
			}
		},
		methods:{
			preview(i){
				let {imagesArr} = this
				uni.previewImage({
					current:i,
					urls:imagesArr,
					indicator:"default"
				})
			}
		}
	}
</script>

<style>
</style>
