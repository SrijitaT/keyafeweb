import {useState,useEffect,useRef} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch,Route,BrowserRouter } from "react-router-dom";
import "./App.css";


function App() {
  const [currentUser, setcurrentUser] = useState(null);
  
  let unsubscribeFromAuth = useRef(null);
  useEffect(() => {
    console.log("in useeffect on mount")
   unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth=>{
     if(userAuth)
     {
        const userRef = createUserProfileDocument(userAuth);    
        (await userRef).onSnapshot(snapShot=>{
          setcurrentUser({id:snapShot.id,...snapShot.data()}) //data is for obtaning the values
          console.log("currentUser :",currentUser)
        })
     }else{
      setcurrentUser(userAuth);
     }
   
    })
    return () => {
      unsubscribeFromAuth.current()
    }
  }, [])
 
  return (
    <BrowserRouter>
    <Header currentUser={currentUser}/>
    <Switch>
    <Route path="/shop" component={ShopPage} />
    <Route path="/signin" component={SignInAndSignUpPage}/>
    <Route exact path="/" component={HomePage}/> 
    </Switch>
    </BrowserRouter>
  );
}

export default App;
