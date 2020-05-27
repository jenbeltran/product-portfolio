import TTHWebsite from '../../images/tth-website.png';
import Elevate from '../../images/elevate.jpg';
import DMZ from '../../images/dmz.jpg';
import TutorNow from '../../images/tutor-now.png';

const ProjectData = [
	{
		pageName         : 'TTHWebsite',
		photo            : TTHWebsite,
		alt              : 'Photo of Tech Teahouse website',
		headline         : 'Tech Teahouse Website',
		details          : 'Worked with a team of designers and developers to create and deploy the TTH website.',
		goal             :
			'Build a website to raise awareness and for potential sponsors to learn more about our community.',
		actionOne        :
			'Managed a team of designers and developers to build and launch Tech Teahouse website based on co-founders’ business requirements.',
		actionTwo        :
			'Technology stack: GatsbyJS and Styled Components, deployed using AWS S3 Bucket and Cloudfront',
		measureOfSuccess : 'Website is successfully deployed with 100% Google Lighthouse SEO score.',
		website          : 'https://www.techteahouse.com/'
	},
	{
		pageName         : 'Elevate',
		photo            : Elevate,
		alt              : 'Photo of my team at the Elevate hackathon',
		headline         : 'Elevate Fintech for Good Hackathon',
		details          :
			'Collaborated with designers and developers to build a blockchain based crowdfunding platform in 48 hours.',
		goal             :
			'Build an application that solves the problem of trust within the community fundraising space through automating transparency and crowdsourcing auditing.',
		actionOne        :
			'As part of the “FinTech for Good Challenge,” my 6-person team developed an online platform that uses blockchain technology to create more transparency in crowdfunding.',
		actionTwo        : 'Technology stack: Express and NodeJS (EJS), mock information received via TD API',
		measureOfSuccess : 'Front-end and working prototype was completed and pitched to judges.',
		website          : 'https://devpost.com/software/the-good-neighbor'
	},
	{
		pageName         : 'DMZ',
		photo            : DMZ,
		alt              : 'Photo of my team at the Fidelity Investments hackathon',
		headline         : 'Fidelity Investments DMZ Hackathon',
		details          :
			'Worked with a team of designers and developers to create an online tool to help Millenials gain confidence in investing.',
		goal             : 'Build a gamified application where users can learn basic investing terminology.',
		actionOne        :
			'Managed a team of designers and developers to build an educational and interactive application. The user joins Fidelity Frank as he learns basic investment terminology on his financial literacy journey',
		actionTwo        : 'Technology stack: ReactJS',
		measureOfSuccess : 'Front-end and working prototype was completed and pitched to judges.',
		website          : 'https://devpost.com/software/fidelity_app_two'
	},

	{
		pageName         : 'TutorNow',
		photo            : TutorNow,
		alt              : 'Photo of the Tutor Now application',
		headline         : 'Tutor Now - Capstone Course Final',
		details          : 'Created an online tool to connect tutors and students for mentoring sessions.',
		goal             : 'Build an application that connects tutors and students for online mentoring sessions.',
		actionOne        :
			'Worked in pairs to design and create the application. Students can send a ticket with the details of their mentoring request and tutors can accept the ticket.',
		actionTwo        : 'Technology stack: NextJS, Express, MySQL, NodeJs',
		measureOfSuccess : 'Completed working MVP and received 85% grade',
		website          : 'https://github.com/jenbeltran/2tr-now'
	}
];

export default ProjectData;

const ProjectSubtitles = {
	subtitleOne   : 'Project Goal',
	subtitleTwo   : 'My Process',
	subtitleThree : 'Results'
};

export { ProjectSubtitles };
