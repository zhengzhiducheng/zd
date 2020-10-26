<template>
	<view class="">
		<TopBar></TopBar>
		<!-- 编辑邮寄地址 -->
			<view class="border-bottom bg-white p-2 d-flex a-center">
				<view class="text-secondary mr-1 flex-shrink font-md">收货人：</view>
				<input type="text" value="楚绵" class="px-1 flex-1 font-md"/>
			</view>
			<view class="bg-white p-2 d-flex a-center">
				<view class="text-secondary mr-1 flex-shrink font-md">手机号码：</view>
				<input type="number" value="15623545123" class="px-1 flex-1 font-md"/>
			</view>
			<view class="bg-white border-bottom p-2 d-flex a-center">
				<view class="text-secondary mr-1 flex-shrink font-md">所在地区：</view>
				<input type="text" value="二哥" class="px-1 flex-1 font-md"/>
			</view>
			
			<view class="bg-white p-2 d-flex a-center">
				<view class="text-secondary mr-1 flex-shrink font-md">详细地址：</view>
				<input type="text" value="二哥" class="px-1 flex-1 font-md"/>
			</view>
			<CrossLine height="2upx" background="#cccccc"></CrossLine>
			<view class="bg-white p-2 d-flex a-center">
				<view class="text-secondary mr-1 flex-shrink font-md">设为默认地址：</view>
				<switch class="ml-auto" :checked="false" color="#FF7200" />
			</view>
		</view>
	</view>
	
</template>

<script>
	import TopBar from "./main/topBar.vue"
	export default{
		components:{
			TopBar
		}
	}
</script>

<style>
</style>
