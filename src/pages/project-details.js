import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PageWrapper } from '../theme/typography';

import SEO from '../components/seo';

//Navbar
import Nav from '../components/Nav';

//Section Titles
import SectionTitle from '../components/SectionTitle';

//Project Details page
import ProjectDetails from '../components/ProjectDetails';
import ProjectData from '../components/Projects/data';

//Footer
import Footer from '../components/Footer';

const DetailsPage = () => (
	<PageWrapper>
		<SEO title="Project Details" />
		<Nav />
		<SectionTitle pageName="projectDetails" />
		<ProjectDetails
			pageName={ProjectData[0].pageName}
			photo={ProjectData[0].photo}
			alt={ProjectData[0].alt}
			headline={ProjectData[0].headline}
			goal={ProjectData[0].goal}
			action={ProjectData[0].action}
			measureOfSuccess={ProjectData[0].measureOfSuccess}
		/>
		<ProjectDetails
			pageName={ProjectData[1].pageName}
			photo={ProjectData[1].photo}
			alt={ProjectData[1].alt}
			headline={ProjectData[1].headline}
			goal={ProjectData[1].goal}
			action={ProjectData[1].action}
			measureOfSuccess={ProjectData[1].measureOfSuccess}
		/>
		<ProjectDetails
			pageName={ProjectData[2].pageName}
			photo={ProjectData[2].photo}
			alt={ProjectData[2].alt}
			headline={ProjectData[2].headline}
			goal={ProjectData[2].goal}
			action={ProjectData[2].action}
			measureOfSuccess={ProjectData[2].measureOfSuccess}
		/>
		<ProjectDetails
			pageName={ProjectData[3].pageName}
			photo={ProjectData[3].photo}
			alt={ProjectData[3].alt}
			headline={ProjectData[3].headline}
			goal={ProjectData[3].goal}
			action={ProjectData[3].action}
			measureOfSuccess={ProjectData[3].measureOfSuccess}
		/>
		<ProjectDetails
			pageName={ProjectData[4].pageName}
			photo={ProjectData[4].photo}
			alt={ProjectData[4].alt}
			headline={ProjectData[4].headline}
			goal={ProjectData[4].goal}
			action={ProjectData[4].action}
			measureOfSuccess={ProjectData[4].measureOfSuccess}
		/>
		<ProjectDetails
			pageName={ProjectData[5].pageName}
			photo={ProjectData[5].photo}
			alt={ProjectData[5].alt}
			headline={ProjectData[5].headline}
			goal={ProjectData[5].goal}
			action={ProjectData[5].action}
			measureOfSuccess={ProjectData[5].measureOfSuccess}
		/>
		<Footer />
	</PageWrapper>
);

export default DetailsPage;
