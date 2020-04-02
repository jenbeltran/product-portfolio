import styled from 'styled-components';
import { colors } from '../../theme/colors';

const { grey } = colors;

const StorySection = styled.section`
	padding-bottom: 30px;
	background-color: ${grey};
`;

const Storyh3 = styled.h3`margin: 0;`;

const Storydiv = styled.div`
	@media (min-width: 770px) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	@media (max-width: 769px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const Storyp = styled.p`
	text-align: center;
	font-size: 1.1rem;
	padding: 1% 15% 2% 15%;
`;

export { StorySection, Storyh3, Storydiv, Storyp };
