<template>
	<!-- tabbar -->
	<view class="bg-white position-fixed left-0 bottom-0 right-0 d-flex a-stretch" style="height: 100upx;">
		<view class="flex-1 d-flex flex-column a-center j-center line-h-md">
			<view class="iconfont icon-dianhua text-muted line-h-sm"></view>
			<text class="d-block">客服</text>
		</view>
		<view @click="back"
			class="flex-1 d-flex flex-column a-center j-center line-h-md">
			<view class="iconfont icon-fanhuidingbu text-muted line-h-sm"></view>
			<text class="d-block">返回</text>
		</view>
		
		<view class="flex-1 d-flex flex-column a-center j-center line-h-md">
			<view class="iconfont icon-gouwuche text-muted line-h-sm"></view>
			<text class="d-block">购物车</text>
		</view>
		<view style="flex: 2.5;"
			class="d-flex j-center a-center font-md main-bg-color text-white">
			加入购物车
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			back(){
				uni.navigateBack({
				    delta: 1
				});
			}
		},
	}
</script>

<style>
</style>
