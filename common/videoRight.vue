<template>
	<view class="listright">
		<view class="author-img">
			<image class="img" src="../static/img/logo.png" @click="click"></image>
			<view class="iconfont iconjiahao add" v-show="show" @click="hide">
			</view>
		</view>
		<view class="iconfont iconaixin right-box" :style="color" @click="changeColor">
			
		</view>
		<view class="number">
			{{listItem.loveNumber}}
		</view>
		<view class="iconfont icontubiaozhizuo-  right-box" @click="openComment">
		</view>
		<view class="number">
			{{listItem.commentNumber}}
		</view>
		<view class="iconfont iconfenxiang right-box">
		</view>
		<view class="number">
			{{listItem.shareNumber}}
		</view>
		<view class="around">
			<image class="img" src="../static/img/2-1.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			listItem: {
				type: Object,
				default: null
			}
		},
		data() {
			return {
				show:true,
				color:''
			};
		},
		methods:{
			hide(){
				this.show=false
			},
			dbChangeColor() {
				this.color = 'color:red;'
			},
			changeColor(){
				this.color=this.color===''?"color:red;":''
			},
			click(){
				uni.navigateTo({
					url:'/pages/user/user'
				})
			},
			openComment(){
				this.$emit('open')
			}
			
		}
	}
</script>

<style>
.listright{
	width: 50px;
	margin: 0 auto;
}
.author-img{
	height: 50px;
	width:50px;
	border-radius: 50%;
	border:2px solid #FFFFFF;
	position:relative;
}
.img{
	height: 50px;
	width:50px;
	border-radius: 50%;
}
.right-box{
	width:50px;
	height: 40px;
	margin-top:13px ;
	text-align: center;
	line-height: 40px;
	color:#FFFFFF;
	font-size:33px;
}
.number{
	font-size: 10px;
	text-align: center;
	color: #FFFFFF;
}
.around{
	margin-top:15px ;
	animation:rotate 1.5s linear 0.2s infinite;
	height: 50px;
	width:50px;
}
.add{
	width: 18px;
	height:18px;
	border-radius: 50%;
	background: red;
	position:absolute;
	bottom:-9px;
	left:16px;
	text-align: center;
	line-height: 18px;
	color: #FFFFFF;
	font-size: 10px;
}



@keyframes rotate{
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(360deg)
	}
}
</style>
