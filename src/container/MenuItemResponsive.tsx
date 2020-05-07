import "../assets/scss/Dropdown.scss";  
import {IMenuItem} from "../state/globalState";
import MenuItemResponsive from '../components/MenuItemResponsive';
import {connect} from 'react-redux';

const mapStateToProps=(state:IMenuItem) =>({
    desplegable:state.desplegable,
    factores:state.factores,
    seccion:state.seccion,
})



export default connect(mapStateToProps)(MenuItemResponsive);
