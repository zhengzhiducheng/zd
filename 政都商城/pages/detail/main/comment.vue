<template>
	<view class="p-2 comment">
		<view class="item">
			<view class="d-flex a-center mb-2">
				<image src="../../../static/images/demo/cate_04.png" class="rounded"
					mode="widthFix" style="height: 70upx;width: 70upx;"></image>
				<view class="ml-2">
					<text class="font-md">名字</text>
					<text class="d-block font text-light-muted">时间</text>
				</view>
				<view class="text-light-muted font pl-1 ml-auto">
					123
				</view>
			</view>
			<view class="d-block font-md mb-2">
				评论内容
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.comment{
		.item{
			padding: 10upx;
			border-radius: 20upx;
			background: #EDEAEA;
		}
		
	}
</style>
