import {useState,useEffect,useRef} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch,Route,BrowserRouter,Redirect } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions.js';
import "./App.css";


function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser)
  let unsubscribeFromAuth = useRef(null);
  useEffect(() => {
   unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth=>{
     if(userAuth)
     {
        const userRef = createUserProfileDocument(userAuth);    
        (await userRef).onSnapshot(snapShot=>{
          dispatch(setCurrentUser({id:snapShot.id,...snapShot.data()})) //data is for obtaning the values
        })
     }else{
      dispatch(setCurrentUser(userAuth));
     }
   
    })
    return () => {
      unsubscribeFromAuth.current()
    }
  }, [])
 
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/> 
      <Route path="/shop/:id" component={ShopPage} />
      <Route exact path="/signin" render={()=> currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
