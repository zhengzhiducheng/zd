<template>
	<view class="chat">
		<!-- 头部 -->
		<Topbar leftWord="返回" centerWord="xxx" rightWord=". . ."></Topbar>
		<CrossLine height="100upx"></CrossLine>
		<Main 
			:talkList="messageList"
			></Main>
		<CrossLine :height="functions?'400upx':'100upx'" v-if="functions"></CrossLine>
		<CrossLine :height="face?'400upx':'100upx'" v-if="face"></CrossLine>
		<CrossLine height='100upx' v-if="functions == false && face == false"></CrossLine>
		<InputCat class="inputChat"
			@faceChange="faceChange"
			:face="face"
			:voice="voice"
			@voiceChange="voiceChange"
			:functions="functions"
			@addChange="addChange"></InputCat>
	</view>
</template>

<script>
	import Main from "./main/main.vue"
	import InputCat from "./main/Input.vue"
	import Topbar from '@/components/topBar/topBar.vue'
	export default{
		components:{
			Topbar,
			InputCat,
			Main
		},
		methods:{
			addChange(b){
				this.functions=b
			},
			voiceChange(n){
				this.voice=n
			},
			faceChange(d){
				this.face=d
			}
		},
		data(){
			return{
				face:false, // 笑脸默认状态
				voice:true, // 语音默认状态
				functions:false,// +号 按钮默认状态
				messageList:[
					{
						id:"a",
						url:"../../static/images/demo/cate_01.png",
						message:"是否编辑客服请叫我",
						types:0,
						time:new Date()-1000,
						tip:0
					},
					{
						id:"b",
						url:"../../static/images/demo/cate_01.png",
						message:"是否编辑客服请叫我",
						types:0,
						time:new Date()-1000*60*6,
						tip:0
					},
					{
						id:"b",
						url:"../../static/images/demo/cate_01.png",
						message:"1",
						types:0,
						time:new Date()-1000*60*8,
						tip:0
					},
					{
						id:"b",
						url:"../../static/images/demo/cate_01.png",
						message:"是否编辑客服请叫我",
						types:0,
						time:new Date()-1000*3*60*10,
						tip:0
					},
					{
						id:"b",
						url:"../../static/images/demo/cate_01.png",
						message:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png",
						types:1,
						time:new Date()-1000*3,
						tip:0
					},
					{
						id:"a",
						url:"../../static/images/demo/cate_01.png",
						message:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png",
						types:1,
						time:new Date()-1000*3,
						tip:0
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		background: #CCCCCC;
		flex-direction: column;
		
		.inputChat{
			position: fixed;
			bottom: 0;
			// height: 100upx;
			width: 100%;
		}
	}
	
</style>
