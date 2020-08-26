import * as React from 'react';
import {createUseStyles} from 'react-jss';
import "../assets/scss/Dropdown.scss";  
import {IMenuItem} from "../state/globalState";
import MenuItem from '../components/MenuItem';

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
   
  const useStyles = createUseStyles({
    buttonGreen: {
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
  
  const menuGroup = this.props.displayFinal.map((menuItems:IMenuItem, index:number) => {
    return (<MenuItem key={index}  desplegable={menuItems.desplegable} factores={menuItems.factores} seccion={menuItems.seccion}/>);
  })
  const Button = () => {
    const {buttonGreen} = useStyles()
    return(  <button  id='div1' className={buttonGreen}>{menuGroup[0]}</button>)
  }
    return (
      
      <div>
      <table id="divNormal">
      
        <tr>
         
        {Button}
          
    
    <td  id='div2'className="dropdown">
    { menuGroup[1]}

</td>
<td id='div3' className="dropdown">
 
{ menuGroup[2]}


</td>
<td  id='div4'className="dropdown">
{ menuGroup[3]}

</td>
<td id='div5'className="dropdown">
{ menuGroup[4]}


</td>
<td id='div6' className="dropdown" >
{ menuGroup[5]}

</td>
</tr>
 
    </table>
    </div>
);

}
}

export default Dropdown;
