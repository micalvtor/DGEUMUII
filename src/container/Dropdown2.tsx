import "../assets/scss/Dropdown.scss"; 
import IGlobalState from '../state/globalState';
import Dropdown2 from '../components/Dropdown2';
import {connect} from 'react-redux';

const mapStateToProps=(state:IGlobalState) =>({
    displayFinal:state.displayFinal,

})

export default connect(mapStateToProps)(Dropdown2);
