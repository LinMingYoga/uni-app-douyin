<template>
	<view class="lm-video-list">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item v-for="item in list" :key="item.id">
					<view class="swiper-item">
						<video-content :videoContent="item"></video-content>
						<video-right></video-right>
						<video-player :videoItem="item"></video-player>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from './videoPlayer.vue'
	import videoContent from './videoContent.vue'
	import videoRight from './videoRight.vue'
	export default {
		props:{
			list: {
				type: Array,
				default: []
			}
		},
		components: {
			videoPlayer,
			videoContent,
			videoRight
		},
		data() {
			return {
			}
		},
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
