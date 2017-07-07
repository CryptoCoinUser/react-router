import React from 'react';

export default function EmailApp(props) {
    console.log('email-app')
    console.log(props.children.mailbox);
    return (
        <div>
            <h1>Email App</h1>
            <div>
                {/* props["spam"].children */}
                {/* props.children.mailbox */}
                {props.children}
            </div>
        </div>
    );
};