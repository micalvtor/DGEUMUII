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
export default class MenuGroupResponsive extends React.Component<IMenuLinkProps,IMenuLinkState> {
    constructor(props:IMenuLinkProps){
     super(props);
     
     this.state = {
        link:"",
        name:"",
        
      }
    };

    public render() {
        
        return ( <a className='enlace2' href={this.props.link }>{this.props.name} </a>);

    }
}
