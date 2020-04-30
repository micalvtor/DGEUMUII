import "../assets/scss/Dropdown.scss";  
import {IMenuItem} from "../state/globalState";
import MenuItem from '../components/MenuItem';
import {connect} from 'react-redux';

const mapStateToProps=(state:IMenuItem) =>({
    desplegable:state.desplegable,
    factores:state.factores,
})



export default connect(mapStateToProps)(MenuItem);
