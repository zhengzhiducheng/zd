<template>
	<!-- 列表 -->
	<view class="">
		<view class="row p-2 border-bottom border-light-secondary" v-for="(item,index) in searchList" :key="index">
			<view class="span-6">
				<image :src="item.url" 
					mode="widthFix" class="w-100"></image>
			</view>
			<view class="span-14 pl-3 d-flex flex-column">
				<view class="fon-md font-weight">
					{{item.name}}
				</view>
				<view class="font text-light-muted mb-auto">
					{{item.describe}}
				</view>
				<view class="">100</view>
				<view class="font-sm text-light-muted">
					{{item.comment}} 评论 98%满意
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:['searchList']
	}
</script>

<style>
</style>
