import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge'

const container = document.getElementById('app');

ReactDOM.render(
    <Badge
        firstName="Lucía A."
        lastName="Sánchez H."
        avatarUrl="https://secure.gravatar.com/avatar/9fcf7ea3f01e02a5b2665fbbfa399e6a?s=100&r=g"
        jobTitle="Frontend Developer Junior"
        twitter="Lu_San2"
        />,
        container
);
