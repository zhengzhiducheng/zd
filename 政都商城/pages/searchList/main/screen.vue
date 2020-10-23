<template>
	<view class="d-flex border-top border-bottom a-center"
		style="height:100upx">
		<view class="flex-1 d-flex a-center j-center font-md text-muted"
			v-for="(item,index) in screen.list" :key="index"
			@click="changeScreen(index)">
			<text :class="screen.currentIndex == index?'main-text-color':'text-muted'">{{item.name}}</text>
			<view class="">
				<view class="iconfont icon-paixu-shengxu line-h0" 
					:class="item.status == 1?'main-text-color':'text-muted'" ></view>
				<view class="iconfont icon-paixu-jiangxu line-h0"
					:class="item.status == 2?'main-text-color':'text-muted'"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			changeScreen(index){
				// 判断激活
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				if(oldIndex == index){
					return oldItem.status =oldItem.status == 1?2:1
				}
				let newItem = this.screen.list[index]
				// 移除旧激活
				oldItem.status = 0
				this.screen.currentIndex = index
				//新增激活
				newItem.status = 1
			}
		},
		data(){
			return{
				showRight:false,
				screen:{
					currentIndex:0,
					list:[
						{
							name:"综合",status:1
						},
						{
							name:"销量",status:0
						},
						{
							name:"价格",status:0
						}
					]
				}
			}
		}
	}
</script>

<style>
</style>

