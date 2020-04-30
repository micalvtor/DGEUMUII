import * as React from 'react';
import "../assets/scss/Dropdown.scss";  
import {IMenuLink} from "../state/globalState";
import MenuGroup from '../components/MenuGroup';
interface IMenuItemProps{
    desplegable: boolean;
    factores: IMenuLink[];

}
interface IMenuItemState{
  factores:IMenuLink[];
  desplegable: boolean;

}
export default class MenuItem extends React.Component<IMenuItemProps,IMenuItemState> {
    constructor(props:IMenuItemProps){
     super(props);
     this.state={desplegable:true,factores:[]}
    };
    public onFilterClick = () =>{
        this.setState({desplegable:!!!this.state.desplegable});
    }
    public render() {
        const subseccion= this.props.factores.map((menuItems:IMenuLink, index:number) => {
            return (<MenuGroup key={index} link={menuItems.link} name={menuItems.name}/>);
        })
        
        return (<div>
            <label onClick={this.onFilterClick}>Menu prueba</label>
            {!!!this.state.desplegable ?
            subseccion
            :null}

        </div>
        );
    }
}
