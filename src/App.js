import React, { Component, Suspense,useState } from 'react'
import {BrowserRouter as Router, Route,browserHistory,Switch,Redirect} from 'react-router-dom';
import './i18n'
import LockScreen from "react-lock-screen";
import {RoleBaseMiddleWare} from './Middleware'
import NotFound from "./NotFoundPage";
import ForbiddenPage from './403Forbidden'
import Login from './components/auth/Login'

import Hello from './testcomponent/Hello'
import ThankYou from './testcomponent/ThankYou'
import LanguageSelector from './testcomponent/LanguageSelector'

//for theme...
import {ThemeProvider} from 'styled-components';
import {getTheme} from "./getTheme";
import THEMES from './constants/themes'
import { Header, AppLink } from './styles';

//For Product add..
import ProductAdd from './components/dashbord/stock/product_add';

import {HomePage} from './components/dashbord'


const getLockScreenUi = setLock => {
  return (
    <div className="react-lock-screen__ui">
      <img
        width="32"
        src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/102-256.png"
        alt="lock"
      />
      <p>Just to be safe, we locked the screen</p>
      <button onClick={() => setLock(false)}>unlock</button>
    </div>
  );
};

const Test =()=><Suspense fallback="loading">
                     <LanguageSelector />
                     <Hello />
                    <ThankYou />
             </Suspense>

function App() {

  window.BASE_URL="/";
  const [themeName, setThemeName] = useState(sessionStorage.getItem( 'theme')||THEMES.BASIC);

  const changeTheme =(themeName)=>{
    setThemeName(themeName)
    sessionStorage.setItem( 'theme',themeName)

  }

  return (

    <ThemeProvider theme={getTheme(themeName)}>
      <div className="App">
        <Header>

        <Router>
          <Switch>
              {/*<Route path="/test" exact component={Test}></Route>*/}
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/product" exact component={ProductAdd}></Route>

                {/*<LockScreen timeout={5000} ui={getLockScreenUi}>
                  
                </LockScreen>*/}
          

              <Route path="/403Forbidden" exact component={ForbiddenPage} />
              
              <Route path="/*" exact component={NotFound} />

          </Switch>
      </Router>

          {/*<button onClick={() => changeTheme(THEMES.APPLE)}>Apple</button>
          <button onClick={() => changeTheme(THEMES.DARCULA)}>Darcula</button>*/}
        </Header>
      </div>
    </ThemeProvider> 

  )
}

export default App;
