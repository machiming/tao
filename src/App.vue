<template>
	<div id="app">
		<router-view> </router-view>
	</div>
</template>
<script>
    export default ({
        mounted() {
            window.addEventListener("unload", () => {
                localStorage.setItem("state", JSON.stringify(this.$store.state))
            })
        } ,watch: {
            $route(to, from) {
               document.title = to.meta.title;
               console.log(to)
            }
        }
    })
</script>
<style>
	
	*{
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	#nav {
		padding: 30px;
	}
	
	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}
	
	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
