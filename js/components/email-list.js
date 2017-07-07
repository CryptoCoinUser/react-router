// js/components/email-list.js
import React from 'react';
import Email from  './email';

export default function EmailList(props) {
     const emails = Object.keys(props.emails).map((emailId, index) => {
         const email = props.emails[emailId];
         return (
             <li key={index}>
                <Email  id={email.id} 
                        from={email.from} 
                        to={email.to} 
                        title={email.title} 
                        content={email.content} 
                 />
             </li>
         );
     });

    return (
        <ul>
            {emails}
        </ul>
    );
};