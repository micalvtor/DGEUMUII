import * as React from 'react';
import "../assets/scss/Dropdown2.scss";
import IMenuItem from "../state/globalState";
import IMenuLink from "../state/globalState";
import MenuGroupResponsive from "./MenuGroupResponsive";
interface IHeaderProps{
    title: string;
    menuItems: IMenuItem[];
    menuLinks: IMenuLink[];
    showDropdownMenuResponsive:(collapse:boolean, index: number)=>any;


}
interface IHeaderState{
  searchText: string;

}
class Dropdown2 extends React.Component<IHeaderProps,IHeaderState> {
constructor(props:IHeaderProps){
 super(props);

};

 public render() {
  const onClick=()=>{
    this.props.menuItems.map((menuItem:IMenuItem, index:number) => {
      this.props.showDropdownMenuResponsive(!!!menuItem.displayFinal,index)
    })
  }
  const menuGroupResponsive1 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroupResponsive key={index}  group={menuItems.displayFinal[0].factores}/>);
  })
  const menuGroupResponsive2 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroupResponsive key={index}  group={menuItems.displayFinal[1].factores}/>);
  })
  const menuGroupResponsive3 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroupResponsive key={index} group={menuItems.displayFinal[2].factores}/>);
  })
  const menuGroupResponsive4 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroupResponsive key={index}  group={menuItems.displayFinal[3].factores}/>);
  })
  const menuGroupResponsive5 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroupResponsive key={index}  group={menuItems.displayFinal[4].factores}/>);
  })
  const menuGroupResponsive6 = this.props.menuLinks.map((menuItems:IMenuLink, index:number) => {
    return (<MenuGroupResponsive key={index}  group={menuItems.displayFinal[5].factores}/>);
  })
    return (
      <div className="topnav" id="menú">
        Menú
<div id="subMenú">

<a  onClick={onClick[0]} className="seccion2"> La Escuela </a>
      { this.props.menuItems[0][0] ? (
   
<div className="subseccion">
 {menuGroupResponsive1}
 </div>
):
(
null
)
}
       <a onClick={onClick[1]} className="seccion2"> Estudios y Titulaciones </a>
      { this.props.menuItems[1][0] ? (
        <div>
    {menuGroupResponsive2}
 </div>
):
(
null
)
}
       <a onClick={onClick[2]} className="seccion2"> Organización Docente </a>
      { this.props.menuItems[2][0] ? (
        <div>
     {menuGroupResponsive3}
 </div>
):
(
null
)
}
     <a onClick={onClick[3]} className="seccion2"> Relaciones Externas </a>
      {this.props.menuItems[3][0] ? (
        <div>
    {menuGroupResponsive4}
 </div>
):
(
null
)
}
      <a onClick={onClick[4]} className="seccion2"> Servicios </a>
      { this.props.menuItems[4][0] ? (
  
  <div>
   {menuGroupResponsive5}
 </div>

):
(
null
)
}
     <a onClick={onClick[5]} className="seccion2"> Perfiles de Usuarios </a>
      { this.props.menuItems[5][0] ? (

<div>
{menuGroupResponsive6}
 </div>

):
(
null
)
}
      
    </div>
</div>

      
);

}
}
export default Dropdown2;