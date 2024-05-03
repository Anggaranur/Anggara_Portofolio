import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'SMK Bhakti Mulia Pare Jurusan Software Engineer',
		description: 'SMK Bhakti Mulia Pare: Menjadi Software Engineer. Tempat saya memperoleh keterampilan teknis dalam pengembangan perangkat lunak dan sistem informasi. Kurikulum praktis dan terkini mempersiapkan saya untuk dunia kerja atau studi lanjutan.',
		location: 'Indonesia',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2021, 6, 1), to: new Date(2024, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Document Language HTML & CSS', 'Tailwind', 'JavaScript', 'Vue.js', 'PHP', 'Python', 'Django']
	},
	{
		degree: 'Bootcamp Dicoding Indonesia - Software Engineer',
		description: 'Lulusan Bootcamp Software Engineer Dicoding Indonesia, dilatih intensif dalam pengembangan perangkat lunak dan pemrograman. Siap untuk menciptakan solusi teknologi inovatif.',
		location: 'Indonesia',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2022, 0, 1), to: new Date(2024, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Document Language HTML & CSS', 'JavaScript', 'Python', 'Bootstrap']
	},
	{
		degree: 'Bootcamp Great Learning - Front-end & Web Developer',
		description: 'Lulusan Bootcamp Great Learning untuk Front-end & Web Developer. Dilatih untuk menciptakan pengalaman web yang menarik dan responsif. Siap untuk tantangan profesional.',
		location: 'Indonesia',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2022, 0, 1), to: new Date(2024, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Document Language HTML & CSS', 'JavaScript', 'Python', 'Bootstrap' , 'PHP' , 'Tailwind' , 'Vue.js' , 'Database']
	}
	
];

export const title = 'Education';
