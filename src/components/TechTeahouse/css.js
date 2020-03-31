import styled from 'styled-components';

const StorySection = styled.section`
	padding-bottom: 30px;
	background: #f3f3f3
	font-family: lato;
`;

const Storyh1 = styled.h1`margin: 0;`;

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
line-height: 30px;
color: #333333
text-align: center;
padding: 0 15% 2% 15%`;

export { StorySection, Storyh1, Storydiv, Storyp };
