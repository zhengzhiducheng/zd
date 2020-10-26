<template>
	<view class="chatInput">
		<view class="top">
			<image src="/static/static_public_img/voice.png" mode="" v-if="voice" 
				@click="$emit('faceChange',false),$emit('addChange',false),$emit('voiceChange',!voice)"></image>
			<image src="/static/static_public_img/keyboard.png" mode="" v-if="!voice"
				@click="$emit('voiceChange',!voice)"></image>
			<input type="text" value="" v-if="voice" />
			<view class="down" v-if="!voice">
				按下
			</view>
			<image class="xiao" src="/static/static_public_img/face.png" mode=""
				@click="functions == false?$emit('faceChange',!face):$emit('addChange',false),$emit('faceChange',!face)"></image>
			<image src="/static/static_public_img/add.png" mode="" 
				@click="face==false?$emit('addChange',!functions):$emit('faceChange',false),$emit('addChange',!functions)"></image>
		</view>
		<view class="bottomfunctions" v-show="functions">
			<view class="item">
				<view class="iconfont icon-tupian"></view>
				<text>图片</text>
			</view>
			<view class="item">
				<view class="iconfont icon-xiangji"></view>
				<text>相机</text>
			</view>
			<view class="item">
				<view class="iconfont icon-weizhi"></view>
				<text>位置</text>
			</view>
			<view class="item">
				<view class="iconfont icon-shipin_huabanfuben"></view>
				<text>视频</text>
			</view>
			<view class="item">
				<view class="iconfont icon-yinpin"></view>
				<text>音频</text>
			</view>
			<view class="item">
				<view class="iconfont icon-wenjian"></view>
				<text>文件</text>
			</view>
		</view>
		<view class="bottomface" v-show="face">
			<text v-for="(item,index) in biaoqingbao" :key="index" class="item">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				biaoqingbao:[
					'😄',
					'😷',
					'😂'
				]
			}
		},
		props:[
			'functions',
			'voice',
			'face'
		]
	}
</script>

<style lang="scss" scoped>
	@import url("./iconfont.css");
	.chatInput{
		background: #C0C0C0;
		.bottomfunctions{
			height: 300upx;
			display: flex;
			flex-wrap: wrap;
			.item{
				width: 25%;
				box-sizing: border-box;
				padding: 10upx;
				height: 150upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				.iconfont{
					font-size: 56upx;
					height: 70upx;
				}
			}
		}
		.bottomface{
			height: 300upx;
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			padding: 20upx;
			.item{
				width: 10%;
				height: 40upx;
				font-size: 40upx;
			}
		}
		.top{
			height: 100upx;
			align-items: center;
			display: flex;
			image{
				padding: 0 5upx;
				width: 60upx;
				height: 60upx;
			}
			.xiao{
				width: 55upx;
				height: 55upx;
			}
			input{
				margin: 10upx;
				border-radius: 10upx;
				overflow: hidden;
				flex: 1;
				text-indent: 1em;
				height: 70upx;
				background-color: #FFFFFF;
			}
			.down{
				margin: 10upx;
				border-radius: 10upx;
				overflow: hidden;
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 70upx;
				background-color: #FFFFFF;
			}
		}
	}
</style>
