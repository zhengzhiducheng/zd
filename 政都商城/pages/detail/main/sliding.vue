<template>
	<view class="sliding">
		<view v-for="i in 20" :key="i" class="item">
			{{i}}
		</view>
	</view>
	
</template>

<script>
</script>

<style lang="scss" scoped>
	.sliding{
		display: flex;
		overflow-y: scroll;
		.item{
			padding: 0 20upx;
		}
		&::-webkit-scrollbar {
		  display: none!important; /* Chrome Safari */
		}
	}
</style>
