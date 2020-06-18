<template>
	<view class="lm-video-content">
		<view class="lm-content-userName">
			@{{videoContent.author}}
		</view>
		<view class="lm-content-content">
			{{videoContent.title}}
		</view>
		<!-- <view class="lm-content-other">
			other
		</view> -->
	</view>
</template>

<script>
	export default {
		props: {
			videoContent: {
				type: Object,
				default: null
			}
		}
	}
</script>

<style lang="scss">
	.lm-video-content {
		position: absolute;
		bottom: 50px;
		left: 0;
		z-index: 20;
		color: #fff;
		box-sizing: border-box;
		padding: 0 5px;
		width: 100%;
		.lm-content-content {
			width: 50%;
			height: auto;
			font-size: 14px;
			word-wrap: break-word;
			margin: 10px 0;
		}
	}
</style>
