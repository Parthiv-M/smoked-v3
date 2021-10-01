// routes for the application

// import pages
import SignUpPage from "./../pages/SignUp";
import SignInPage from "./../pages/SignIn";
import ResetPassword from "./../pages/ResetPassword";
import GamePage from "./../pages/GamePage";
import TeamPage from "./../pages/TeamPage";
import Dummy from "../pages/entry_html";
import entry_html from "../pages/entry_html";

const routes = [  
  {
    path:'/home',
    component:entry_html ,
    isPrivate: false
  },

  {
    path:'/game/:urlHint/:answer',
    component: GamePage,
    isPrivate: false
  },
  {
    path:'/signUp',
    component: SignUpPage,
    isPrivate: false
  },
  {
    path:'/signIn',
    component: SignInPage,
    isPrivate: false
  },
  {
    path:'/reset',
    component: ResetPassword,
    isPrivate: false
  },
  {
    path:'/team',
    component: TeamPage,
    isPrivate: false
  },
  {
    path:'/',
    component: SignUpPage,
    isPrivate: false
  },
  
]
 
export default routes;