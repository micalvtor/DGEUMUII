import * as React from 'react';
import "../assets/scss/Dropdown.scss";  

interface IMenuLinkProps{
    link:string;
    name:string;
    
}
interface IMenuLinkState{
    link:string;
    name:string;

}
export default class MenuGroup extends React.Component<IMenuLinkProps,IMenuLinkState> {
    constructor(props:IMenuLinkProps){
     super(props);
     
     this.state = {
        link:"",
        name:"",
        
      }
    };

    public render() {
        return (<li className="seccion"><a className="enlace" href= {this.props.link }/>  {this.props.name}</li>);
    }
}
