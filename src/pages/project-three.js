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

const DetailsThreePage = () => (
	<PageWrapper>
		<SEO title="Project Details" />
		<Nav />
		<SectionTitle pageName="projectDetails" />
		<ProjectDetails
			pageName={ProjectData[2].pageName}
			photo={ProjectData[2].photo}
			alt={ProjectData[2].alt}
			headline={ProjectData[2].headline}
			goal={ProjectData[2].goal}
			actionOne={ProjectData[2].actionOne}
			actionTwo={ProjectData[2].actionTwo}
			measureOfSuccess={ProjectData[2].measureOfSuccess}
			website={ProjectData[2].website}
		/>
		<Footer />
	</PageWrapper>
);

export default DetailsThreePage;
