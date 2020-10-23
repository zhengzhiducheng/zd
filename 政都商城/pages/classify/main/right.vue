<template>
	<scroll-view
		scroll-with-animation
		scroll-y 
		class="right-aside" 
		@scroll="asideScroll" 
		:scroll-top="tabScrollTop">
		<view v-for="(item,index) in slist" 
			:key="index" 
			@click="navToList(item)"
			class="item"
			:id="'main-'+index">
			<image src="../../../static/b.png" mode=""></image>
			<text class="s-item">{{item.name}}1</text>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		props:['slist','tabScrollTop'],
		methods:{
			asideScroll(e){
				this.$emit("asideScroll",e)
			},
			navToList(item){
				this.$emit('navToList',item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
		.item{
			width: 33.3%;
			box-sizing: border-box;
			padding: 20rpx 0;
			float: left;
			display: flex;
			flex-direction: column;
			align-items: center;
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
</style>
