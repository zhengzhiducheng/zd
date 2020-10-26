<template>
	<view class="searchMan">
		<CrossLine height="130upx"></CrossLine>
		<!-- 顶部导航 -->
		<view class="top-bar">
			<view class="search-div">
				<image src="/static/static_public_img/search.png" class="search-img"></image>
				<input type="search" placeholder="搜索用户/群" class="search" placeholder-style="color:#aaa;font-weight:400;" @input="search"/>
			</view>
			<view class="top-bar-right">
				<view class="text" @tap="backOne">取消</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="main">
			<view class="search-user result">
				<view class="title" v-if="userarr.length>0">用户</view>
				<view class="list user" v-for="(item,index) in userarr" :key="index">
					<image :src="item.imgurl"></image>
					<view class="names">
						<view class="name" v-html="item.name"></view>
						<view class="email" v-html="item.email"></view>
					</view>
					<view class="right-bt send" v-if="item.tip==1" @click="sendChat">发消息</view>
					<view class="right-bt add" v-if="item.tip==0" @click="addFirend">加好友</view>
					<view class="right-bt look" v-if="item.tip==2" @click="lookData">看资料</view>
				</view>
				<!-- <view class="list user">
					<image src="../../static/images/img/four.png"></image>
					<view class="names">
						<view class="name">大力出奇迹</view>
						<view class="email">dalichuqiji@163.com</view>
					</view>
					<view class="right-bt add">加好友</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					userarr:[
						{
							id:1,
							imgurl: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png',
							tip:0,
							name:'大海',
							email:'dahai@163.com',
							time: new Date(),
							news:' TOP 常常遇到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
						},
						{
							id:2,
							imgurl: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png',
							tip:1,
							name:'山川',
							email:'shanchuan@163.com',
							time: new Date(),
							news:'版时候,有的标题比较长显示不完,这个时候即又不想换',
						},
						{
							id:3,
							imgurl: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png',
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
				addFirend(){
					uni.navigateTo({
						url:"/pages/userhome/userhome"
					})
				},
				sendChat(){
					uni.navigateTo({
						url:"/pages/chat/chat"
					})
				},
				lookData(){
					uni.navigateTo({
						url:"/pages/userhome/userhome"
					})
				},
				//获取关键词
				search:function(e){
					this.userarr = [];
					let searchval = e.detail.value;
					if(searchval.length>0){
						this.searchUser(searchval);
					}
				},
				//返回首页
				backOne: function(){
					uni.navigateBack({
					    delta: 1
					});
				}
			}
		}
</script>

<style lang="scss" scoped>
	@import "@/common/style/socket.scss";
	.searchMan{
		height: 100%;
		overflow-y: scroll;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
	}
		.top-bar{
			padding-top: 30upx;
			background:rgba(255,255,255,0.96);
			border-bottom:1px solid $uni-border-color;
			.search-div{
				flex: auto;
				box-sizing: border-box;
				padding: 14rpx 20rpx 14rpx $uni-spacing-col-base;
			}
			.search{
				padding: 0 60rpx 0 12rpx;
				//width:100%;
				height:60rpx;
				background:$uni-bg-color-grey;
				border-radius:10rpx;
			}
			.search-img{
				position: absolute;
				right: 136rpx;
				top: 52rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		.main{
			padding: 0 20upx;
			.result{
				padding-top: $uni-spacing-col-base;
				.title{
					font-size:44rpx;
					font-weight:600;
					color:$uni-text-color;
					line-height:60rpx;
				}
				.list{
					width: 100%;
					//border: 1px solid red;
					padding: 20rpx 0;
					height: 80rpx;
					image{
						float: left;
						width:80rpx;
						height:80rpx;
						border-radius:$uni-border-radius-base;
					}
					.look{
						background: red;
						color: #ffff;
					}
				}
				.names{
					float: left;
					padding-left: $uni-spacing-col-base;
				}
				.name{
					font-size:36rpx;
					color:$uni-text-color;
					line-height:50rpx;
				}
				.email{
					font-size:$uni-font-size-sm;
					color:$uni-text-color;
					line-height:28rpx;
				}
				.right-bt{
					float: right;
					width:120rpx;
					height:48rpx;
					border-radius:24rpx;
					font-size:$uni-font-size-sm;
					line-height:48rpx;
					margin-top: 16rpx;
					text-align: center;
				}
				.send{
					background:$uni-color-primary;
					color:$uni-text-color;
				}
				.add{
					background:rgba(74,170,255,0.1);
					color:$uni-color-success;
				}
			}
		}
</style>
