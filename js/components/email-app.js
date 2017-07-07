import React from 'react';

export default function EmailApp(props) {
    return (
        <div>
            <h1>Email App</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};