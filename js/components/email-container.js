//js/components/email-container.js:

import React from 'react';

import EMAILS from '../emails';
import Email from  './email';

export default function EmailContainer(props) {
    const email = EMAILS["spam"][props.params.emailId];
    return <Email id={email.id} 
    			  name={email.name}
                  from={email.from} 
                  to={email.to} 
                  title={email.title}
                  content={email.content}
                />;
};