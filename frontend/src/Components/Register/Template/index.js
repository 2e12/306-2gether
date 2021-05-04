import React from 'react';
import './template.scss';

function Template({header, children}) {

  return(
    <div>
      <div className="red-box-register">
        <div>
          {header}
        </div>
      </div>
      <div className="white-box-register">
        {children}
      </div>
    </div>
  )
}

export default Template;