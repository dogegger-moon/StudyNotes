






create-react-app my-app
router
=
npm install --save react-router-dom  

*//如果报错 清除缓存  npm cache clean -f*  


react-router-config
npm i eject -S
*如果报错：
git init 
git add .
git commit -m 'add'
再运行:
npm run eject*  
npm install --save react-router-config  

axios
=
npm i axios -S  

Ant Design
=
npm install antd --save  
npm install antd-mobile --save  
引入样式:  
`import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'`
`import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'`
（只需引入一次）  

methods
=
react-pullload  
react-infinite-scroller  
react-lazyload  
react-loadable  
npm i http-proxy-middleware -D  
npm i @babel/plugin-proposal-decorators --save-dev  


Echarts
=
npm install --save echarts-for-react
npm install echarts --save //如果有报错找不到echarts模块，需要在安装一下exharts'  

Rudex
=

npm i redux -S
npm i redux-persist -S
npm i react-redux -S
npm i redux-promise -S
npm i redux-thunk -S
npm i redux-saga -S  

Less
=

npm i less less-loader -S  

配置config/webpack.config.js
=
```
const cssRegex = /\.(css|less)$/;

{
    loader: require.resolve('less-loader'), // compiles Less to CSS
    options: {
       modifyVars: {},
       javascriptEnabled: true,
    },
},
```  



package配置  
```
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "syntax-dynamic-import"
  ]
}
```  



@路径配置:  
配置config/webpack.config.js
319//
```
'@': path.resolve(__dirname, '../src'),
'@@': path.resolve(__dirname, '../src/component')  
```   












 npx create-react-app 你的项目名 或者 create-react-app 你的项目名
        2. cnpm i
        3. git add .
        4. git commit -m 'xm'
        5. npm run eject
        6. cnpm i axios qs classnames react-router-dom redux-promise redux-thunk -S
        7. cnpm i redux react-redux less less-loader shortid redux-persist -S
        8. cnpm i react-router-config -S (需要使用新路由的同学装，不使用的跳过)
        9. cnpm i @babel/plugin-proposal-decorators --save-dev
        10. cnpm i babel-plugin-syntax-dynamic-import -D
        11. cnpm i antd-mobile --save (移动端项目装)
        12. cnpm i antd -S (PC端项目装)
        13. cnpm i react-lazyload -S
        14. cnpm i react-loadable -S
        15. cnpm i http-proxy-middleware -D
        16. 替换 package.json文件
        "babel": {
          "presets": [
            "react-app"
          ],
          "plugins": [
            [
              "@babel/plugin-proposal-decorators",
              {
                "legacy": true
              }
            ],
            "syntax-dynamic-import"
          ]
        }
