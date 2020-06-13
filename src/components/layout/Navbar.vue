<template>
	<header class="border-t-14 border-green-700">
		<nav class="container mx-auto flex flex-wrap flex-row-reverse justify-between items-center py-8">
			<div>
				<g-link to="/"><g-image src="../../assets/images/logo.png" class="w-20" alt="logo" /></g-link>
			</div>
			<div class="block lg:hidden">
				<button
					@click="toggle"
					class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
				>
					<svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
					</svg>
				</button>
			</div>
			<ul
				class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 lg:space-x-reverse space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
				:class="isOpen ? 'block' : 'hidden'"
			>
				<li>
					<a
						v-if="$route.path === '/'"
						href="/#contact"
						v-scroll-to="'#contact'"
						class="text-copy-primary hover:text-gray-600"
						>צור קשר</a
					>
					<g-link v-else to="/#contact" class="text-copy-primary hover:text-gray-600">צור קשר</g-link>
				</li>
				<li>
					<a
						v-if="$route.path === '/'"
						href="/#about"
						v-scroll-to="'#about'"
						class="text-copy-primary hover:text-gray-600"
						>אודות</a
					>
					<g-link v-else to="/#about" class="text-copy-primary hover:text-gray-600">אודות</g-link>
				</li>
				<li>
					<a
						v-if="$route.path === '/'"
						href="/#projects"
						v-scroll-to="'#projects'"
						class="text-copy-primary hover:text-gray-600"
						>שירותים</a
					>
					<g-link v-else to="/#projects" class="text-copy-primary hover:text-gray-600">שירותים</g-link>
				</li>
				<li>
					<g-link to="/blog" class="text-copy-primary hover:text-gray-600">מאמרים</g-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			isOpen: false,
		}
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen
		},
	},
}
</script>

<style lang="scss" scoped>
nav .active {
	font-weight: bold;
	@apply border-black border-b;
}
</style>
