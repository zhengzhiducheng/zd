<template>
	<view class="search">
		<!-- 搜索 -->
		<Search input="input" 
			leftWords="<" :leftClick="leftClick" rightWords="搜索"
			:rightClick="search"></Search>
		<!-- 热门搜索按钮 -->
		<card title="热门搜索">
		<view class="px-1 mb-2 pt-1">
			<block v-for="(item,index) in hot" :key="index">
				<color-tag :name="item.name"></color-tag>
			</block>
		</view>
		</card>
		<!-- 常用分类 -->
		<card title="常用分类" bodyPadding headStyle="padding-bottom:0;">
			<block v-for="(item,index) in cate" :key="index">
				<color-tag :color="false" :name="item.name"></color-tag>
			</block>
		</card>
		<CrossLine height="20upx"></CrossLine>
		<!-- 搜索记录 -->
		<card title="搜索记录" headBorderBottom>
			<uni-list-item title="小米" :showArrow="false" titleStyle="color:#333333;"></uni-list-item>
			<uni-list-item title="小米8 屏幕指纹板" :showArrow="false" titleStyle="color:#333333;"></uni-list-item>
		</card>
	</view>
	
</template>

<script>
	import Search from "@/components/search/search.vue"
	import card from "./main/card.vue";
	import colorTag from "./main/color-tag.vue";
	import uniListItem from "./main/uni-list-item.vue"
	export default{
		data(){
			return{
				hot:[
					{ name:'领券中心' },
					{ name:'Redmi K20' },
					{ name:'RedmiBook 14' },
					{ name:'智能积木 越野四驱车' },
					{ name:'手环 腕带' },
				],
				cate:[
					{ name:'耳机' },
					{ name:'手机' },
					{ name:'音箱' },
					{ name:'手表' },
					{ name:'配件' },
					{ name:'网关/传感器' },
					{ name:'健康' },
					{ name:'酷玩' },
				]
			}
		},
		components:{
			Search,
			card,
			colorTag,
			uniListItem
		},
		methods:{
			leftClick(){
				uni.navigateBack({
				    delta: 1
				});
			},
			search(){
				console.log('search')
				uni.navigateTo({
					url:"/pages/searchList/searchList"
				})
			}
		}
	}
</script>

<style>
</style>
