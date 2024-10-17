<template>
	<h1>{{ params }}</h1>
</template>

<script setup>
	import { useRoute } from "vue-router";

	const route = useRoute();

	const params = route.params;
</script>

<style lang="css" scoped></style>
