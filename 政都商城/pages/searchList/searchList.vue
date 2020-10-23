<template>
	<view class="searchList">
		<!-- 搜索 -->
		<Search input="input" 
			leftWords="<" :leftClick="leftClick" rightWords="搜索"
			:rightClick="search"></Search>
		<!-- 筛选 -->
		<Screen></Screen>
		<!-- 列表 -->
		<List :searchList="searchList"></List>
	</view>
</template>

<script>
	import Search from "@/components/search/search.vue"
	import Screen from './main/screen.vue'
	import List from "./main/list.vue"
	export default{
		data(){
			return{
				searchList:[
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"针线蓝牙",
						describe:"还是不符合我八卦基坑李佳恩违法违法",
						comment:1300
					},
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"针线蓝牙",
						describe:"还是不符合我八卦基坑李佳恩违法违法",
						comment:1300
					},
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"针线蓝牙",
						describe:"还是不符合我八卦基坑李佳恩违法违法",
						comment:1300
					},
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"针线蓝牙",
						describe:"还是不符合我八卦基坑李佳恩违法违法",
						comment:1300
					},
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"针线蓝牙",
						describe:"还是不符合我八卦基坑李佳恩违法违法",
						comment:1300
					}
				]
			}
		},
		methods:{
			leftClick(){
				uni.navigateBack({
				    delta: 1
				});
			},
			search(){
				
			}
		},
		components:{
			Screen,
			Search,
			List
		}
	}
</script>

<style lang="scss" scoped>
	.searchList{
		width: 100%;
		height: 100%;
		overflow-y:scroll ;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
	}
</style>
