import React from 'react';

function Footer() {
  return (
    <footer>
     <div>
          <a href="https://github.com/AFitzgerald95" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/austinfitzgerald95/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>LinkedIn</a>
          <a href="https://stackoverflow.com/users/23418245/austin-fitzgerald" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>Stack Overflow</a>
      </div>
      <div className="copyright">
          &copy; {new Date().getFullYear()} Austin Fitzgerald. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
