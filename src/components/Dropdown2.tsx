import * as React from 'react';
import "../assets/scss/Dropdown.scss";  
import {IMenuItem} from "../state/globalState";
import MenuItemResponsive from '../components/MenuItemResponsive';

interface IHeaderProps{
  displayFinal: IMenuItem[];
}
interface IHeaderState{
  displayFinal: IMenuItem[];

}
class Dropdown extends React.Component<IHeaderProps,IHeaderState> {
constructor(props:IHeaderProps){
 super(props);
 this.state={displayFinal:[]}
};

public render() {
  
    const menuGroup = this.props.displayFinal.map((menuItems:IMenuItem, index:number) => {
      return (<MenuItemResponsive key={index}  desplegable={menuItems.desplegable} factores={menuItems.factores} seccion={menuItems.seccion}/>);
    })
    
      return (
        <div className="topnav" id="menú">
        Menú
<div id="subMenú">
{menuGroup}
</div>
</div>

  );
  
  }
  }
  export default Dropdown;
