<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne" style="font-size:30upx;">
				<CrossLine height="30upx"></CrossLine>
				去登录
			</view>
		</view>
		<view class="logo">
			<image src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png"></image>
		</view>
		<view class="main">
			<view class="title">注册</view>
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" placeholder="请取个名字" class="user" placeholder-style="color:#aaa;font-weight:400;" @input="getUser"/>
					<view class="employ" v-if="useemploy">已占用</view>
					<image src="/static/static_public_img/right1.png" class="ok" v-if="isuser"></image>
				</view>
				<view class="inputs-div">
					<input type="text" placeholder="请输入邮箱" class="email" placeholder-style="color:#aaa;font-weight:400;" @input="isEmail"/>
					<view class="employ" v-if="emailemploy">已占用</view>
					<view class="invalid" v-if="invalid">邮箱无效</view>
					<image src="/static/static_public_img/right1.png" class="ok" v-if="isemail"></image>
				</view>
				<view class="inputs-div">
					<input :type="type" placeholder="这里输入密码" class="psw" placeholder-style="color:#aaa;font-weight:400;" @input="getPsw"/>
					<image :src="lookurl" class="look" @tap="looks"></image>
				</view>
			</view>
		</view>
		<view :class="[{submit:isok},{submit1:!isok}]">注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'password',
				isuser:false,	 //用户是否可用
				isemail:false,	 //邮箱是否可用
				look:false,		 //是否显示密码
				invalid: false,  //邮箱是否符合
				useemploy: false,   //用户是否被占有
				emailemploy: false,   //邮箱是否被占有
				lookurl: '../../static/images/sign/biyan.png',
				email:'',        //邮箱
				user:'',		 //用户名称
				psw:'',			 //密码
				isok: false,
			}
		},
		methods: {
			//密码显示隐藏
			looks: function(){
				if(this.look){
					this.type="password";
					this.look=!this.look;
					this.lookurl= '../../static/images/sign/biyan.png';
				}else{
					this.type="text";
					this.look=!this.look;
					this.lookurl= '../../static/images/sign/look.png';
				}
			},
			//判断是否为邮箱格式
			isEmail: function(e){
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				this.email=e.detail.value;
				if(this.email.length>0){
					if(reg.test(this.email)){
						//console.log("正确");
						this.invalid = false;
						this.isemail = true
					}else{
						//console.log("不正确");
						this.invalid = true;
						this.isemail = false
					}
				}
				this.isOk();
			},
			
			//获取用户名
			getUser: function(e){
				this.user = e.detail.value;
				if(this.user !=''){
					this.isuser = true
				}else{
					this.isuser = false
				}
				this.isOk();
			},
			//获取密码
			getPsw: function(e){
				this.psw = e.detail.value;
				this.isOk();
			},
			
			//判断刻注册了
			isOk: function(){
				if(this.isuser && this.isemail && this.psw.length>5){
					this.isok = true;
				}else{
					this.isok = false;
				}
			},
			//返回登录页面
			backOne(){
				uni.navigateTo({
					url:"/pages/signin/signin"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/style/socket.scss";
	.logo{
		text-align: center;
		image{
			padding-top: 100rpx;
			width: 200rpx;
			height: 200rpx;
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
		.inputs-div{
			position: relative;
		}
		.employ,.invalid{
			position: absolute;
			right: 0;
			top: 40rpx;
			font-size:$uni-font-size-base;
			font-weight:500;
			color:$uni-color-warning;
			line-height:88rpx;
		}
		.ok{
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 38rpx;
			height: 30rpx;
		}
		.look{
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 32rpx;
			height: 18rpx;
			
		}
	}
	.submit{
		margin: 0 auto;
		width:520rpx;
		height:96rpx;
		background:red;
		border-radius:48rpx;
		font-size:$uni-font-size-lg;
		font-weight:500;
		color:#FFFFFF;
		line-height:96rpx;
		text-align: center;
	}
	.submit1{
		margin: 0 auto;
		width:520rpx;
		height:96rpx;
		background:rgba(39,40,50,0.2);
		border-radius:48rpx;
		font-size:$uni-font-size-lg;
		font-weight:500;
		color:#FFFFFF;
		line-height:96rpx;
		text-align: center;
	}
</style>
