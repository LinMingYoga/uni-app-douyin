<template>
	<view class="content">
		<first-nav></first-nav>
		<video-list></video-list>
		<tab class="tab-comm"></tab>
	</view>
</template>

<script>
	import tab from '../../comm/tab.vue'
	import firstNav from '../../comm/firstNav.vue'
	import videoList from '../../comm/videoList.vue'
	export default {
		components:{
			tab,
			videoList,
			firstNav
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100vh;
	}
	.tab-comm {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
