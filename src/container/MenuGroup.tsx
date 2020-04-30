import "../assets/scss/Dropdown.scss";  
import {IMenuLink} from "../state/globalState";
import MenuGroup from '../components/MenuGroup';
import {connect} from 'react-redux';

const mapStateToProps=(state:IMenuLink) =>({
    link:state.link,
    name:state.name,
})



export default connect(mapStateToProps)(MenuGroup);