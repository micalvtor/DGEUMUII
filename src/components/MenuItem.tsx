import * as React from 'react';
import "../assets/scss/Dropdown.scss";  
import {IMenuItem} from "../state/globalState";

interface IMenuItemProps{
    menuItems: IMenuItem;
}
interface IMenuItemState{
  searchText: string;

}
export default class MenuItem extends React.Component<IMenuItemProps,IMenuItemState> {
    constructor(props:IMenuItemProps){
     super(props);
    };

    public render() {
        const {desplegable, factores} = this.props.menuItems;
        const result = desplegable ? factores: null;
        return (result);
    }
}