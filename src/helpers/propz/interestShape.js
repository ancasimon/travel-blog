
import PropTypes from 'prop-types';

const interestShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  locationId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { interestShape };
