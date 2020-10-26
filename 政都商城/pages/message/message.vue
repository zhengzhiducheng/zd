<template>
	<view class="message">
		<CrossLine height="120upx"></CrossLine>
		<!-- 顶部导航 -->
		<view class="top-bar">
			<view class="left">
				消息
			</view>
			<view class="top-bar-center">
				
			</view>
			<view class="top-bar-right">
				<view class="search" @click="toSearch"><image src="/static/static_public_img/search.png"></image></view>
				<view class="add"><image src="/static/static_public_img/add.png"></image></view>
			</view>
		</view>
		<view class="top">
			<!-- 列表 -->
			<view class="main">
				<view class="friends">
					<view class="friend-list" >
						<view class="friend-list-l">
							<text class="tip">1</text>
							<image src="../../static/images/demo/cate_02.png"></image>
						</view>
						<view class="friend-list-r">
							<view class="top">
								<view class="name">好友申请</view>
								<view class="time">13:43</view>
							</view>
							<view class="news">茫茫人海，相聚便是缘分</view>
						</view>
					</view>
				</view>
				<view class="friends">
					<view class="friend-list" v-for="(item,index) in friends" :key="index" @click="goChat">
						<view class="friend-list-l">
							<text class="tip" v-if="item.tip>0">{{item.tip}}</text>
							<image :src="item.imgurl"></image>
						</view>
						<view class="friend-list-r">
							<view class="top">
								<view class="name">{{item.name}}</view>
								<view class="time">{{dateTime(item.time)}}</view>
							</view>
							<view class="news">{{item.news}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import Tool from '@/common/tool/index.js'
	import Tabbar from "@/components/tabbar/tabbar.vue"
	export default{
		components:{
			Tabbar
		},
		data() {
			return {
				friends:[
					{
						id:1,
						imgurl: '../../static/images/demo/cate_02.png',
						tip:2234,
						name:'大海',
						email:'dahai@163.com',
						time: new Date(),
						news:' TOP 常常遇到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
					},
					{
						id:2,
						imgurl: '../../static/images/demo/cate_02.png',
						tip:0,
						name:'山川',
						email:'shanchuan@163.com',
						time: new Date(),
						news:'版时候,有的标题比较长显示不完,这个时候即又不想换',
					},
					{
						id:3,
						imgurl: '../../static/images/demo/cate_02.png',
						tip:2,
						name:'河流',
						email:'heliu@163.com',
						time: new Date(),
						news:' 有的标题比较长显示不完,这个时',
					}
				],
			}
		},
		methods:{
			toSearch(){
				uni.navigateTo({
					url:'/pages/searchMan/searchMan'
				})
			},
			goChat(){
				uni.navigateTo({
					url:"/pages/chat/chat"
				})
			},
			dateTime(d){
				return Tool.dateTime(d)
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	//  socket 公共样式
	@import "@/common/style/socket.scss";
	.message{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: scroll;
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
	// 
	
		.top-bar{
			padding-top: 30upx;
			background:rgba(255,255,255,0.96);
			border-bottom:1px solid $uni-border-color;
		}
		.left{
			padding-left: 30upx;
			padding-top: 20upx;
			font-size: 30upx;
		}
		.main{
			padding-bottom: $uni-spacing-col-base;
			//border: 1px solid red;
		}
		.friend-list{
			height: 96rpx;
			padding: 16rpx $uni-spacing-col-base;
			&:active{
				background-color: $uni-bg-color-grey;
			}
			.friend-list-l{
				position: relative;
				float: left;
				image{
					width:96rpx;
					height:96rpx;
					border-radius:$uni-border-radius-base;
					background-color: $uni-color-primary;
				}
				.tip{
					position: absolute;
					z-index: 10;
					top: -8rpx;
					left: 68rpx;
					min-width:20rpx ;
					padding: 0 8rpx;
					height:36rpx;
					background:$uni-color-warning;
					border-radius:18rpx;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-inverse;
					line-height: 36rpx;
					text-align: center;
				}
			}
			.friend-list-r{
				padding-left: 128rpx;
				.top{
					height: 50rpx;
					.name{
						float: left;
						font-size:36rpx;
						font-weight:400;
						color:$uni-text-color;
						line-height:50rpx;
					}
					.time{
						//display:none;
						float: right;
						font-size: $uni-font-size-sm;
						color: $uni-text-color-disable;
						line-height:50rpx;
					}
				}
			}
			.news{
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
				line-height: 40rpx;
				//width: 100%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
		}
</style>
