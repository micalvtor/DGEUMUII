import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dropdown from './container/Dropdown';

import {Provider} from 'react-redux';
import { store } from './state/store';
import registerServiceWorker from './registerServiceWorker';
import "./assets/scss/index.scss"; 



const displayDropdown = (
  <Provider store={store}>
      <div className="divP">
        <Dropdown/>


      </div>
      </Provider>
      );

export default displayDropdown;

ReactDOM.render(displayDropdown, document.getElementById('root'));

registerServiceWorker();
