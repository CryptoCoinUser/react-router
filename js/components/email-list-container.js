// js/components/email-list-container.js

import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default function EmailListContainer(props) {
    return (
      /* <EmailList emails={EMAILS["spam"]} /> */
      <EmailList emails={EMAILS[props.params.mailbox]} />
      

    )
};