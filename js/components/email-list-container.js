// js/components/email-list-container.js

import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';

export default function EmailListContainer() {
    return (
      <EmailList emails={EMAILS} />
    )
};