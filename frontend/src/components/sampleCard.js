import PropTypes from "prop-types";

const SampleCard = PropTypes.shape({
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}).isRequired;

export default SampleCard;
