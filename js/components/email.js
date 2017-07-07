import React from 'react';

import {Link} from 'react-router';
export default function Email(props) {
    return (
        <div>
        	{props.from} <br />
            {props.to} <br />
            <strong>
                <Link to={'/spam/' + props.id}>
                    {props.title}
                </Link>
            </strong> <br />
            {props.content}
            &nbsp;
        </div>
    );
};
