import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css'
 
export default function UserMenu () {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    return (
        <div className={css.div}>
            <p className={css.p}>Welcom, {user.name}</p>
            <button className={css.button}type="button" onClick={() => dispatch(logOut())}> Logout</button>   
        </div>
    );
}
    
