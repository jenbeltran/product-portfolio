import React from 'react';
import { StoryInfo } from './data';
import { StorySection, Storyh3, Storydiv, Storyp } from './css.js';

const OurStory = () => {
	const { headline, point1, headline2, point2 } = StoryInfo;
	return (
		<StorySection>
			<Storydiv>
				<Storyh3>{headline}</Storyh3>
			</Storydiv>
			<Storyp>{point1}</Storyp>

			<Storydiv>
				<Storyh3>{headline2}</Storyh3>
			</Storydiv>
			<Storyp>{point2}</Storyp>
		</StorySection>
	);
};

export default OurStory;
