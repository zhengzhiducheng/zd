<template>
	<view class="">
		<!-- 头部 -->
		<view class="d-flex a-center w-100" style="height: 275upx;">
			<image src="../../../static/images/demo/cate_03.png" 
			mode="widthFix" style="width: 200upx;height: 200upx;" 
			class="border rounded"></image>
			<view class="ml-2">
				<view class="d-flex main-text-color line-h font-weight font-lg mb-1">
					<view class="font a-self-start line-h font-weight-100">￥</view>
					3369
				</view>
				<view class="d-flex">
					<block v-for="(item,index) in selects" :key="index">
						<text class="mr-1">
						{{item.list[item.selected].name}}</text>
					</block>
				</view>
			</view>
	</view>
		<!-- 内容 -->
		<Card headTitle="颜色">
			<block v-for="(item,index) in colorList" :key="index">
				<ColorTag :color="false" :name="item.name"></ColorTag>
			</block>
		</Card>
		<!-- 底部按钮 -->
		<view class="d-flex j-center a-center main-bg-color text-white font-md position-fixed bottom-0 left-0 right-0" style="height: 100upx;z-index: 210;"
		hover-class="main-bg-hover-color">确定</view>
	</view>
</template>

<script>
	import ColorTag from './color-tag.vue'
	import Card from "./card.vue"
	export default{
		components:{
			 Card,
			 ColorTag
		},
		data(){
			return{
				colorList:[
					{name:"红"},
					{name:"黑"},
					{name:"白"}
				],
				selects:[
					{
						title:"颜色",
						selected:0,
						list: [
							{ name:'火焰红', },
							{ name:'炭黑', },
							{ name:'冰川兰', }
						]
					},
					{
						title:"容量",
						selected:0,
						list: [
							{ name:'64GB', },
							{ name:'128GB', },
						]
					},
					{
						title:"套餐",
						selected:0,
						list: [
							{ name:'标配', },
							{ name:'套餐一', },
							{ name:'套餐二', }
						]
					},
				],
			}
		}
	}
</script>

<style>
</style>
