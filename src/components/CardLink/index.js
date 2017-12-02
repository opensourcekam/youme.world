import { withProps } from 'recompose';
import { Link } from 'react-router-dom';
import { Card } from 'feuxworks';

const BaseLink = withProps({ variant: 'link' })(Link);
export default Card.withComponent(BaseLink).extend`
  text-decoration: none;
	color: #88201c;
`;
