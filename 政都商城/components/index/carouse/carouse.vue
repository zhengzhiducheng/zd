<template>
	<view class="">
		<swiper :indicator-dots="false" autoplay interval="3000" :duration="1000" circular>
			<block v-for="(item,index) in carouselList" :key="index">
				<swiper-item>
					<view class="swiper-item">
						<image style="height: 350upx;"
						:src="item.url" lazy-load></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:['carouselList']
	}
</script>

<style>
</style>
