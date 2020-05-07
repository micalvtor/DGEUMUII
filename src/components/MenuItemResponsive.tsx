import * as React from 'react';
import "../assets/scss/Dropdown.scss";  
import {IMenuLink} from "../state/globalState";
import MenuGroupResponsive from './MenuGroupResponsive';
interface IMenuItemProps{
    desplegable: boolean;
    factores: IMenuLink[];
    seccion:string;

}
interface IMenuItemState{

  desplegable: boolean;

}
export default class MenuItemResponsive extends React.Component<IMenuItemProps,IMenuItemState> {
    constructor(props:IMenuItemProps){
     super(props);
     this.state={desplegable:true}
    };
    public onFilterClick = () =>{
        this.setState({desplegable:!!!this.state.desplegable});
    }
    public render() {
        const subseccion= this.props.factores.map((menuItems:IMenuLink, index:number) => {
            return (<MenuGroupResponsive key={index} link={menuItems.link} name={menuItems.name}/>);
        })
        
        return (<div>
            <a onClick={this.onFilterClick} className="seccion2">{this.props.seccion} </a>
            
            {!!!this.state.desplegable ?
            <div className="subseccion">
            {subseccion}
            </div>
            :null}

        </div>
        );
    }
}