react实现路由懒加载
=

安装包：
npm i react-loadable -S  
  
```
//package.json  内容配置  
"babel": {  
    "presets": [  
        "react-app"  
    ],  
    "plugins": [  
        [  
            "@babel/plugin-syntax-dynamic-import",  
            {  
                "legacy": true  
            }  
        ]  
    ]  
}  
```

在配置router时按需引入路由懒加载,或在入口文件  
```
//使用：
import loadable from './requere/lodable'  
  
const Abc = loadable(() => import('./pages/index'))//将需要加载的页面传过去  
const App = loadable(() => import('./App'))  
```
  
requere/lodable.js文件
```
//封装的懒加载组件  
import React from 'react'  
import Loadable from 'react-loadable';  

const LoadinC = () => <div>loading</div>//加载时的样式  

export default (loader, loading = LoadinC) => {  
    return Loadable({  
        loader: loader,//需要加载的页面  
        loading  
    })  
}  
```
