<template>
	<view class="city">
		<first-nav></first-nav>
		<city-content></city-content>
		<tab class="tab-comm"></tab>
	</view>
</template>

<script>
	import tab from '@/common/tab.vue'
	import firstNav from '@/common/firstNav.vue'
	import cityContent from '@/common/cityContent.vue'
	export default {
		components:{
			tab,
			cityContent,
			firstNav
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.city {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color: #333333;
}
.tab-comm {
	width: 100%;
	position: fixed;
	bottom: 0;
}
</style>
