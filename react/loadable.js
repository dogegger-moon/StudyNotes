import React from 'react'
import Loadable from 'react-loadable'
import { ActivityIndicator } from 'antd-mobile';

const loadingComponent = () => (
    <div style={{width: '100%', height: '100%',lineHeight: '100%'}}> 
        <div className="loading-example">
            <div className="align">
            <ActivityIndicator size="large" />
            <span style={{ marginTop: 8 }}>Loading...</span>
            </div>
        </div>
    </div>
)

export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader: loader,
        loading
    })
}

//const xxx = loadable(() => import('../pages/xxx/xxx))
