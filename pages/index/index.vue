<template>
	<view class="content">
		<first-nav></first-nav>
		<video-list :list="list"></video-list>
		<tab class="tab-comm"></tab>
	</view>
</template>

<script>
	import tab from '@/common/tab.vue'
	import firstNav from '@/common/firstNav.vue'
	import videoList from '@/common/videoList.vue'
	// api
	import { getVideoList } from '@/api/index.js'
	export default {
		components:{
			tab,
			videoList,
			firstNav
		},
		data() {
			return {
				title: 'Hello',
				list: []
			}
		},
		onLoad() {
			getVideoList().then(res => {
				console.log(res)
				this.list = res.list
			})
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
