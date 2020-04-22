import Dropdown2 from '../components/Dropdown2';
import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import {Dispatch} from 'redux';
const mapStateToProps=(state:IGlobalState) =>({
    displayFinal:state.displayFinal,
})

// Para realizar la creación de esto hay que hacerlo mediante map
const mapDispatchToProps=(dispatch:Dispatch) =>({
    showDropdownMenuResponsive:(displayFinal:boolean, index: number) =>{
    dispatch({type:"DISPLAYMENURESPONSIVE",payload:{displayFinal,index}});
}
})

export default connect(mapStateToProps,mapDispatchToProps)(Dropdown2);
