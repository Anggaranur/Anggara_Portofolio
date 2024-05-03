import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'M. ANGGARA';

export const lastName = 'NUR AKBAR';

export const description =
	'Saya adalah programmer profesional yang siap untuk bergabung dengan Anda, guna menciptakan dan mengembangkan website dan software berkualitas untuk memenuhi kebutuhan bisnis/perusahaan';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Anggaranur' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/m-anggara-nur-akbar-74aa57287/'
	},
	{
		platform: Platform.Instagram,
		link: 'https://www.instagram.com/m_anggara_n_a/'
	},
	{
		platform: Platform.Whatsapp,
		link: 'wa.me/6281574741772'
	},
	{
		platform: Platform.Email,
		link: 'm.anggaranurakbar@gmail.com'
	},
];

export const skills = getSkills('js', 'css', 'html', 'vuejs', 'tailwind', 'php' , 'python' , 'django' , 'flutter');
