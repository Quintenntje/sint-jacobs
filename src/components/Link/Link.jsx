import React from 'react'
import './link.css';

const Link = ({ href, children, type = 'internal' }) => {
  return (
    <a href={href} target={type === 'internal' ? '_self' : '_blank'} rel="noopener noreferrer" className='link'>
      {children}
    </a>
  )
};

export default Link;