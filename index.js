import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pfile from './Pfile';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<Pfile />
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
