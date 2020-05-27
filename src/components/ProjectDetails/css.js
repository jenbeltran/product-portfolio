import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, laptop } = breakpoints;

const { indigo, pink } = colors;

const CardSection = styled.section`
	@media (min-width: ${laptop}px) {
		position: relative;
		display: flex;
		margin: auto;
		padding: 2rem 5rem 3rem 5rem;
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
	}
`;

const CardImg = styled.img`
	@media (min-width: ${laptop}px) {
		height: 300px;
		width: 475px;
		position: relative;
		display: flex;
		margin: auto;
		box-shadow: -10px 10px ${pink};
		border-radius: 5%;
	}

	@media (max-width: ${tablet}px) {
		height: 100%;
		width: 100%;
		margin: auto;
		position: relative;
	}
`;

const Wrapper = styled.div`
	@media (min-width: ${laptop}px) {
		padding-left: 5rem;
		padding-top: 1rem;
		margin: auto;
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
		padding: 2rem;
		text-align: center;
	}
`;

const Headline = styled.h3`
	color: ${indigo};
	padding-bottom: 1rem;
`;

const Subtitle = styled.h5`
	color: ${indigo};
	padding: 0.25rem 0 0.25rem 0;
`;

export { CardSection, Wrapper, CardImg, Headline, Subtitle };
