import React from 'react';

/* with links */
import {Link} from 'react-router';
export default function Contact(props) {
    return (
        <div>
            <strong>
                <Link to={'/contacts/' + props.id}>
                    {props.name}
                </Link>
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};

/* without links
export default function Contact(props) {
    return (
        <div>
            <strong>
                {props.name}
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};
*/