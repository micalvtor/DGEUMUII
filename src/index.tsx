import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dropdown from './container/Dropdown';
import Dropdown2 from './container/Dropdown2';

import {Provider} from 'react-redux';
import { store } from './state/store';
import registerServiceWorker from './registerServiceWorker';
import "./assets/scss/index.scss"; 



const displayDropdown = (
  <Provider store={store}>
      <div className="divP">
        <Dropdown/>
        <Dropdown2/>

      </div>
      </Provider>
      );

export default displayDropdown;

ReactDOM.render(displayDropdown, document.getElementById('root'));

registerServiceWorker();
