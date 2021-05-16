import "./header.styles.scss"
import  { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'



const Header = ({ currentUser }) => {
    return ( 
        <div className="header">
            <Link to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> 
                    : <Link className='option' to='/sign-in'></Link>
                }
            </div>
        </div>
    )
}

export default Header