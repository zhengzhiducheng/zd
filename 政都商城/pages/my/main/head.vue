<template>
	<view class="position-relative d-flex a-center animated fadeIn faster" style="height: 320upx;">
		<view class="icon iconfont uni-icon-scan position-absolute line-h text-white"
		style="z-index: 100;right: 20upx; top: 72upx;font-size: 50upx;"
		@tap="openMsgList"></view>
		<!-- 背景图 -->
		<image src="../../../static/images/bg.jpg" style="height: 320upx;"></image>
		<view class="d-flex a-center position-absolute left-0 right-0"
		style="z-index: 100;bottom: 50upx;">
			<!-- 头像 -->
			<image src="../../../static/images/demo/cate_02.png" 
			class="rounded-circle border-white ml-5"
			style="width: 145upx;height: 145upx;border: 5upx solid;"></image>
			<view class="" style="flex: 1;">
				<!-- 昵称 -->
				<view class="text-light font-md ml-2">测试昵称</view>
				<!-- 签名 -->
				<view class="font-md ml-2 text-light">
					测试昵司法部对进入金融统计图jet称
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			openMsgList() {
				console.log(1)
			}
		},
	}
</script>

<style scoped lang="scss">
</style>
