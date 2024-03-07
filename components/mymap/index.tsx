import React, { useEffect, useRef } from 'react';

const MyMap: React.FC = () => {
    return (
        <div className="">
          <iframe
            title="Google Map"
            width="600"
            height="450"
            frameborder="0" 
            src={mapUrl}
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      );
};

export default MyMap;