<template>
	<view class="lm-video-list">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true"  @change="change">
				<swiper-item v-for="(item,index) in list" :key="item.id" @touchstart="touchStart" @touchend="touchEnd">
					<view class="swiper-item">
						<video-content :videoContent="item"></video-content>
						<video-right ref="right" :listItem="item" class="lm-video-right"></video-right>
						<video-player :index="index" @dbClick="dbClick" ref="player" :videoItem="item"></video-player>
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
	var time = null
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
				currentPage: 0,
				pageStartY: 0,
				pageEndY: 0
			}
		},
		methods:{
			change(e) {
				clearTimeout(time)
				this.currentPage = e.detail.current
				time = setTimeout(() => {
					if(this.pageStartY < this.pageEndY) {
						this.pageStartY = 0
						this.pageEndY = 0
						this.$refs.player[this.currentPage].player()
						this.$refs.player[this.currentPage + 1].pause()
					} else {
						this.pageStartY = 0
						this.pageEndY = 0
						this.$refs.player[this.currentPage-1].pause()
						this.$refs.player[this.currentPage].player()
					}
				}, 1)
			},
			touchStart(e) {
				this.pageStartY = e.changedTouches[0].clientY
			},
			touchEnd(e) {
				this.pageEndY = e.changedTouches[0].clientY
			},
			dbClick() {
				this.$refs.right[this.currentPage].dbChangeColor()
			}
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
	.lm-video-right {
		position: fixed;
		z-index: 22;
		bottom: 60px;
		right: 10px;
	}
</style>
