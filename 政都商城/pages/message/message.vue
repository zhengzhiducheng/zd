<template>
	<view class="message">
		<view class="top">
			
		</view>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import Tabbar from "@/components/tabbar/tabbar.vue"
	export default{
		components:{
			Tabbar
		}
	}
	
</script>

<style lang="scss" scoped>
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
		}
	}
</style>
