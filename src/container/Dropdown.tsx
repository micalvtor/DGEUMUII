import "../assets/scss/Dropdown.scss"; 
import IGlobalState from '../state/globalState';
import Dropdown from '../components/Dropdown';
import {connect} from 'react-redux';

const mapStateToProps=(state:IGlobalState) =>({
    displayFinal:state.displayFinal,

})

export default connect(mapStateToProps)(Dropdown);
