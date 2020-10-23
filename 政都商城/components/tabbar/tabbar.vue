<template>
	<view class="tabbar">
		<view class="item span-5"
		v-for="(item,index) in tabbarList" 
		:key="index" :class="{active:curRoute==item.path}"
		@click="go(item.path)">
			<view :class="item.icon"></view>
			<text class="font d-block">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		computed:{
			// 当前路由
			curRoute(){
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由
				return curRoute
			}
		},
		methods:{
			go(path){
				uni.navigateTo({
					url:'/'+path
				})
			}
		},
		data(){
			return{
				tabbarList:[
					{
						path:"pages/index/index",
						name:"首页",
						icon:"icon iconfont icon-shouye"
					},
					{
						path:"pages/classify/classify",
						name:"分类",
						icon:"icon iconfont icon-fenlei"
					},
					{
						path:"pages/message/message",
						name:"消息",
						icon:"icon iconfont icon-message"
					},
					{
						path:"pages/shopcar/shopcar",
						name:"购物车",
						icon:"icon iconfont icon-shopping"
					},
					{
						path:"pages/my/my",
						name:"我的",
						icon:"icon iconfont icon-my"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
@import url("./iconfont.css");
.active{
	color: red;
}
.tabbar{
	background: #FFFFFF;
	box-sizing: border-box;
	border-top: 2upx solid black;
	width: 100%;
	height: 120upx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	.item{
		overflow: hidden;
		width: 100%;
		height:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.icon{
			font-size: 40upx;
			height: 50upx;
		}
		.font{
			font-size: 30upx;
		}
	}
}
</style>