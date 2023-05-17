import React from 'react';
import PropTypes from 'prop-types';

/**
 * Panel. A content wrapper
 */
export const Panel = ({ wrappedElement, ...props }) => {
  return (
    <div
      className="panel"
    >
      {wrappedElement}
    </div>
  );
};

Panel.propTypes = {
  /**
   * Element to be rendered inside.
   */
  wrappedElement: PropTypes.element,
}

Panel.defaultProps = {
};