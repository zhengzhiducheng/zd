<template>
	<view class="home">
		<view class="main">
			<!-- 搜索 -->
			<Search input="input" leftWords="ZD" :inputClick="go"></Search>
			
			<!-- 轮播图 -->
			<Carouse :carouselList="carouselList"></Carouse>
			<!-- 分类 -->
			<Menu :menuList="menuList"></Menu>
			<!-- 滑屏 -->
			<Sliding></Sliding>
			<view class="con">
				<!-- 列表 -->
				<List :listData="listData"></List>
				<!-- 列表 -->
				<List :listData="listData"></List>
				<!-- 加载更多 -->
				<view 
					class="d-flex a-center j-center text-light-muted font-md py-3" >
					上拉加载更多
				</view>
			</view>
		</view>
		<!-- 分割线 -->
		<CrossLine height="120upx"></CrossLine>
		<Tabbar class="tabbar"></Tabbar>
	</view>
</template>

<script>
	import Tabbar from "@/components/tabbar/tabbar.vue"
	import Search from "@/components/search/search.vue"
	import Carouse from "@/components/index/carouse/carouse.vue"
	import Menu from "@/components/index/menu/menuBanner.vue"
	import List from "@/components/index/list/list.vue"
	import Sliding from "@/components/index/sliding/sliding.vue"
	export default {
		methods:{
			go(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			}
		},
		data() {
			return {
				listData:{
					title:"今日推荐",
					list:[
						{
							url:
							  "https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/110153/22/4183/131699/5e195c3eEc2381b84/796fe08c135b30f9.jpg!q70.dpg.webp",
							name: "白菜",
							currentPrice: "123",
							unit: "斤",
							oldPrice: "321",
							shop: "zd",
							paymentNum: 1
						},
						{
							  url:
								"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/110153/22/4183/131699/5e195c3eEc2381b84/796fe08c135b30f9.jpg!q70.dpg.webp",
							  name: "白菜",
							  currentPrice: "123",
							  unit: "斤",
							  oldPrice: "321",
							  shop: "zd",
							  paymentNum: 1
							},
						{
							url:
							  "https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/110153/22/4183/131699/5e195c3eEc2381b84/796fe08c135b30f9.jpg!q70.dpg.webp",
							name: "白菜",
							currentPrice: "123",
							oldPrice: "321",
							shop: "zd",
							unit: "斤",
							paymentNum: 1
						}
					]
				},
				menuList:[
				[
					{
						url:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png",
						name:111
					},
					{
						url:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png",
						name:111
					}
				],
				[
					{
						url:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png",
						name:111
					},
					{
						url:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png",
						name:111
					}
				]
			],
				carouselList:[
					{
						url:"../../static/images/demo/demo4.jpg"
					},
					{
						url:"../../static/images/demo/demo4.jpg"
					},
					{
						url:"../../static/images/demo/demo4.jpg"
					}
				]
			}
		},
		components:{
			Tabbar,
			Search,
			Carouse,
			Menu,
			List,
			Sliding
		}
	}
</script>

<style lang='scss' scoped>
	.home{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		position: relative;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
		.main{
			width: 100%;
			flex: 1;
			overflow-x: hidden;
			overflow-y: scroll;
			&::-webkit-scrollbar {
			  display: none; /* Chrome Safari */
			}
		}
		.tabbar{
			position: fixed;
			width: 100%;
			left: 0;
			bottom: 0;
		}
		
	}
</style>
