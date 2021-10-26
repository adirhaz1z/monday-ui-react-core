/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Play = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM5.40377 5.40377C6.62276 4.18477 8.27608 3.49994 10 3.49994C11.7239 3.49994 13.3772 4.18477 14.5962 5.40377C15.8152 6.62276 16.5001 8.27608 16.5001 10C16.5001 11.7239 15.8152 13.3772 14.5962 14.5962C13.3772 15.8152 11.7239 16.5001 10 16.5001C8.27608 16.5001 6.62276 15.8152 5.40377 14.5962C4.18477 13.3772 3.49994 11.7239 3.49994 10C3.49994 8.27608 4.18477 6.62276 5.40377 5.40377ZM8.78947 12.9238L12.7368 10.4873C13.0877 10.2707 13.0877 9.72928 12.7368 9.5127L8.78947 7.07622C8.4386 6.85965 8 7.13037 8 7.56352L8 12.4365C8 12.8696 8.4386 13.1404 8.78947 12.9238Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Play.displayName = 'Play';
Play.propTypes = {
  size: PropTypes.string
}
export default Play;
/* tslint:enable */
/* eslint-enable */
