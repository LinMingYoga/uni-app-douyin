<template>
	<view class="lm-video">
		<video
		id="myVideo"
		:src="videoItem.src | setSrc" 
		:controls="true"
		:autoplay="autoPlay"
		@click="handleClick"
    :loop="true">
		</video>
	</view>
</template>

<script>
	var timer = null
	export default {
		filters: {
			setSrc: function(value) {
				return 'http://127.0.0.1:8989/static/' + value
			}
		},
		props:{
			videoItem: {
				type: Object,
				default: null
			},
			index: {
				type: Number,
				default: null
			}
		},
		data() {
			return {
				isPlay: false,
				isDBclick: false,
				autoPlay: false
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo', this)
		},
		created() {
			this.currAutoPlay()
		},
		methods:{
			handleClick() {
				clearTimeout(timer)
				this.isDBclick = !this.isDBclick
				timer = setTimeout(() => {
					// 单击
					if (this.isDBclick) {
						if (this.isPlay === false) {
							this.currPlayer()
						} else {
							this.pause()
						}
					}else {
						// 双击
						this.$emit('dbClick')
					}
					this.isDBclick = false
				}, 300)
			},
			player() {
				if(this.isPlay === false) {
					this.videoContext.seek(0)
					this.videoContext.play()
					this.isPlay = true
				}
			},
			pause() {
				if(this.isPlay === true) {
					this.videoContext.pause()
					this.isPlay = false
				}
			},
			currPlayer() {
				if(this.isPlay === false) {
					this.videoContext.play()
					this.isPlay = true
				}
			},
			currAutoPlay() {
				if(this.index === 0) {
					this.autoPlay = true
				}
			}
		}
	}
</script>

<style>
	.lm-video , video {
		width: 100%;
		height: 100%;
	}
</style>
