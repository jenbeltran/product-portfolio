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

const DetailsTwoPage = () => (
	<PageWrapper>
		<SEO title="Project Details" />
		<Nav />
		<SectionTitle pageName="projectDetails" />
		<ProjectDetails
			pageName={ProjectData[1].pageName}
			photo={ProjectData[1].photo}
			alt={ProjectData[1].alt}
			headline={ProjectData[1].headline}
			goal={ProjectData[1].goal}
			actionOne={ProjectData[1].actionOne}
			actionTwo={ProjectData[1].actionTwo}
			measureOfSuccess={ProjectData[1].measureOfSuccess}
			website={ProjectData[1].website}
		/>
		<Footer />
	</PageWrapper>
);

export default DetailsTwoPage;
