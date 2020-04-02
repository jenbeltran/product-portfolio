import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import {
	StyleNav,
	StyledNavBrand,
	StyleNavLinks,
	NavListItem,
	CheckboxInput,
	CheckboxLabel,
	MobileNavIcon,
	NavElement,
	Headline,
	Tab
} from './css';

const Nav = () => {
	return (
		<div id="navbar">
			<CheckboxLabel htmlFor="mobile-nav-icon">
				<MobileNavIcon />
			</CheckboxLabel>
			<CheckboxInput type="checkbox" id="mobile-nav-icon" name="mobile-nav-icon" />

			<StyleNav id="#nav">
				<StyledNavBrand id="icon">
					<AnchorLink to="/">
						<Headline>Jen Beltran</Headline>
					</AnchorLink>
				</StyledNavBrand>

				<NavElement>
					<StyleNavLinks>
						<NavListItem>
							<AnchorLink to="/#my-story">
								<Tab>My Story</Tab>
							</AnchorLink>
						</NavListItem>
						<NavListItem>
							<AnchorLink to="/#projects">
								<Tab>Projects</Tab>
							</AnchorLink>
						</NavListItem>
						<NavListItem>
							<AnchorLink to="/#contact">
								<Tab>Contact Me</Tab>
							</AnchorLink>
						</NavListItem>
					</StyleNavLinks>
				</NavElement>
			</StyleNav>
		</div>
	);
};

export default Nav;
