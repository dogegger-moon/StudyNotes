//Router.js
import React from 'react';
import { 
    BrowserRouter as Router
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import {routes} from './routes'

const BasicRoute = () => (
    <Router>
        {renderRoutes(routes)}
    </Router>
)
    

export default BasicRoute

//routes.js
import { renderRoutes } from 'react-router-config'
import loadable from '../utils/loadable'

//const HomePage = loadable(() => import('../pages/homePage/homePage'))
//路由懒加载引入组件

function APP ({route}) {
    return renderRoutes(route.routes)
}
const routes = [
    {
        component: APP,
        routes: [
            {
                path: '/',
                component: ,
            }
        ]
    }
];

export {routes}
