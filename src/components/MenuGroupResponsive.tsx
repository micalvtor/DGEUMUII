import * as React from 'react';
import "../assets/scss/Dropdown.scss";  
import {IMenuLink} from "../state/globalState";

interface IMenuLinkProps{
    group:IMenuLink[];
    
}
interface IMenuLinkState{
   group:IMenuLink[];

}
export default class MenuItem extends React.Component<IMenuLinkProps,IMenuLinkState> {
    constructor(props:IMenuLinkProps){
     super(props);
     
     this.state = {
        group: [],
        
      }
    };

    public render() {
        const {link, name} = this.props.group[0];
        const group =  " <a className='enlace2' href='" + link +  "'>" +name+" </a>";
        return (group);
    }
}