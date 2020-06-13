<template>
	<Layout>
		<div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
			<div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-right">
				<div class="leading-tight">דורית שכטר</div>
				<div class="text-blue-700 leading-tight">ייעוץ חיתום ותביעות ביטוח חיים, בריאות וסיעוד</div>
			</div>
			<div class="mt-8 sm:mt-0 sm:w-6/12">
				<g-image
					src="../assets/images/profile.jpg"
					alt="hero"
					class="mx-auto sm:mx-0"
					width="349"
					height="524"
				/>
			</div>
		</div>
		<!-- end hero -->

		<div class="container-inner mx-auto mb-12">
			<p class="text-lg sm:text-xl mb-6">
				יועצת לענייני חיתום ותביעות בתחום ביטוח חיים, בריאות וסיעוד עתירת נסיון וידע של כ-30 שנה בנושאים אלו.
				חברת הוועד המנהל של אגודת החתמים ומיישבי התביעות.
			</p>
			<p class="text-lg sm:text-xl">
				מנהלת מחלקת חיתום במשך כ20 שנה בחברות ביטוח שונות מנהלת מחלקת תביעות במשך כ7 שנים. שותפה לכתיבת תנאים
				כלליים,קביעת מדיניות החברה, ביצוע הדרכות מקצועיות לעובדים וסוכנים וסיוע מקצועי תדיר למחלקת התביעות.
			</p>

			<!-- TODO: images -->
			<!-- <div class="flex justify-between items-center py-6">
				<div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
					<g-image src="../assets/images/profile.jpg" alt="browser" />
				</div>
				<div class="w-1/2 px-8 hidden sm:flex justify-end">
					<g-image src="../assets/images/profile.jpg" alt="mobile" />
				</div>
			</div> -->
		</div>

		<div class="overflow-x-hidden">
			<div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b pb-16 relative">
				<!-- margin is more appropriate here than padding, but we need the padding for the #anchor spacing when scrolling -->
				<h2 class="font-bold mb-6 pt-16" id="projects">שירותים</h2>

				<div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg);">
					<svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
				</div>

				<ul class="text-lg sm:text-xl space-y-6">
					<li class="checkmark">
						<div>הערכות ראשוניות</div>
						<div class="text-lg text-gray-600">
							כתיבת הערכה ראשונית בתיקי תביעה
						</div>
					</li>
					<li class="checkmark">
						<div>חוות דעת</div>
						<div class="text-lg text-gray-600">
							כתיבת חוות דעת מקצועית לשם הגשה לחברות הביטוח או לבית המשפט
						</div>
					</li>
					<li class="checkmark">
						<div>ייעוץ לתובעים</div>
						<div class="text-lg text-gray-600">
							מתן ייעוץ בתיקים משפטיים
						</div>
					</li>
					<li class="checkmark">
						<div>ייעוץ לסוכני ביטוח</div>
						<div class="text-lg text-gray-600">
							ייעוץ הן בתחום החיתום והן בתחום התביעות
						</div>
					</li>
				</ul>
			</div>
			<!-- end projects -->
		</div>

		<div class="overflow-x-hidden border-gray-200 border-b">
			<div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
				<!-- margin is more appropriate here than padding, but we need the padding for the #anchor spacing when scrolling -->
				<h2 class="font-bold mb-6 pt-16" id="about">אודות</h2>

				<div class="absolute left-0" style="top: 50px; transform: translateX(-100%);">
					<svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
				</div>

				<div class="flex flex-col sm:flex-row justify-between items-center">
					<div class="flex-1 text-lg sm:text-xl ml-6">
						יועצת לענייני חיתום ותביעות בתחום ביטוח חיים, בריאות וסיעוד עתירת נסיון וידע של כ-30 שנה בנושאים
						אלו. חברת הוועד המנהל של אגודת החתמים ומיישבי התביעות.
					</div>
				</div>
			</div>
			<!-- end get-to-know me -->
		</div>

		<div class="overflow-x-hidden">
			<div class="contact-me bg-background-secondary">
				<div class="container-inner mx-auto text-xl pb-4 relative">
					<!-- margin is more appropriate here than padding, but we need the padding for the #anchor spacing when scrolling -->
					<h2 class="font-bold mb-6 pt-16" id="contact">יצירת קשר</h2>

					<div class="absolute right-0 top-0 mt-16" style="transform: translate(100%) rotate(180deg);">
						<svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
					</div>

					<p class="mb-12">
						ניתן ליצור קשר דרך הטופס או במייל.
					</p>
					<div class="text-lg sm:text-lg mb-16">
						<form action="#" netlify class="mb-12" netlify-honeypot="bot-field">
							<p class="hidden">
								<label>Don’t fill this out if you're human: <input name="bot-field" /></label>
							</p>
							<div class="flex flex-wrap mb-6 -mx-4">
								<div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
									<label class="block mb-2 text-copy-primary" for="name">
										שם
									</label>

									<input
										type="text"
										name="name"
										id="name"
										placeholder="ישראל ישראלי"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
										required
									/>
								</div>

								<div class="w-full px-4 md:w-1/2">
									<label class="block text-copy-primary mb-2" for="email">
										דואר אלקטרוני
									</label>

									<input
										type="email"
										name="email"
										id="email"
										placeholder="email@example.com"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
									/>
								</div>
							</div>
							<div class="flex flex-wrap mb-6 -mx-4">
								<div class="w-full px-4 md:w-1/2">
									<label class="block text-copy-primary mb-2" for="subject">
										נושא פנייה
									</label>

									<input
										type="subject"
										name="subject"
										id="subject"
										placeholder="חוות דעת מקצועית"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
										required
									/>
								</div>
								<div class="w-full px-4 md:w-1/2">
									<label class="block text-copy-primary mb-2" for="tel">
										טלפון
									</label>

									<input
										type="tel"
										name="tel"
										id="tel"
										placeholder="054-123-4567"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
									/>
								</div>
							</div>
							<div class="w-full mb-12">
								<label class="block text-copy-primary mb-2" for="message">
									הודעה
								</label>

								<textarea
									id="message"
									rows="5"
									name="message"
									class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-blue-700 mb-2 px-4 py-4"
									placeholder="ברצוני לקבל שירות בנושא..."
								></textarea>
							</div>

							<div class="flex justify-end w-full">
								<input
									type="submit"
									value="שליחה"
									class="block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
								/>
							</div>
						</form>
						<div class="sm:w-8/12 flex-col mb-12 space-y-2">
							<div class="flex justify-between flex-wrap">
								<span class="ml-8 font-medium">דואר אלקטרוני</span>
								<a href="mailto:dorit@doritshechter.com">dorit@doritshechter.com</a>
							</div>
							<div class="flex justify-between flex-wrap">
								<span class="ml-8 font-medium">טלפון נייד</span>
								<a href="tel:0545999044">0545-999-044</a>
							</div>
						</div>
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
		title: 'דף הבית',
	},
	components: { Dots },
}
</script>

<style lang="scss" scoped>
.checkmark {
	background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2229%22%20height%3D%2229%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4.427%2024.93A14.5%2014.5%200%201%201%2024.93%204.427c5.495%205.69%205.416%2014.733-.177%2020.326s-14.637%205.672-20.326.177z%22%20fill%3D%22%23008ab8%22/%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.234%2012.803l3.67%203.253L20.766%2010%2023%2012l-9.096%208L8%2014.789l2.234-2z%22/%3E%3C/svg%3E');
	background-repeat: no-repeat;
	@apply pl-10;
}
</style>
