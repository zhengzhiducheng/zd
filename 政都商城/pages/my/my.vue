<template>
	<view class="_my">
		<view class="top">
			<!-- 头部 -->
			<Header></Header>
			<!-- 订单 -->
			<view class="animated fadeIn faster">
				<Card title="我的订单" showheadRight showheadRightIcon 
				headRightText="全部订单" headBorderBottom>
					<view class="row">
						<block v-for="(item,index) in nav" :key="index">
							<view class="span-5 d-flex flex-column j-center a-center py-3"
							hover-class="bg-light-secondary"
							@tap="navigate(item.url)">
								<view class="icon iconfont line-h" :class="item.icon"
								style="font-size: 40upx;"></view>
								<view>{{item.name}}</view>
							</view>
						</block>
						
					</view>
				</Card>
			</view>
			<CrossLine height="2upx" background="#cccccc"></CrossLine>
			<ListItem showExtraIcon otherIconStyle="color:#9ED45A;"
			otherIcon="icon-gengduo" title="通讯录"></ListItem>
			<CrossLine height="2upx" background="#cccccc"></CrossLine>
			<!-- 菜单 -->
			<ListItem showExtraIcon otherIconStyle="color:#FDBF2E;"
			otherIcon="icon-VIP" title="小米会员" ></ListItem>
			<ListItem showExtraIcon otherIconStyle="color:#FCBE2D;"
			otherIcon="icon-huangguan" title="会员中心"></ListItem>
			<ListItem showExtraIcon otherIconStyle="color:#FA6C5E;"
			otherIcon="icon-service" title="服务中心"></ListItem>
			<ListItem showExtraIcon otherIconStyle="color:#FE8B42;"
			otherIcon="icon-home" title="小米之家"></ListItem>
			<CrossLine height="2upx" background="#cccccc"></CrossLine>
			<ListItem showExtraIcon otherIconStyle="color:#FDBF2E;"
			otherIcon="icon-share" title="意见反馈"></ListItem>
		</view>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import ListItem from './main/listItem.vue'
	import Card from "./main/card.vue"
	import Header from "./main/head.vue"
	import Tabbar from "@/components/tabbar/tabbar.vue"
	export default{
		components:{
			Tabbar,
			Header,
			ListItem,
			Card
		},
		data(){
			return{
				nav:[
					{ name:"待付款",icon:"icon-wallet_icon",url:"order" },
					{ name:"待收货",icon:"icon-daishouhuo",url:"order" },
					{ name:"待评价",icon:"icon-pinglun1",url:"order" },
					{ name:"退换修",icon:"icon-buoumaotubiao46",url:"" }
				]
			}
		},
		methods:{
			navigate(url){
				console.log(url)
			}
		}
	}
</script>

<style lang="scss" scoped>
	._my{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
		.top{
			flex: 1;
			overflow-y: scroll;
			&::-webkit-scrollbar {
			  display: none; /* Chrome Safari */
			}
		}
	}
	
</style>
