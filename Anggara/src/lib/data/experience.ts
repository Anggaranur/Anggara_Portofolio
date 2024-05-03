import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Full-stack',
		company: 'Self-employed',
		description: 'Menciptakan website dan software berkualitas',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('html', 'css', 'tailwind', 'js' , 'vuejs' , 'php' , 'python' , 'django' , 'flutter'),
		name: 'Full-stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Menciptakan website dan software berkualitas'
	},
	{
		slug: 'Programmer',
		company: 'Language Center Pare (LC)',
		description: 'Sebagai programmer yang magang di Language Center Pare (LC), saya berkontribusi dalam pengembangan solusi teknologi untuk mendukung pengajaran bahasa.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Jl. Langkat No.88, Singgahan, Pelem, Kec. Pare, Kabupaten Kediri, Jawa Timur 64213',
		period: { from: new Date() },
		skills: getSkills('html', 'css', 'js', 'python', 'vuejs', 'django'),
		name: 'Programmer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Sebagai programmer yang magang di Language Center Pare (LC), saya berkontribusi dalam pengembangan solusi teknologi untuk mendukung pengajaran bahasa.'
	},
	{
		slug: 'Software Tester',
		company: 'Language Center Pare (LC)',
		description: 'Menguji software dan website berkualitas untuk memastikan fungsionalitas dan memenuhi standar perusahaan',
		contract: ContractType.Freelance,
		type: 'Software Development & Tester',
		location: 'Jl. Langkat No.88, Singgahan, Pelem, Kec. Pare, Kabupaten Kediri, Jawa Timur 64213',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('api', 'QA', 'debugging' , 'maintenance'),
		name: 'Software Tester',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Menguji software dan website berkualitas untuk memastikan fungsionalitas dan memenuhi standar perusahaan'
	}
];

export const title = 'Experience';
