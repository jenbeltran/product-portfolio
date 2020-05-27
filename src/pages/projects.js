import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PageWrapper } from '../theme/typography';

import SEO from '../components/seo';

//Navbar
import Nav from '../components/Nav';

//Section Titles
import SectionTitle from '../components/SectionTitle';

//Projects
import Projects from '../components/Projects';

//Footer
import Footer from '../components/Footer';

const ProjectsPage = () => (
	<PageWrapper>
		<SEO title="Projects" />
		<Nav />
		<SectionTitle pageName="projects" />
		<Projects />
		<Footer />
	</PageWrapper>
);

export default ProjectsPage;
