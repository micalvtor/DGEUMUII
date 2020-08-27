import * as React from 'react';
import { createUseStyles, useTheme } from "react-jss";
import "../assets/scss/Dropdown.scss";  
import {IMenuItem} from "../state/globalState";
import MenuItem from '../components/MenuItem';

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
    return (<MenuItem key={index}  desplegable={menuItems.desplegable} factores={menuItems.factores} seccion={menuItems.seccion}/>);
  })
  const Comp = () => {
    const theme = useTheme();
    const maquetacion = useStyles({ theme });
    return(<td  id='div1' className={maquetacion.maquetacion}>{menuGroup[0]}</td>)
  }
  const Comp1 = () => {
    const theme = useTheme();
    const maquetacion = useStyles({ theme });
    return(<td  id='div2' className={maquetacion.maquetacion}>{menuGroup[1]}</td>)
  }
  const Comp2 = () => {
    const theme = useTheme();
    const maquetacion = useStyles({ theme });
    return(<td  id='div3' className={maquetacion.maquetacion}>{menuGroup[2]}</td>)
  }
  const Comp3 = () => {
    const theme = useTheme();
    const maquetacion = useStyles({ theme });
    return(<td  id='div4' className={maquetacion.maquetacion}>{menuGroup[3]}</td>)
  }
  const Comp4 = () => {
    const theme = useTheme();
    const maquetacion = useStyles({ theme });
    return(<td  id='div5' className={maquetacion.maquetacion}>{menuGroup[4]}</td>)
  }
  const Comp5 = () => {
    const theme = useTheme();
    const maquetacion = useStyles({ theme });
    return(<td  id='div6' className={maquetacion.maquetacion}>{menuGroup[5]}</td>)
  }
    return (
      
      <div>
      <table id="divNormal">
      
        <tr>
        <Comp />
          
    
        <Comp1 />

        <Comp2 />

        <Comp3 />

        <Comp4 />

        <Comp5 />
</tr>
 
    </table>
    </div>
);

}
}

export default Dropdown;
