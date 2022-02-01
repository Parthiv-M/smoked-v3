// routes for the application

// import pages
import SignUpPage from "./../pages/SignUp";
import SignInPage from "./../pages/SignIn";
import ResetPassword from "./../pages/ResetPassword";
import GamePage from "./../pages/GamePage";
import TeamPage from "./../pages/TeamPage";
import LandingPage from "../pages/LandingPage";
import VerifyEmail from "../pages/VerifyEmail";
import VerifyCode from "../pages/VerifyCode";

const routes = [  
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
    path:'/verify/email',
    component: VerifyEmail,
    isPrivate: false
  },
  {
    path:'/verify/code',
    component: VerifyCode,
    isPrivate: false
  },
  {
    path:'/team',
    component: TeamPage,
    isPrivate: false
  },
  {
    path:'/',
    component: LandingPage,
    isPrivate: false
  },
]
 
export default routes;