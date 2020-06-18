<template>
	<view class="tab">
		<view class="tab-box">首页</view>
		<view class="tab-box">关注</view>
		<view class="tab-box">
			<view class="iconfont iconjiahao icon-box"></view>
		</view>
		<view class="tab-box">消息</view>
		<view class="tab-box">我</view>
	</view>
</template>

<script>
</script>

<style>
	.tab {
		width: 100%;
		background-color: #000;
		color: #fff;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.icon-box {
		background-color: #fff;
		color: #000000;
		width: 40px;
		height: 30px;
		display: flex;
		justify-content: center;
		font-weight: 600;
		font-size: 15px;
		border-radius: 5px;
		align-items: center;
	}
</style>
