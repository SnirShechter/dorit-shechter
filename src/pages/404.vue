<template>
	<Layout>
		<div class="container-inner mx-auto py-16 flex justify-center text-center">
			<div>
				<h2 class="text-4xl font-bold mb-16">דף לא נמצא</h2>
				<g-link
					to="/"
					class="block bg-green-700 hover:bg-green-800 hover:text-white text-white text-sm font-semibold tracking-wide shadow rounded cursor-pointer px-6 py-3"
					>חזור לדף הבית</g-link
				>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'דף לא נמצא',
	},
}
</script>
