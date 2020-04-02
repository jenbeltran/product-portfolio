import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PageWrapper } from '../theme/typography';

import SEO from '../components/seo';

//Navbar
import Nav from '../components/Nav';

//About Me Section
import AboutMe from '../components/AboutMe';

//Section Titles
import SectionTitle from '../components/SectionTitle';

//Tech Teahouse Problem
import TechTeahouse from '../components/TechTeahouse';

//Projects
import Projects from '../components/Projects';

//Footer
import Footer from '../components/Footer';

const IndexPage = () => (
	<PageWrapper>
		<SEO title="About Me" />

		<Nav />
		<AboutMe />
		<SectionTitle pageName="my-story" />
		<TechTeahouse />
		<SectionTitle pageName="projects" />
		<Projects />

		<Footer />
	</PageWrapper>
);

export default IndexPage;
