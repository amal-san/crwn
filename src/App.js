import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route , Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import React, { useEffect } from 'react';


const App = () => {

  const [currentUser , setCurrentUser ] = React.useState(null);

  let unSubscribeFromAuth = null

  useEffect(() => {
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


  console.log(currentUser)

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
