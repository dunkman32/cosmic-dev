import React from 'react';

function Blob() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(34.372, 0, 255, 1)" />
          <stop offset="100%" stopColor="rgba(142.616, 150.31, 255, 1)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        stroke="url(#sw-gradient)"
        strokeWidth="0"
        // eslint-disable-next-line max-len
        d="M16.8-32.7c3.9 5.7 5 12.6 9 18.2 4 5.7 10.8 10.1 10.6 14.4-.2 4.3-7.3 8.6-13.5 10.4-6.1 1.8-11.4 1.2-15 2.3-3.7 1-5.8 3.6-10.2 7.6-4.5 4.1-11.3 9.6-15.1 8.6-3.7-.9-4.5-8.3-9.2-14.2-4.6-5.9-13.2-10.2-16.5-16.5-3.3-6.3-1.4-14.5 2.7-21.3 4.2-6.8 10.5-12.1 17.6-16 7.1-3.9 15-6.3 22.1-5.2 7.2 1.2 13.7 5.9 17.5 11.7z"
        transform="translate(50 50)"
        style={{
          WebkitTransition: 'all 0.3s ease 0s',
          transition: 'all 0.3s ease 0s',
        }}
      />
    </svg>
  );
}

export default Blob;
