<template>
	<view class="lm-city-main">
		<view class="lm-city-content">
			<view class="lm-city-position">
				<view class="iconfont icondingwei">
					自动定位：北京
				</view>
				<view class="">
					切换<text class="iconfont iconchangyongicon-"></text>
				</view>
			</view>
			<view class="lm-video-list">
				<view class="lm-city-video">
					<view class="lm-video-player">
						<video style="width: 100%; height: 100%;" src="http://127.0.0.1:8989/static/1-1.mp4" objectFit="fill" controls></video>
					</view>
					<view class="lm-video-auther">
						<image src="../static/img/logo.png" mode=""></image>
					</view>
				</view>
				<view class="lm-city-video">
					<view class="lm-video-player">
						<video style="width: 100%; height: 100%;" src="http://127.0.0.1:8989/static/1-1.mp4" objectFit="fill" controls></video>
					</view>
					<view class="lm-video-auther">
						<image src="../static/img/logo.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.lm-city-main {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 5px;
		.lm-city-content {
			.lm-city-position {
				width: 100%;
				height: 30px;
				padding-top: 60px;
				line-height: 30px;
				overflow: hidden;
				color: #aaaaaa;
				display: flex;
				justify-content: space-between;
				> view {
					font-size: 13px;
				}
			}
		}
		.lm-video-list {
			display: flex;
			justify-content: space-between;
			.lm-city-video {
				position: relative;
				width: 49%;
				.lm-video-player {
					height: 300px;
				}
				.lm-video-auther {
					position: absolute;
					bottom: 10px;
					right: 5px;
					image {
						width: 30px;
						height: 30px;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
