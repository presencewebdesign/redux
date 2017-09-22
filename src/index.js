import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import ReduxExample from './component/reduxExample';
import ReduxExampleTodo from './component/reduxExampleTodo';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
