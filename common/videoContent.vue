<template>
	<view class="lm-video-content">
		<view class="lm-content-userName">
			@{{videoContent.author}}
		</view>
		<view class="lm-content-content">
			{{videoContent.title}}
		</view>
		<view class="overflowMusic">
			<view class="lm-content-other">
				麻烦给我的爱人来一杯Mojito,我喜欢阅读她微醺时的眼眸
			</view>
		</view>
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
		.overflowMusic {
			width: 150px;
			overflow: hidden;
		}
		.lm-content-other {
			height: 35px;
			font-size: 12px;
			width: 305px;
			line-height: 35px;
			animation: music 6s linear .2s infinite;
		}
	}
	@keyframes music {
		0% {
			transform: translate3d(80%, 0, 0);
		}
		100% {
			transform: translate3d(-80%, 0 , 0);
		}
	}
</style>
