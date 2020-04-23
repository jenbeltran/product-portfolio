import React from 'react';
import { CardSection, Wrapper, CardImg, Headline, Subtitle } from './css';
import { Link } from 'gatsby';
import { Button } from '../../theme/typography';
import Project from '../Projects/data';
import { ProjectSubtitles } from '../Projects/data';

const CardImage = (props) => {
	const matchPageName = (Project) => Project.pageName === props.pageName;
	const projectData = Project.find(matchPageName);

	const { pageName, photo, alt, headline, goal, action, measureOfSuccess } = projectData;

	const { subtitleOne, subtitleTwo, subtitleThree } = ProjectSubtitles;

	return (
		<CardSection pageName={pageName} id={pageName} photo={photo}>
			<CardImg src={photo} alt={alt} />
			<Wrapper>
				<Headline>{headline}</Headline>
				<Subtitle>{subtitleOne}</Subtitle>
				<p>{goal}</p>
				<Subtitle>{subtitleTwo}</Subtitle>
				<p>{action}</p>
				<Subtitle>{subtitleThree}</Subtitle>
				<p>{measureOfSuccess}</p>
				<Link to={`/`}>
					<Button>Return to Home Page</Button>
				</Link>
			</Wrapper>
		</CardSection>
	);
};

export default CardImage;
