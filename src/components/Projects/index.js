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
						<CardImg top width="100%" height="50%" src={ProjectData[0].photo} alt={ProjectData[0].alt} />
						<CardBody>
							<CardTitle>{ProjectData[0].headline}</CardTitle>
							<CardText>{ProjectData[0].details}</CardText>
							<Link to={`/project-details/#${ProjectData[0].pageName}`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[1].photo} alt={ProjectData[1].alt} />
						<CardBody>
							<CardTitle>{ProjectData[1].headline}</CardTitle>
							<CardText>{ProjectData[1].details}</CardText>
							<Link to={`/project-details/#${ProjectData[1].pageName}`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[2].photo} alt={ProjectData[2].alt} />
						<CardBody>
							<CardTitle>{ProjectData[2].headline}</CardTitle>
							<CardText>{ProjectData[2].details}</CardText>
							<Link to={`/project-details/#${ProjectData[2].pageName}`}>
								<Button>See More</Button>
							</Link>
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
							<Link to={`/project-details/#${ProjectData[3].pageName}`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[4].photo} alt={ProjectData[4].alt} />
						<CardBody>
							<CardTitle>{ProjectData[4].headline}</CardTitle>
							<CardText>{ProjectData[4].details}</CardText>
							<Link to={`/project-details/#${ProjectData[4].pageName}`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
				</CardDeck>
			</CardRow>
			<CardRow>
				<CardDeck>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[5].photo} alt={ProjectData[5].alt} />
						<CardBody>
							<CardTitle>{ProjectData[5].headline}</CardTitle>
							<CardText>{ProjectData[5].details}</CardText>
							<Link to={`/project-details/#${ProjectData[5].pageName}`}>
								<Button>See More</Button>
							</Link>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" height="50%" src={ProjectData[6].photo} alt={ProjectData[6].alt} />
						<CardBody>
							<CardTitle>{ProjectData[6].headline}</CardTitle>
							<CardText>{ProjectData[6].details}</CardText>
							<Link to={`/project-details/#${ProjectData[6].pageName}`}>
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
