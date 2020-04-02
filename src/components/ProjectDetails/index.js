import React from 'react';
import { CardSection, Wrapper } from './css';
import Project from '../Projects/data';
import { ProjectSubtitles } from '../Projects/data';

const CardImage = (props) => {
	const matchPageName = (Project) => Project.pageName === props.pageName;
	const projectData = Project.find(matchPageName);

	const { pageName, photo, headline, goal, action, measureOfSuccess } = projectData;

	const { subtitleOne, subtitleTwo, subtitleThree } = ProjectSubtitles;

	return (
		<CardSection pageName={pageName} id={pageName} photo={photo}>
			<Wrapper>
				<h2>{headline}</h2>
				<p>{subtitleOne}</p>
				<p>{goal}</p>
				<p>{subtitleTwo}</p>
				<p>{action}</p>
				<p>{subtitleThree}</p>
				<p>{measureOfSuccess}</p>
			</Wrapper>
		</CardSection>
	);
};

export default CardImage;
