<template>
	<footer class="bg-blue-700 text-white">
		<div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
			<div class="mb-8 lg:mb-0">
				<div>
					<a href="/sitemap.xml" class="text-white hover:text-gray-400 font-normal">מפת אתר</a>
				</div>
			</div>
			<ul class="flex items-center space-x-8 space-x-reverse">
				<li>
					<a href="mailto:dorit@doritshechter.com" class="text-white hover:text-gray-400">
						<svg width="25" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.5 0h20A2.5 2.5 0 0 1 25 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-20A2.5 2.5 0 0 1 0 17.5v-15C0 1.125 1.125 0 2.5 0zm20 4.225V2.5h-20v1.725l10 5 10-5zm0 2.8l-9.438 4.713a1.25 1.25 0 0 1-1.124 0L2.5 7.025V17.5h20V7.025z"
								fill-rule="nonzero"
							/>
						</svg>
					</a>
				</li>
				<li>
					<a href="tel:0545999044" class="text-white hover:text-gray-400">
						<svg
							viewBox="0 0 500 500"
							width="25"
							height="23"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M128,21q40,75,53,91.5q10,15.5-2,27.5c-10,13-38,32-45,40c-10,9-12,15-3,32q54,105,158,156c18,10,20,5,32-5c8-8,20-27,35-41c10-11,20-12,32-3q14,11,88,51c9,5,11,8,9,27q-7,40-22,51q-67,53-133,29c-180-55-286-195-315-336q-4-62,36-105q10-13,30-17c35-11,42-6,47,2z"
								fill-rule="nonzero"
							></path>
						</svg>
					</a>
				</li>

				<li>
					<a
						href="https://www.linkedin.com/in/dorit-shechter-866573190"
						target="_blank"
						class="text-white hover:text-gray-400"
					>
						<svg
							viewBox="0 50 512 512"
							height="25"
							width="25"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="nonzero"
								d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'AppFooter',
}
</script>
