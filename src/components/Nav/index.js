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
					<AnchorLink to="/#navbar" className="stripped" stripHash>
						<Headline>Jen Beltran</Headline>
					</AnchorLink>
				</StyledNavBrand>

				<NavElement>
					<StyleNavLinks>
						<NavListItem>
							<AnchorLink to="/#projects" className="stripped" stripHash>
								<Tab>Projects</Tab>
							</AnchorLink>
						</NavListItem>

						<NavListItem>
							<AnchorLink to="/#hobbies" className="stripped" stripHash>
								<Tab>Hobbies</Tab>
							</AnchorLink>
						</NavListItem>
						<NavListItem>
							<AnchorLink to="/#contact" className="stripped" stripHash>
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
