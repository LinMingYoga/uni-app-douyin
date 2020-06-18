<template>
	<view class="lm-video">
		<video 
		:src="videoItem.src | setSrc" 
		:controls="true"
        :loop="true">
		</video>
	</view>
</template>

<script>
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
