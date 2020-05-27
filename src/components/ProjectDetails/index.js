import React from 'react';
import { CardSection, Wrapper, CardImg, Headline, Subtitle } from './css';
import { Button } from '../../theme/typography';
import Project from '../Projects/data';
import { ProjectSubtitles } from '../Projects/data';

const CardImage = (props) => {
	const matchPageName = (Project) => Project.pageName === props.pageName;
	const projectData = Project.find(matchPageName);

	const { pageName, photo, alt, headline, goal, actionOne, actionTwo, measureOfSuccess, website } = projectData;

	const { subtitleOne, subtitleTwo, subtitleThree } = ProjectSubtitles;

	return (
		<CardSection pageName={pageName} id={pageName} photo={photo}>
			<CardImg src={photo} alt={alt} />
			<Wrapper>
				<Headline>{headline}</Headline>
				<Subtitle>{subtitleOne}</Subtitle>
				<p>{goal}</p>
				<Subtitle>{subtitleTwo}</Subtitle>
				<ul>
					<li>{actionOne}</li>
					<li>{actionTwo}</li>
				</ul>

				<Subtitle>{subtitleThree}</Subtitle>
				<p>{measureOfSuccess}</p>

				<a href={website} target="_blank" rel="noopener noreferrer">
					<Button>Visit My Project</Button>
				</a>
			</Wrapper>
		</CardSection>
	);
};

export default CardImage;
