import { Action, createStore } from 'redux';
import IGlobalState, { initialState } from './globalState';
import {IFIlterCollapseAction} from '../actions/dropdownActions';

const reducer = (state: IGlobalState = initialState, action: Action) => {
    switch (action.type){
        
    case 'DISPLAYMENU':
            const collapsedAction = action as IFIlterCollapseAction;
      return{...state,displayFinal:collapsedAction.payload}
  
  case 'DISPLAYMENU2':
        const collapsedAction2 = action as IFIlterCollapseAction;
      return{...state,displayMenu2:collapsedAction2.payload}
  
  case 'DISPLAYMENU3':
        const collapsedAction3 = action as IFIlterCollapseAction;
      return{...state,displayMenu3:collapsedAction3.payload}
  
  case 'DISPLAYMENU4':
        const collapsedAction4 = action as IFIlterCollapseAction;
      return{...state,displayMenu4:collapsedAction4.payload}
  
  case 'DISPLAYMENU5':
        const collapsedAction5 = action as IFIlterCollapseAction;
      return{...state,displayMenu5:collapsedAction5.payload}
  
  case 'DISPLAYMENU6':
        const collapsedAction6 = action as IFIlterCollapseAction;
      return{...state,displayMenu6:collapsedAction6.payload}
  
  case 'DISPLAYMENURESPONSIVE':
        const collapsedAction7 = action as IFIlterCollapseAction;
      return{...state,displayMenuResponsive:collapsedAction7.payload}
  
  case 'DISPLAYMENURESPONSIVE2':
        const collapsedAction8 = action as IFIlterCollapseAction;
      return{...state,displayMenuResponsive2:collapsedAction8.payload}
  
  case 'DISPLAYMENURESPONSIVE3':
        const collapsedAction9 = action as IFIlterCollapseAction;
      return{...state,displayMenuResponsive3:collapsedAction9.payload}
  
  case 'DISPLAYMENURESPONSIVE4':
        const collapsedAction10 = action as IFIlterCollapseAction;
      return{...state,displayMenuResponsive4:collapsedAction10.payload}
  
  case 'DISPLAYMENURESPONSIVE5':
        const collapsedAction11 = action as IFIlterCollapseAction;
      return{...state,displayMenuResponsive5:collapsedAction11.payload}
  
  case 'DISPLAYMENURESPONSIVE6':
        const collapsedAction12 = action as IFIlterCollapseAction;
      return{...state,displayMenuResponsive6:collapsedAction12.payload}
  }
  return state;
}

  export const store = createStore(reducer, initialState);