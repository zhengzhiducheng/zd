<template>
	<view class="">
		<view class="row j-center py-2">
			<block v-for="(item,index) in menuList" :key="index">
				<view class="span-4 d-flex flex-column j-center a-center">
					<image :src="item.url"
					style="width: 100upx;height: 100upx;" mode="widthFix"></image>
					<text class="font-sm">{{item.name}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:['menuList']
	}
</script>

<style>
</style>
