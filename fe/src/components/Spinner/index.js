import PropTypes from 'prop-types';

import { StyledSpinner } from './styles';

export default function Spinner({ size = 32 }) {
  return <StyledSpinner size={size} />;
}

Spinner.propTypes = {
  // eslint-disable-next-line react/require-default-props
  size: PropTypes.number,
};
