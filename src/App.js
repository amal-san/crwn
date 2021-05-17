import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route , Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';



const App = (props) => {



  let unSubscribeFromAuth = null

  useEffect(() => {
    const { setCurrentUser } = props;
    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          setCurrentUser({id:snapShot,...snapShot.data()})
        })
      }
      setCurrentUser(userAuth)
    })
    return function cleanup (){
      unSubscribeFromAuth();
    }
  },[])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps) (App);
