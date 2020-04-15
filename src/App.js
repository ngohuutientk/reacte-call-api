import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductActionPage from './pages/ProductActionPage/ProductListPage'


class App extends Component {
    render() {
      return (
        <Router>
          <div>
         
           <Menu />
   
           <div className="container">
             
             <div className="row">
               
               {/* { this.showContentMenus(routes) } */}

              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/product-list' component={ProductListPage} />
                <Route path='/product/add' component={ProductActionPage} />
                <Route component={NotFoundPage} />
              </Switch>

   
             </div>
             
           </div>
         </div>
        </Router>
       
     );
    }

    showContentMenus = (routes) => {
      var reuslt = null;
     
      if(routes.length > 0) {
          reuslt = routes.map((route, index) => {
            return (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  components={route.main}
              />
            );
          })
      }
      return <Switch>{reuslt}</Switch>
    }
}

export default App;
