import React from 'react';

const footerStyles = {
  textAlign: 'center',
  marginTop: '15px',
  marginBottom: '20px',
  paddingTop: '20px',
  borderTop: '1px solid lightGray',
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
};

const link = {
  color: 'gray',
};

const Footer = () => (
  <footer style={footerStyles}>
    <span>Made by </span>
    <a
      style={link}
      href="https://ua.linkedin.com/in/amostap"
      target="_blank"
      rel="noopener noreferrer"
    >
      amostap
    </a>
    {', '}
    <a
      style={link}
      href="https://github.com/amostap/Weather_Wiget-OpenWeatherMap-API"
      target="_blank"
      rel="noopener noreferrer"
    >
      git
    </a>
  </footer>
);

export default Footer;
