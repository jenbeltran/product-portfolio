import React from 'react';

import SEO from '../components/seo';

//Navbar
import Nav from '../components/Nav';

//About Me Section
import AboutMe from '../components/AboutMe';

//Section Titles
import SectionTitle from '../components/SectionTitle';

//Footer
import Footer from '../components/Footer';

const IndexPage = () => (
	<div>
		<SEO title="About Me" />
		<Nav />
		<AboutMe />
		<SectionTitle pageName="techTeahouse" />
		<SectionTitle pageName="projects" />

		<Footer />
	</div>
);

export default IndexPage;