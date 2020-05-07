import * as React from 'react';
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
  
  const menuGroup = this.props.displayFinal.map((menuItems:IMenuItem, index:number) => {
    return (<MenuItem key={index}  desplegable={menuItems.desplegable} factores={menuItems.factores} seccion={menuItems.seccion}/>);
  })
  
    return (
      <div>
      <table id="divNormal">
      
        <tr>
         <td  id='div1' className="dropdown">
        { menuGroup[0]}
         </td>
          
    
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
