<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-center"></view>
		</view>
		<view class="logo">
			<image src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png"></image>
		</view>
		<view class="main">
			<view class="title">登录</view>
			<view class="slogan">您好，欢迎来到 政都易购！</view>
			<view class="inputs">
				<input type="text" 
					v-model="email" placeholder="邮箱" 
					class="user" placeholder-style="color:#aaa;font-weight:400;"/>
				<input v-model="psw"
				type="password" placeholder="密码" 
					class="psw" placeholder-style="color:#aaa;font-weight:400;"/>
			</view>
			<!-- <view class="tips">输入用户或密码错误！</view> -->
		</view>
		<view class="top-bar-right">
			<CrossLine height="20upx"></CrossLine>
			<view class="d-flex j-sb px-2">
				<text @tap="forgetWord"  v-once>忘记密码</text>
				<text @click="toSignUp">去注册</text>
			</view>
		</view>
		<view class="submit" @click="login">登录</view>
	</view>
</template>

<script>
	import Ajax from "@/common/lib/requset.js"
	export default {
		data() {
			return {
				email:'',
				psw:''
			}
		},
		methods: {
			// 忘记密码
			async forgetWord(){
				let {email} = this
				if(email){
					let result = await Ajax.request({
						url:"/from/forgetWord",
						method:"POST",
						data:{email}
					})
					if(result.code == 0){
						uni.showToast({
						    title: result.data,
						    duration: 2000
						});
					}else{
						uni.showToast({
						    title: result.data,
						    duration: 2000
						});
					}
				}else{
					uni.showToast({
					    title: "请输入邮箱账号",
					    duration: 2000
					});
				}
			},
			//跳转到注册页面
			toSignUp: function(){
				uni.navigateTo({
				    url: '../signup/signup',
				});
			},
			//登录提交
			async login(){
				let {email,psw} = this
				if(email && psw){
					let result = await Ajax.request({
						url:"/from/login",
						method:"POST",
						data:{email,psw},
					})
					if(result.code == 0){
						this.email = this.psw = ''
						uni.showToast({
						    title: "登陆成功",
						    duration: 2000
						});
						this.$store.commit("setUserInfo",result.data)
						setTimeout(()=>{
							uni.navigateTo({
								url:"/pages/index/index"
							})
						},2000)
					}else{
						uni.showToast({
						    title: "填写错误",
						    duration: 2000
						});
						setTimeout(()=>{
							this.email = this.psw = ''
						},2000)
					}
					
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
	.top-bar-right{
		text-align: right;
		padding-right: 20upx;
		margin-bottom: 20upx;
	}
	.main{
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		padding-bottom: 0;
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
