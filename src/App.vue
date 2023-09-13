<script setup>
</script>
  
<template>
  <router-view/>
</template>

<style>
body {
  margin: 0;
  width: 100%;
  overflow: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  text-align: left;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  /* overflow: auto; */
}
.page-title {
	margin: 1rem auto;
	text-align: center;
	font-size: 3rem;
	font-weight: bold;
  line-height: 1.5em;
	text-transform: uppercase;
}
.page-desc {
	margin: 0 auto 1rem;
	text-align: center;
	color: #4e4e4e;
}
</style>