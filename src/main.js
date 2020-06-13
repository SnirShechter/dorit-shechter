import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import '~/styles/index.scss'

export default function (Vue, { head }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)

	Vue.use(VueScrollTo, {
		duration: 500,
		easing: 'ease',
	})

	head.htmlAttrs = { lang: 'he-IL', dir: 'rtl' }

	head.meta.push({
		name: 'keywords',
		content: `Dorit Shechter,דורית שכטר,ייעוץ,חיתום,תביעות ביטוח חיים,תביעות בריאות,תביעות סיעוד,ביטוח,חיתום,ביטוח חיים,יועצת`,
	})

	head.meta.push({
		name: 'description',
		content: `יועצת לענייני חיתום ותביעות בתחום ביטוח חיים, בריאות וסיעוד עתירת נסיון וידע של כ-30 שנה בנושאים אלו.
		חברת הוועד המנהל של אגודת החתמים ומיישבי התביעות.
		
		מנהלת מחלקת חיתום במשך כ20 שנה בחברות ביטוח שונות מנהלת מחלקת תביעות במשך כ7 שנים. שותפה לכתיבת תנאים
		כלליים,קביעת מדיניות החברה, ביצוע הדרכות מקצועיות לעובדים וסוכנים וסיוע מקצועי תדיר למחלקת התביעות.`,
	})

	head.meta.push({
		name: 'author',
		content: 'Dorit Shechter - דורית שכטר',
	})
}
