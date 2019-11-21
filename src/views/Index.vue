<template>
	<div class="home">
		<router-view></router-view>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
    import TabBar from "@/components/TabBar";
    import HeadBar from "@/components/HeadBar";
    export default {
        name: 'home',
        components: {
            TabBar,
            HeadBar,
        }
    }
</script>
