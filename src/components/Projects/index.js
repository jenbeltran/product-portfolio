import React from 'react';
import ProjectData from './data';
import { Container, Card, CardImg, CardText, CardDeck, CardBody } from 'reactstrap';
import { CardRow, CardTitle } from './css';
import { Button } from '../../theme/typography';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Projects = (props) => {
	return (
		<Container>
			<CardRow>
				<CardDeck>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[0].photo} alt={ProjectData[0].alt} />
						<CardBody>
							<CardTitle>{ProjectData[0].headline}</CardTitle>
							<CardText>{ProjectData[0].details}</CardText>
							<AnchorLink to="/project-details#project1">
								<Button>See More</Button>
							</AnchorLink>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[1].photo} alt={ProjectData[1].alt} />
						<CardBody>
							<CardTitle>{ProjectData[1].headline}</CardTitle>
							<CardText>{ProjectData[1].details}</CardText>
							<AnchorLink to="/project-details#project2">
								<Button>See More</Button>
							</AnchorLink>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[2].photo} alt={ProjectData[2].alt} />
						<CardBody>
							<CardTitle>{ProjectData[2].headline}</CardTitle>
							<CardText>{ProjectData[2].details}</CardText>
							<AnchorLink to="/project-details#project3">
								<Button>See More</Button>
							</AnchorLink>
						</CardBody>
					</Card>
				</CardDeck>
			</CardRow>
			<CardRow>
				<CardDeck>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[3].photo} alt={ProjectData[3].alt} />
						<CardBody>
							<CardTitle>{ProjectData[3].headline}</CardTitle>
							<CardText>{ProjectData[3].details}</CardText>
							<AnchorLink to="/project-details#project4">
								<Button>See More</Button>
							</AnchorLink>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[4].photo} alt={ProjectData[4].alt} />
						<CardBody>
							<CardTitle>{ProjectData[4].headline}</CardTitle>
							<CardText>{ProjectData[4].details}</CardText>
							<AnchorLink to="/project-details#project5">
								<Button>See More</Button>
							</AnchorLink>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[5].photo} alt={ProjectData[5].alt} />
						<CardBody>
							<CardTitle>{ProjectData[5].headline}</CardTitle>
							<CardText>{ProjectData[5].details}</CardText>
							<AnchorLink to="/project-details#project6">
								<Button>See More</Button>
							</AnchorLink>
						</CardBody>
					</Card>
				</CardDeck>
			</CardRow>
		</Container>
	);
};

export default Projects;
