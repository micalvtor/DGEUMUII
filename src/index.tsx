import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dropdown from './container/Dropdown';
import Dropdown2 from './container/Dropdown2';
import {Provider} from 'react-redux';
import { store } from './state/store';
import registerServiceWorker from './registerServiceWorker';
import "./assets/scss/index.scss"; 
import {initialState, IMenuItem} from './state/globalState';

const dropdowns = initialState.displayFinal.map((value: IMenuItem,index:number) => {
  return (
    <Dropdown key={index} menuItems={value} />
  )
})
const dropdowns2 = initialState.displayFinal.map((value: IMenuItem,index:number) => {
  return (
    <Dropdown2 key={index} menuItems={value}/>
  )
})
const displayDropdown = (
  <Provider store={store}>
      <div className="divP">
        {dropdowns}
        {dropdowns2}

      </div>
      </Provider>
      );

export default displayDropdown;

ReactDOM.render(displayDropdown, document.getElementById('root'));

registerServiceWorker();