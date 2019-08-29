import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type='button'>
        Remover
      </button>
    </li>
  );
}

// TechItem.defaultProps = {
//   tech: 'oculot'
// };

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
