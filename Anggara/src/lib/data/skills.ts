import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript adalah bahasa pemrograman yang sering digunakan untuk mengembangkan aplikasi web interaktif. Dikenal karena kemampuannya yang serbaguna, JavaScript dapat digunakan untuk membuat efek animasi, interaksi pengguna, validasi formulir, dan banyak lagi. Dengan ekosistem yang besar dan terus berkembang, JavaScript menjadi salah satu bahasa pemrograman yang paling populer di dunia saat ini.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description:
			'PHP adalah bahasa pemrograman sisi server yang digunakan secara luas untuk pengembangan web. Dikenal karena kemampuannya dalam menghasilkan konten dinamis, PHP memungkinkan pengguna untuk membuat situs web yang interaktif dan responsif. Dengan sintaksis yang mirip dengan C dan Perl, PHP dapat diintegrasikan dengan HTML dengan mudah, membuatnya menjadi pilihan populer di antara para pengembang web. Dukungan luas dari komunitas dan kerangka kerja yang kuat seperti Laravel dan Symfony menjadikan PHP sebagai salah satu bahasa pemrograman yang paling banyak digunakan di dunia web saat ini.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'green',
		description:
			'Python adalah bahasa pemrograman tingkat tinggi yang dikenal karena sintaksisnya yang mudah dipahami dan bersifat ekspresif. Digunakan untuk berbagai keperluan, mulai dari pengembangan web dan pemrosesan data hingga kecerdasan buatan dan pengembangan permainan, Python memiliki ekosistem yang kuat dan komunitas yang besar. Fleksibilitasnya memungkinkan pengguna untuk menulis kode yang lebih bersih dan lebih efisien dalam waktu singkat. Dengan kepopulerannya yang terus meningkat, Python menjadi salah satu bahasa pemrograman paling diminati di dunia saat ini.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'blue',
		description:
			'Dart adalah bahasa pemrograman yang dikembangkan oleh Google, dikenal karena kemampuannya dalam mengembangkan aplikasi web dan mobile menggunakan kerangka kerja Flutter. Dart dirancang untuk menjadi mudah dipahami, efisien, dan memiliki sintaksis yang bersih. Selain digunakan dalam pengembangan Flutter, Dart juga dapat digunakan untuk pengembangan server-side dan pengembangan aplikasi web melalui kerangka kerja seperti AngularDart. Dengan fitur seperti tipe statis opsional, sistem manajemen memori yang otomatis, dan dukungan untuk asynchronous programming, Dart menjadi pilihan yang kuat bagi pengembang yang ingin membuat aplikasi yang responsif dan dapat diandalkan.',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS (Cascading Style Sheets) adalah bahasa pemrograman yang digunakan untuk mengatur tampilan dan gaya elemen HTML pada halaman web. Dengan CSS, pengembang dapat mengontrol warna, font, tata letak, dan berbagai properti visual lainnya untuk membuat desain yang menarik dan responsif. CSS bekerja secara terpisah dari HTML dan JavaScript, memungkinkan pengembang untuk memisahkan struktur, gaya, dan perilaku dari halaman web, sehingga memudahkan dalam pemeliharaan dan pengembangan. Dengan penggunaan yang luas di seluruh web, CSS menjadi keterampilan penting bagi pengembang web untuk menghasilkan tampilan yang menarik dan konsisten.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (Hypertext Markup Language) adalah bahasa markup yang digunakan untuk membuat struktur dan konten halaman web. Dengan HTML, pengembang dapat mendefinisikan elemen-elemen seperti teks, gambar, tautan, dan formulir, serta mengatur hierarki dan tata letak halaman. HTML menggunakan tag-tag yang dibungkus dalam tanda kurung sudut (<>) untuk menandai elemen-elemen tersebut. Sebagai bahasa dasar dari web, HTML berperan penting dalam membangun dasar dari sebuah situs web, sementara CSS digunakan untuk mengatur tampilan dan gaya, dan JavaScript untuk menambahkan interaktivitas. Dengan pemahaman tentang HTML, pengembang dapat membuat halaman web yang terstruktur dan mudah diakses oleh pengguna di berbagai perangkat dan platform.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'green',
		description:
			'Vue.js adalah sebuah kerangka kerja JavaScript yang bersifat progresif untuk membangun antarmuka pengguna yang interaktif. Dirancang dengan fokus pada peningkatan secara bertahap, Vue.js memungkinkan pengembang untuk mengintegrasikan fungsionalitas UI secara bertahap ke dalam proyek yang ada atau membangun aplikasi dari awal dengan cepat. Dengan sintaksis yang intuitif dan dokumentasi yang komprehensif, Vue.js menjadi pilihan populer bagi pengembang untuk membangun aplikasi web yang responsif dan skalabel. Keunggulan Vue.js termasuk kemampuan untuk menyederhanakan pengembangan komponen, dukungan untuk reactive data binding, dan fleksibilitas dalam penggunaan bersama dengan kerangka kerja atau perpustakaan lain.',
		logo: Assets.VueJs,
		name: 'Vue Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: 'Tailwind CSS adalah sebuah kerangka kerja CSS yang memungkinkan pengembang untuk membangun desain web dengan cepat menggunakan kelas-kelas bawaan yang sudah ditentukan sebelumnya. Alih-alih menulis CSS kustom, pengembang dapat menggunakan kelas-kelas yang disediakan oleh Tailwind untuk mengatur tampilan dan perilaku elemen-elemen UI. Tailwind mengikuti konsep utility-first CSS, yang berarti penggunaannya didasarkan pada penyesuaian kelas-kelas utilitas yang ada, seperti "text-center", "bg-blue-500", atau "rounded-lg", untuk membangun tampilan yang diinginkan. Dengan cara ini, Tailwind memungkinkan pengembang untuk membuat desain yang konsisten dan mudah dipelihara tanpa perlu menulis banyak kode CSS kustom.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: 'Flutter adalah kerangka kerja pengembangan aplikasi mobile open-source yang dikembangkan oleh Google. Dikenal karena kemampuannya dalam membangun antarmuka pengguna yang kaya dan responsif dengan cepat, Flutter menggunakan bahasa pemrograman Dart yang mudah dipahami. Dengan satu basis kode, Flutter memungkinkan pengembang untuk membuat aplikasi yang dapat berjalan di platform iOS, Android, dan bahkan web. Fitur-fitur seperti widget kustom, hot reload, dan dukungan untuk animasi membuat Flutter menjadi pilihan populer bagi pengembang untuk membuat aplikasi mobile yang indah dan berkinerja tinggi.',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'cyan',
		description: 'Django adalah kerangka kerja aplikasi web yang ditulis dalam bahasa pemrograman Python. Dirancang untuk memudahkan pengembangan aplikasi web kompleks dengan cepat, Django menyediakan seperangkat alat yang kuat dan terstruktur untuk mengelola berbagai aspek pengembangan web, termasuk manajemen basis data, routing URL, manajemen sesi, dan otentikasi pengguna. Django juga memiliki fitur bawaan yang kuat, seperti sistem admin yang dapat disesuaikan, sistem routing URL yang ekstensif, dan dukungan untuk berbagai basis data populer. Dengan dokumentasi yang kuat dan komunitas yang besar, Django menjadi salah satu kerangka kerja aplikasi web yang paling populer dan terpercaya di dunia Python.',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
