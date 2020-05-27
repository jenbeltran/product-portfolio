import React from 'react';
import ProjectData from './data';
import { Container, Card, CardImg, CardText, CardDeck, CardBody } from 'reactstrap';
import { CardRow, CardTitle } from './css';
import { Button } from '../../theme/typography';
import { Link } from 'gatsby';

const Projects = (props) => {
	return (
		<Container>
			<CardRow>
				<CardDeck>
					<Card>
						<CardImg top width="100%" height="60%" src={ProjectData[0].photo} alt={ProjectData[0].alt} />
						<CardBody>
							<CardTitle>{ProjectData[0].headline}</CardTitle>
							<CardText>{ProjectData[0].details}</CardText>
							<Link to={`/project-one`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="60%" src={ProjectData[1].photo} alt={ProjectData[1].alt} />
						<CardBody>
							<CardTitle>{ProjectData[1].headline}</CardTitle>
							<CardText>{ProjectData[1].details}</CardText>
							<Link to={`/project-two`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
				</CardDeck>
			</CardRow>
			<CardRow>
				<CardDeck>
					<Card>
						<CardImg top width="100%" height="60%" src={ProjectData[2].photo} alt={ProjectData[2].alt} />
						<CardBody>
							<CardTitle>{ProjectData[2].headline}</CardTitle>
							<CardText>{ProjectData[2].details}</CardText>
							<Link to={`/project-three`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="60%" src={ProjectData[3].photo} alt={ProjectData[3].alt} />
						<CardBody>
							<CardTitle>{ProjectData[3].headline}</CardTitle>
							<CardText>{ProjectData[3].details}</CardText>
							<Link to={`/project-four`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
				</CardDeck>
			</CardRow>
		</Container>
	);
};

export default Projects;
