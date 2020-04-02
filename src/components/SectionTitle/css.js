import styled from 'styled-components';
import { colors } from '../../theme/colors';

const { grey, indigo } = colors;

const TitleSection = styled.section`
	text-align: center;
	margin: auto;
	padding: 1rem;
	background-color: ${({ pageName }) => (pageName !== 'my-story' ? '' : `${grey}`)};
`;

const Headline = styled.p`
	font-size: 2.3rem;
	font-weight: 700;
	color: ${indigo};
`;

const Description = styled.p`font-size: 1.3rem;`;

export { TitleSection, Headline, Description };
