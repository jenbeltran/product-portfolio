import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PageWrapper } from '../theme/typography';

import SEO from '../components/seo';

//Navbar
import Nav from '../components/Nav';

//About Me Section
import AboutMe from '../components/AboutMe';

//Footer
import Footer from '../components/Footer';

const IndexPage = () => (
	<PageWrapper>
		<SEO title="About Me" />
		<Nav />
		<AboutMe />
		<Footer />
	</PageWrapper>
);

export default IndexPage;
