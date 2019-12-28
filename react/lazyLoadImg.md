react实现图片懒加载  
=  
安装包：  
npm i react-lazyload -S  
```
import LazyLoad from 'react-lazyload';//引入模块

data.map((v,i) => {  		
        return (  
            <LazyLoad   
                height={200}   
                scrollContainer=".wrap_box"//滚动添加到容器上  
            >  
               <img src={v.photos[0].url} style={{width:'100%',height:200}}/>  
            </LazyLoad>  
        )  
})  
```
