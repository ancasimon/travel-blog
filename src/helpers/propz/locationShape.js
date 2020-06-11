import PropTypes from 'prop-types';

const locationShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { locationShape };
