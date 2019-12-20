//路由页面
      import React from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      import App from './App';
      import Login from './login'
      import PrivateRoute from './redirect'
      import {
          BrowserRouter as Router,
          Switch
      } from "react-router-dom";

      ReactDOM.render(
          <Router>
              <Switch>
                  <PrivateRoute path="/login" component={Login}/>
                  <PrivateRoute path="/" component={App}/>
              </Switch>
          </Router>
          , document.getElementById('root')
      );
      
//redirect.jsx拦截页面
      import React from 'react'
      import { Route, withRouter } from 'react-router-dom'

      export default @withRouter
      class extends React.PureComponent {
          constructor (props) {
              super(props)
              this.redirect(props)
          }

          componentWillReceiveProps (nextprops) {
              this.redirect(nextprops)
          }

          redirect = newprops => {
              //把props里的history结构出来
              const { history } = newprops
              // 判断是否登录了
              if (!localStorage.getItem('token')) {
                  const pathname = history.location.pathname

                  //如果是登录页 不跳转 否则会死循环
                  // if (!pathname.includes('login'))
                  if (pathname !== '/') {
                      console.log(pathname, 2)
                      history.push('/')
                  }
              }
          }

          render () {
              return <Route path={this.props.path} component={this.props.component} />
          }
      }
