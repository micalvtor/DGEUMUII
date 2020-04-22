import * as React from 'react';
import "../assets/scss/Dropdown.scss";  
import IMenuItem from "../state/globalState";
import IMenuLink from "../state/globalState";
import MenuGroup from "./MenuGroup";

interface IHeaderProps{
    title: string;
    menuItems: IMenuItem[];
    menuLinks: IMenuLink[];
    showDropdownMenu:(collapse:boolean, index: number)=>any;


}
interface IHeaderState{
  searchText: string;

}
class Dropdown extends React.Component<IHeaderProps,IHeaderState> {
constructor(props:IHeaderProps){
 super(props);

};

 public render() {
  const onClick=()=>{
    this.props.menuItems.map((menuItem:IMenuItem, index:number) => {
      this.props.showDropdownMenu(!!!menuItem.displayFinal,index)
    })
    
  }
  const menuGroup1 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroup key={index}  group={menuItems.displayFinal[0].factores}/>);
  })
  const menuGroup2 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroup key={index}  group={menuItems.displayFinal[1].factores}/>);
  })
  const menuGroup3 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroup key={index}  group={menuItems.displayFinal[2].factores}/>);
  })
  const menuGroup4 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroup key={index}  group={menuItems.displayFinal[3].factores}/>);
  })
  const menuGroup5 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroup key={index}  group={menuItems.displayFinal[4].factores}/>);
  })
  const menuGroup6 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroup key={index}  group={menuItems.displayFinal[5].factores}/>);
  })
    return (
      
      <table id="divNormal">
      
        <tr>
         <td  id='div1' className="dropdown">
         <div className="button" onClick={onClick[0]}> La Escuela </div>
         </td>
          
    
    <td  id='div2'className="dropdown">
<div className="button2" onClick={onClick[1]}> Estudios y Titulaciones </div>

</td>
<td id='div3' className="dropdown">
 
<div className="button3" onClick={onClick[2]}> Organización Docente </div>


</td>
<td  id='div4'className="dropdown">
<div className="button4" onClick={onClick[3]}> Relaciones Externas </div>

</td>
<td id='div5'className="dropdown">
<div className="button5" onClick={onClick[4]}> Servicios </div>


</td>
<td id='div6' className="dropdown" >
<div className="button6" onClick={onClick[5]}> Perfiles de Usuarios </div>

</td>
</tr>
{ this.props.menuItems[0][0]? (
  <tr>
    <td id="visible">
<ul id="seccion1">

{menuGroup1}
 


)}
</ul>
</td>
<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
</tr>

):
(
null
)
}
{ this.props.menuItems[1][0]  ? (
  
  <tr>
    <td className="oculto">Oculto </td>
    <td id="visible2">
  <ul >
  {menuGroup2}
  </ul>
  </td>

<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
</tr>
 ):
 (
  null
 )
 }
 { this.props.menuItems[2][0]  ? (
   <tr>
   <td className="oculto">Oculto </td>
   
<td className="oculto">Oculto </td>
   <td id="visible3">
<ul>
{menuGroup3}
</ul>
</td>

<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
</tr>
):
(
null
)
}
{ this.props.menuItems[3][0]  ? (
  <tr>
   <td className="oculto">Oculto </td>
   <td className="oculto">Oculto </td>
<td className="oculto">Oculto </td>
   <td id="visible4">
  <ul>
  {menuGroup4}
   </ul>
  </td>

  <td className="oculto">Oculto </td>
  <td className="oculto">Oculto </td>
  </tr>
  ):
  (
  null
  )
  }
  { this.props.menuItems[4][0]  ? (
    <tr>
    <td className="oculto">Oculto </td>
    <td className="oculto">Oculto </td>
 <td className="oculto">Oculto </td>
    <td id="visible5">
<ul>
{menuGroup5}
</ul>
</td>

  <td className="oculto">Oculto </td>
  <td className="oculto">Oculto </td>
  </tr>
):
(
null
)
}
{ this.props.menuItems[5][0] ? (
  <tr>
    <td className="oculto">Oculto </td>
    <td className="oculto">Oculto </td>
    <td className="oculto">Oculto </td>
    <td className="oculto">Oculto </td>
    <td className="oculto">Oculto </td>
    <td id="visible6">
  <ul>
  {menuGroup6}
  </ul>
  </td>
  </tr>
  ):
  (
  null
  )
  }
    </table>
   
);

}
}
export default Dropdown;