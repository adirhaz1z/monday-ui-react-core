/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Pause = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315ZM10 3.49994C8.27608 3.49994 6.62276 4.18477 5.40377 5.40377C4.18477 6.62276 3.49994 8.27608 3.49994 10C3.49994 11.7239 4.18477 13.3772 5.40377 14.5962C6.62276 15.8152 8.27608 16.5001 10 16.5001C11.7239 16.5001 13.3772 15.8152 14.5962 14.5962C15.8152 13.3772 16.5001 11.7239 16.5001 10C16.5001 8.27608 15.8152 6.62276 14.5962 5.40377C13.3772 4.18477 11.7239 3.49994 10 3.49994ZM8.75 7.0835H7.91667C7.68655 7.0835 7.5 7.27004 7.5 7.50016V12.5002C7.5 12.7303 7.68655 12.9168 7.91667 12.9168H8.75C8.98012 12.9168 9.16667 12.7303 9.16667 12.5002V7.50016C9.16667 7.27004 8.98012 7.0835 8.75 7.0835ZM11.2507 7.0835H12.084C12.3141 7.0835 12.5007 7.27004 12.5007 7.50016V12.5002C12.5007 12.7303 12.3141 12.9168 12.084 12.9168H11.2507C11.0205 12.9168 10.834 12.7303 10.834 12.5002V7.50016C10.834 7.27004 11.0205 7.0835 11.2507 7.0835Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Pause.displayName = 'Pause';
Pause.propTypes = {
  size: PropTypes.string
}
export default Pause;
/* tslint:enable */
/* eslint-enable */
