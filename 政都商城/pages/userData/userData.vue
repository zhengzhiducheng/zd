<template>
	<view class="userdata">
		<view class="top-bar" >
			<image @tap="backOne" style="height: 30upx;width: 30upx;"
				src="/static/static_public_img/back.png"></image>
			<view class="center">个人资料</view>
			<view class="top-bar-right" @click="userinfo">编辑</view>
		</view>
		<view class="main">
			<ListItem title="头像">
				<view class="item">
					<image src="../../static/images/demo/cate_02.png" mode=""></image>
				</view>
			</ListItem>
			<ListItem title="签名">
				<view class="item">
					水电费
				</view>
			</ListItem>
			<ListItem title="注册">
				<view class="item">
					2017/05/08
				</view>
			</ListItem>
			<ListItem title="昵称" @switchChange="nikname">
				<view class="item">
					政治都城
				</view>
			</ListItem>
			<ListItem title="性别">
				<view class="item">
					男
				</view>
			</ListItem>
			<ListItem title="生日">
				<view class="item">
					1998/05/02
				</view>
			</ListItem>
			<ListItem title="电话">
				<view class="item">
					18033833254
				</view>
			</ListItem>
			<ListItem title="邮箱">
				<view class="item">
					1529521620@qq.com
				</view>
			</ListItem>
		</view>
	</view>
</template>

<script>
	import ListItem from "./main/listItem.vue";
	export default{
		components:{
			ListItem
		},
		methods:{
			//返回登录页面
			backOne(){
				uni.navigateBack({
				    delta: 1
				});
			},
			nikname(){
				console.log(1)
			},
			userinfo(){
				uni.navigateTo({
					url:"/pages/updataInfo/updataInfo"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.userdata{
		height: 100%;
	}
	.top-bar{
		display: flex;
		justify-content: space-between;
		height: 100upx;
		padding-top: 30upx;
		padding-left: 30upx;
		padding-right: 30upx;
		align-items: center;
		border-bottom: 2upx solid #CCCCCC;
		.center{
			font-size: 34upx;
		}
	}
	.main{
		.item{
			display: flex;
			align-items: center;
			margin-left: 20upx;
			font-size: 32upx;
			color: #6C757D;
			image{
				width: 120upx;
				height: 120upx;
				margin: 0;
			}
		}
	}
</style>
