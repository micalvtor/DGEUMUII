import * as React from 'react';
import "../assets/scss/Dropdown.scss"; 
import { createUseStyles, useTheme } from "react-jss"; 
import {IMenuItem} from "../state/globalState";
import MenuItemResponsive from '../components/MenuItemResponsive';

interface IHeaderProps{
  displayFinal: IMenuItem[];
}
interface IHeaderState{
  displayFinal: IMenuItem[];

}
const useStyles = createUseStyles({
  maquetacion: {
    backgroundColor: "#981E32",
    border:"3px solid #FDC82F",
    color: "#FDC82F",
    fontFamily:  "Times New Roman",
    fontSize: "110%",
    marginRight:"-10%",
    maxHeight:20,
    maxWidth:160,
    minWidth:160,
    textAlign: "center",
    verticalAlign: "top",
    
  }
}) 
class Dropdown extends React.Component<IHeaderProps,IHeaderState> {
constructor(props:IHeaderProps){
 super(props);
 this.state={displayFinal:[]}
};

public render() {
  
    const menuGroup = this.props.displayFinal.map((menuItems:IMenuItem, index:number) => {
      return (<MenuItemResponsive key={index}  desplegable={menuItems.desplegable} factores={menuItems.factores} seccion={menuItems.seccion}/>);
    })
    const CompResponsive = () => {
      const theme = useTheme();
      const maquetacion = useStyles({ theme });
      return(<div className={maquetacion.maquetacion}>{menuGroup}</div>)
    }
      return (
        <div className="topnav" id="menú">
        <CompResponsive />
</div>

  );
  
  }
  }
  export default Dropdown;
