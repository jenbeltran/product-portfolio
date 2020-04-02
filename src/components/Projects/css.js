import styled from 'styled-components';
import { colors } from '../../theme/colors';

const { indigo } = colors;

const CardRow = styled.div`padding: 2% 0 2% 0;`;

const CardTitle = styled.p`
	color: ${indigo};
	font-size: 1.3rem;
`;

export { CardRow, CardTitle };
