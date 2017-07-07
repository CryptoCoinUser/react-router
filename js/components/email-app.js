import React from 'react';

export default function EmailApp(props) {
     console.log('email-app')
     console.log(props)
    // console.log(props.children.mailbox);
    return (
        <div>
            <h1>{props.params.mailbox}</h1>
            <div>
                {/* props["spam"].children */}
                {/* props.children.mailbox */}
                {props.children}
            </div>
        </div>
    );
};