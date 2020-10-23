<template>
	<scroll-view scroll-y class="left-aside">
		<view 
			v-for="(item,index) in flist" 
			:key="index" 
			class="f-item b-b" 
			:class="{active:index === current}" 
			@click="tabtap(index)">
			{{item.name}}
		</view>
	</scroll-view>
</template>

<script>
	export default{
		props:['current','flist'],
		methods:{
			tabtap(index){
				this.$emit('tabtap',index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
		.f-item {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100upx;
			font-size: 28upx;
			position: relative;
			&.active{
				color: red;
				background: #f8f8f8;
				&:before{
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					height: 36upx;
					width: 8upx;
					background-color: red;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
		
	}
	
</style>
