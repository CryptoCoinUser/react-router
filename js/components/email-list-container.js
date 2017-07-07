// js/components/email-list-container.js

import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default function EmailListContainer() {
    return (
      <EmailList emails={EMAILS["spam"]} />
    )
};