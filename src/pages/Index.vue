<template>
	<Layout>
		<div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
			<div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-right">
				<div class="leading-tight">דורית שכטר</div>
				<div class="text-green-700 leading-tight">ייעוץ חיתום ותביעות ביטוח חיים ,בריאות וסיעוד</div>
			</div>
			<div class="mt-8 sm:mt-0">
				<g-image src="../assets/images/profile.jpg" alt="hero" class="mx-auto sm:mx-0" />
			</div>
		</div>
		<!-- end hero -->

		<div class="container-inner mx-auto">
			<p class="text-lg sm:text-xl">
				This gridsome theme was forked from my <a href="https://andremadarang.com">personal website</a>. I added
				more features and decided to release it as an open source project. Check it out on
				<a href="https://github.com/drehimself/gridsome-portfolio-starter">GitHub</a> or check out the
				<a href="https://www.youtube.com/watch?v=uHo6o1TNQeE">screencast I did</a>. Feel free to use it for your
				own site or projects! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, repellat.
				Dolores iure, quas perspiciatis rerum quaerat atque eum repellat autem.
			</p>

			<div class="flex justify-between items-center py-6">
				<div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
					<g-image src="../assets/images/profile.jpg" alt="browser" />
				</div>
				<div class="w-1/2 px-8 hidden sm:flex justify-end">
					<g-image src="../assets/images/profile.jpg" alt="mobile" />
				</div>
			</div>
		</div>

		<div class="overflow-x-hidden">
			<div
				class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
			>
				<h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

				<div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg);">
					<svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
				</div>

				<ul class="text-lg sm:text-xl space-y-6">
					<li class="checkmark">
						<div>Project One</div>
						<div class="text-lg text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo
							exercitationem a, eius non culpa itaque!
						</div>
					</li>
					<li class="checkmark">
						<div>Project Two</div>
						<div class="text-lg text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo
							exercitationem a, eius non culpa itaque!
						</div>
					</li>
					<li class="checkmark">
						<div>Project Three</div>
						<div class="text-lg text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo
							exercitationem a, eius non culpa itaque!
						</div>
					</li>
					<li class="checkmark">
						<div>Project Four</div>
						<div class="text-lg text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo
							exercitationem a, eius non culpa itaque!
						</div>
					</li>
				</ul>
			</div>
			<!-- end projects -->
		</div>

		<div class="overflow-x-hidden border-gray-200 border-b">
			<div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
				<h2 class="font-bold mb-6" id="about">Get to know me:</h2>

				<div class="absolute left-0" style="top: 50px; transform: translateX(-100%);">
					<svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
				</div>

				<div class="flex flex-col sm:flex-row justify-between items-center mb-16">
					<div class="flex-1 text-lg sm:text-xl ml-6">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias
						iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.
					</div>
				</div>
			</div>
			<!-- end get-to-know me -->
		</div>

		<div class="overflow-x-hidden">
			<div class="contact-me bg-background-secondary pt-16">
				<div class="container-inner mx-auto text-xl pb-4 relative">
					<h2 class="font-bold mb-6" id="contact">Contact me:</h2>

					<div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg);">
						<svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
					</div>

					<p class="mb-12">
						Static sites cannot submit forms on their own. However, services like
						<a href="https://www.netlify.com/docs/form-handling">Netlify Forms</a> or
						<a href="https://formspree.io">FormSpree</a> can help you do this without a backend.
					</p>

					<div class="text-lg sm:text-lg mb-16">
						<form action="#" class="mb-12">
							<div class="flex flex-wrap mb-6 -mx-4">
								<div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
									<label class="block mb-2 text-copy-primary" for="name">
										Name
									</label>

									<input
										type="text"
										name="name"
										id="name"
										placeholder="Jon Snow"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
										required
									/>
								</div>

								<div class="w-full px-4 md:w-1/2">
									<label class="block text-copy-primary mb-2" for="email">
										Email Address
									</label>

									<input
										type="email"
										name="email"
										id="email"
										placeholder="email@example.com"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
										required
									/>
								</div>
							</div>

							<div class="w-full mb-12">
								<label class="block text-copy-primary mb-2" for="message">
									Message
								</label>

								<textarea
									id="message"
									rows="5"
									name="message"
									class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
									placeholder="Enter your message here."
									required
								></textarea>
							</div>

							<div class="flex justify-end w-full">
								<input
									type="submit"
									value="Submit"
									class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<!-- end contact-me -->
		</div>
		<div class="container-inner mx-auto -mt-32 pb-4 overflow-x-hidden">
			<Dots class="mx-auto" />
		</div>
	</Layout>
</template>

<script>
import Dots from '../assets/images/dots.svg'
export default {
	metaInfo: {
		title: 'Home',
	},
	components: { Dots },
}
</script>

<style lang="scss" scoped>
.checkmark {
	background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2229%22%20height%3D%2229%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4.427%2024.93A14.5%2014.5%200%201%201%2024.93%204.427c5.495%205.69%205.416%2014.733-.177%2020.326s-14.637%205.672-20.326.177z%22%20fill%3D%22%232E855A%22/%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.234%2012.803l3.67%203.253L20.766%2010%2023%2012l-9.096%208L8%2014.789l2.234-2z%22/%3E%3C/svg%3E');
	background-repeat: no-repeat;
	@apply pl-10;
}
</style>
