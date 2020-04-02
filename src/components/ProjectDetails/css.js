import styled from 'styled-components';

const CardSection = styled.section`
	text-align: center
	margin: auto;
	padding: 5rem 10rem 5rem 10rem;
	background-image: ${({ photo }) => `url('${photo}')`};
	background-position: center center;
	background-size: cover;
`;

const Wrapper = styled.div`
	background-color: white;
	opacity: 0.95;
	margin: auto;
	padding 0rem 4rem 5rem 4rem;
`;

export { CardSection, Wrapper };
