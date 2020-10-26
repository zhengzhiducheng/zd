<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-center"></view>
			<view class="top-bar-right" @tap="toSignUp">
				<CrossLine height="20upx"></CrossLine>
				<view class="text">去注册</view>
			</view>
		</view>
		<view class="logo">
			<image src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png" @tap="testFun1"></image>
		</view>
		<view class="main">
			<view class="title">登录</view>
			<view class="slogan">您好，欢迎来到 政都易购！</view>
			<view class="inputs">
				<input type="text" 
					v-model="user" placeholder="邮箱" 
					class="user" placeholder-style="color:#aaa;font-weight:400;" @blur="getUser"/>
				<input type="password" placeholder="密码" 
					class="psw" placeholder-style="color:#aaa;font-weight:400;" @blur="getPsw"/>
			</view>
			<!-- <view class="tips">输入用户或密码错误！</view> -->
		</view>
		<view class="submit" @tap="testFun">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				psw:'',
			}
		},
		methods: {
			//后台链接测试
			bbb: function(){
				console.log(this.user);
			},
			testFun: function(){
				console.log(1)
			},
			testFun1: function(){
				console.log(1)
			},
			//跳转到注册页面
			toSignUp: function(){
				uni.navigateTo({
				    url: '../signup/signup',
				});
			},
			//获取用户名/邮箱
			getUser: function(e){
				this.user = e.detail.value;
			},
			//获取密码
			getPsw: function(e){
				this.psw = e.detail.value;
			},
			
			//登录提交
			login: function(){
				if(this.user && this.psw){
					console.log('提交')
				}
			}
			
		}
	}
</script>

<style lang="scss">
	@import "@/common/style/socket.scss";
	.logo{
		text-align: center;
		image{
			padding-top: 120rpx;
			width: 220rpx;
			height: 220rpx;
			margin: 0 auto;
		}
	}
	.main{
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		//width: 100%;
		.title{
			font-size:56rpx;
			font-weight:500;
			color:$uni-text-color;
			line-height:80rpx;
		}
		.slogan{
			font-size:40rpx;
			color:$uni-text-color-grey;
			line-height:56rpx;
		}
		.inputs{
			padding-top: 8rpx;
			
			input{
				padding-top: 40rpx;
				height: 88rpx;
				font-size:$uni-font-size-lg;
				font-weight:500;
				color:$uni-text-color;
				line-height:88rpx;
				border-bottom:1px solid $uni-border-color;
			}
		}
		.tips{
			float: left;
			font-size:$uni-font-size-lg;
			color:$uni-color-warning;
			line-height:56rpx;
		}
	}
	.submit{
		margin: 0 auto;
		width:520rpx;
		height:96rpx;
		color: #FFFFFF;
		background:red;
		border-radius:48rpx;
		font-size:$uni-font-size-lg;
		font-weight:500;
		line-height:96rpx;
		text-align: center;
	}
</style>
