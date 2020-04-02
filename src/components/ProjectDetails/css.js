import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, laptop } = breakpoints;

const { indigo } = colors;

const CardSection = styled.section`
@media (min-width: ${laptop}px) {
	text-align: center
	margin: auto;
	padding: 5rem 10rem 5rem 10rem;
	background-image: ${({ photo }) => `url('${photo}')`};
	background-position: center center;
	background-size: cover;
}

@media (max-width: ${tablet}px) {
	text-align: center
	margin: auto;
}
	



`;

const CardImg = styled.img`
	@media (min-width: ${laptop}px) {
		width: 0;
	}
	@media (max-width: ${tablet}px) {
		width: 100%;
	}
`;

const Wrapper = styled.div`
	@media (min-width: ${laptop}px) {
		background-color: white;
		opacity: 0.95;
		margin: auto;
		padding: 2rem;
		border-radius: 4px;
	}

	@media (max-width: ${tablet}px) {
		background-color: white;
		opacity: 0.95;
		margin: auto;
		padding: 2rem;
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
