<template>
	<view class="lm-nav">
		<view class="iconfont iconsousuo lm-nav-lt">
		</view>
		<view class="lm-nav-ct">
			<view>推荐</view>
			<view>同城</view>
		</view>
		<view class="lm-nav-rt">
			
		</view>
	</view>
</template>

<script>
</script>

<style>
	.lm-nav {
		width: 100%;
		position: fixed;
		top: 25px;
		left: 0;
		height: 35px;
		line-height: 35px;
		/* background-color: rgba(0,0,0,.5); */
		color: #FFFFFF;
		z-index: 999;
	}
	.lm-nav-lt {
		width: 20%;
		position: absolute;
		left: 0px;
		font-size: 20px;
		text-align: center;
	}
	.lm-nav-ct {
		width: 100px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
</style>
