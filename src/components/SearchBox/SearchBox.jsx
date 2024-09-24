import { useDispatch, useSelector } from 'react-redux'
import{changeFilter, selectNameFilter} from '../../redux/filtersSlice'
import css from './SearchBox.module.css'


export default function SearchBox() {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return <div className={css.container}>
        <p>Find contacts by name</p>
        <input className={css.input} type="text" value={filter} onChange={handleChange}></input>
    </div>
}

