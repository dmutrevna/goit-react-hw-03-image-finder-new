import React from 'react';

import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onButtonLoadMore }) => {
  return (
    <ButtonLoadMore onClick={onButtonLoadMore} type="button">
      Load More
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onButtonLoadMore: PropTypes.func.isRequired,
};
