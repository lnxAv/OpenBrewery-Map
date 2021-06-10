import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './views/App';

// Global styles
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
