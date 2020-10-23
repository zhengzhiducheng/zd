<template>
    <view class="head">
        <view class="header-wrap">
            <view class="index-header">
                <text class="address" v-if="leftWords" @click="leftEmit">
					{{leftWords}}
				</text>
                <view class="input-wrap" v-if="input">
					<view class="iconfont icon-sousuo"></view>
                    <input type="text" 
                           placeholder="请输入搜索内容"
                            v-model="value"
							@click="inputEmit"
                           @change="inputChange"/>
                </view>
                <view class="map-wrap"
                      v-if="rightWords||rightIcon"
                      @click="rightEmit">
                    <text class="iconfont" :class="rightIcon"></text>
                    <text>{{rightWords}}</text>
                </view>
            </view>
        </view>
        <view class="blank"></view>
 
    </view>
</template>
 
<script>
    export default {
        name: "IndexHeader",
        props: [
            'leftWords',
            'input',
            'rightIcon',
            'rightWords',
			'inputClick',
			'leftClick',
			'rightClick'
        ],
        data () {
            return {
                value: '',
				search:"search"
            }
        },
        methods: {
            inputChange: function () {
                this.$emit('change',this.value)
            },
            rightEmit() {
				if(this.rightClick){
					this.rightClick()
				}
                
            },
			inputEmit(){
				if(this.inputClick){
					this.inputClick()
				}
			},
			leftEmit(){
				if(this.leftClick){
					this.leftClick()
				}
			}
        }
    }
</script>
 
<style lang="scss" scoped>
    $color-base: #BB4739; 
    $words-color-base: #333333;
    $words-color-light: #999999; 
    .header-wrap {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 999;
        
        .index-header {
            height: 90upx;
            line-height: 88upx;
            padding: 0 30upx;
            padding-top: 40upx;
            background-color: $color-base;
            font-size: 40upx;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .address {
                font-size: 40upx;
				display: flex;
				align-items: center;
				height: 100%;
				box-sizing: border-box;
				padding-bottom: 10upx;
            }
            
            .input-wrap {
				display: flex;
				flex: 1;
				align-items: center;
                width: 500upx;
                height: 60upx;
                padding: 10upx 30upx 10upx 20upx;
				margin-left: 20upx;
                box-sizing: border-box;
                background-color: #fff;
                border-radius: 50upx;
                color: $words-color-base;
				icon{
					width: 20upx;
				}
				input{
					padding-left: 10upx;
					flex: 1;
				}
            }
            
            .map-wrap {
				display: flex;
				align-items: center;
				padding-left: 10upx;
                .iconfont {
                    font-size: 32upx;
                    margin-right: 5upx;
                }
                text {
					display: block;
                    font-size: 32upx;
                }
            }    
        }
    }
    .blank {
        height: 126upx;
    }
</style>
