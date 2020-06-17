<template>
	<view class="lm-video-list">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item>
					<view class="swiper-item">
						<video-player></video-player>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">我是第二页</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from './videoPlayer.vue'
	export default {
		components: {
			videoPlayer
		}
	}
</script>

<style>
	.lm-video-list {
		width: 100%;
		height: 100%;
		background-color: #333;
	}
	.swiper-box,
	.swiper,
	.swiper-item {
		width: 100%;
		height: 100%;
	}
</style>
