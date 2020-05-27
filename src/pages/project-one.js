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

const DetailsOnePage = () => (
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
			actionOne={ProjectData[0].actionOne}
			actionTwo={ProjectData[0].actionTwo}
			measureOfSuccess={ProjectData[0].measureOfSuccess}
			website={ProjectData[0].website}
		/>
		<Footer />
	</PageWrapper>
);

export default DetailsOnePage;
