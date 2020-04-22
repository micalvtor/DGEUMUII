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
        const group =  "<li> className='seccion'><a className='enlace' href='" + link +  "'" +name+" </li>";
        return (group);
    }
}