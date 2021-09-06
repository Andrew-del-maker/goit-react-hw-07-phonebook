import { useDispatch, useSelector } from 'react-redux';
import {changeFilter} from '../../redux/phonebook/phonebook-action'

const Filter = () => {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();


    return(
    <label>
        <br />
          Find contacts by name <br /><br /> 
          <input type='text' value={value} onChange={(e)=>dispatch(changeFilter(e.target.value))}></input>
    </label>
)};


export default Filter;