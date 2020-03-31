import React from 'react';
import { StoryInfo } from './data';
import { StorySection, Storyh1, Storydiv, Storyp } from './css.js';

const OurStory = () => {
	const { headline, point1, headline2, point2 } = StoryInfo;
	return (
		<StorySection>
			<Storydiv>
				<Storyh1>{headline}</Storyh1>
			</Storydiv>
			<Storyp>{point1}</Storyp>

			<Storydiv>
				<Storyh1>{headline2}</Storyh1>
			</Storydiv>
			<Storyp>{point2}</Storyp>
		</StorySection>
	);
};

export default OurStory;
