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
			pageName={ProjectData[3].pageName}
			photo={ProjectData[3].photo}
			alt={ProjectData[3].alt}
			headline={ProjectData[3].headline}
			goal={ProjectData[3].goal}
			actionOne={ProjectData[3].actionOne}
			actionTwo={ProjectData[3].actionTwo}
			measureOfSuccess={ProjectData[3].measureOfSuccess}
			website={ProjectData[3].website}
		/>
		<Footer />
	</PageWrapper>
);

export default DetailsThreePage;
