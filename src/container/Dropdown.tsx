import Dropdown from '../components/Dropdown';
import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import {Dispatch} from 'redux';
const mapStateToProps=(state:IGlobalState) =>({
    displayFinal:state.displayFinal,

})

// Para realizar la creación de esto hay que hacerlo mediante map
const mapDispatchToProps=(dispatch:Dispatch) =>({
    showDropdownMenu:(displayFinal:boolean, index: number) =>{
    dispatch({type:"DISPLAYMENU",payload:{displayFinal,index}});
}
})

export default connect(mapStateToProps,mapDispatchToProps)(Dropdown);
