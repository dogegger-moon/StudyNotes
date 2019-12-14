import React from 'react'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import imagesLoaded from 'imagesloaded'
import axios from 'axios'
import cs from 'classnames'
import './styles.less'

const arr = [
  // 'https://www.baidu.com/link?url=5v5Usz6yi2Yxtw0s7peMfok3NdV_Ws8dL4J5YFSt6vgWQX6dZ1tnXY2VofcFrLqAc_ePMqmpuQB_GfccVRL0G5fWdQlhU605ObjS2Gup46mfOdQEEXADCxRD-uwVKMbV-5gyDRsWVifAjpS6Rtk-VYmg6ELgsa56i280ibJ6I_LphZf2oO5OWg3FIy5pNik9qhzSAHeVgDcAuiMRzK3S0-2E7yPUfy8RNcTtBmkec7yA7kUBR5AFo9Bqow5MXU3OV5B1ZMHzZoUWW7Gzc9PaAal5nHCXLQcOSfIx0QyBK5B0R_Sq5wTVbsGxBO-ujurQPMg7jknJ6PwrDkPGiTSDqwlQrOKYmTfjJ3UxVvz3Xobrm10Z_rCG6Nn97pCWQZ-lpKiXGWsdYrDdxnEWJX-hZwE1znDa8_s_lO8jWZdqty1Oq-TeXiHT9aqPvKf5UB9ntWQbDszu5HJZq8JOSyoPiGZ2Th3f5pHP1G3zUl89YRBbY_camqx12CBV3kc7VEOdQ6pVQ5frfhJRMmFT3R4Ym_&wd=&eqid=b87ddf8f000e6d49000000025df42c3e',
  // 'https://www.baidu.com/link?url=YKhfddJn0zTx3f_s2SBCnyQ2rDadsqme6qk1owCqrGNUZ4jIxV8yl7EZkZI1_VjyE2oyVYu6S12IR06Ck3dJB7b5nevWlQKzZo8qXaBTS4WTB6KbKm3rdrA4r0cq_zOVUEDQ96tgZ7NMOQnUw6d63mIhaGDBeUO2sL9saU5vuohGXXqHjs45dUpTfhr9HHreQYzmMp-0DPexmb4rLvJJ6YrlXAtYf90j-6t5SVC-npYT7VH1ohGdMp5UhG4HvganDXCRKoJk5pKTDd5tXpPop67xfP9uiFJMYCYuKeyXn6LKHdTIOuAQMv9rp1WISTbs8jsMutZleBjxIBXCuliTbqnaQB5YC60g5fHRugrqPBnqCVo-Ge-kpiMrRnQKLjTUB0QIFLDMrx1y2VeuJqNLMXdPwmtnlRq8j1mXzsvq26cberYRCmYEAGOET6Z6Hl7bRZBvO5qeArF0ZoVI4mCeiauy_3ynfAnUc_XmKoeYNkNfz2vqvWKsEzjRQEOkTwck-UtUUC07IMEqH8Y_JrsFmnEfYmB71VrW4OxzRL6NIcFXljdh14P_4P8a4sAVSZTM&wd=&eqid=b87ddf8f000e6d49000000025df42c3e',
  // 'https://www.baidu.com/link?url=5xUUR6tCBKgGi19g5XYJLDtzh6YyhXw1JyM5pPBSS4RfJRsVqrY2MVrtto6r2YThJSrNBQJXgjuQ6eY3TljbaA6sptzzYYW9hPafrPPfj14yv3CxQdTv3dcnIDF3J0zj8Nv9BGT3cgkChznYDswaen4WbHv-FEgh7Po9S0gpyZ5JR3V8P3FVAZEq_OLul_XTMwqQ1xxrDi149_4Ih9OBhA6G14cVUKs5e-Plo4fonetNvLi9Ue31dU7gdb2junyVkL13sVafcRkcnz8atnkbyQRE0pg8vmvP8th2bkrQUFMzL0RZRdq-PXHO1orQ0S0wPS1PFnmNulTn2Ph-4mf4_Jl-QeHaQ47QfO5ltA8cK44Qs0LbCTh4R75Mx2vnvdkPNwprkAI4QnNiNry26IDXMwK3w5Csm9yoZ12s00oBMLZVTifJiJs0XF1npc_8R7dyvsUrDOKC1ZbUovb8h__JWGjw296fOnCh16uhllsKCslTVMtlRU9JEij1OJ7wHCQyaT1SianzLRrnfc4zpxviha&wd=&eqid=b87ddf8f000e6d49000000025df42c3e',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2458227883,4095122505&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1761250919,1896060533&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852083094,372235004&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2944705163,3932100810&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3104686528,572431609&fm=26&gp=0.jpg',
]

// columnWidth: 200,
// itemSelector: '.grid-item' // 要布局的网格元素
// gutter: 10 // 网格间水平方向边距，垂直方向边距使用css的margin-bottom设置
// percentPosition: true // 使用columnWidth对应元素的百分比尺寸
// stamp:'.grid-stamp' // 网格中的固定元素，不会因重新布局改变位置，移动元素填充到固定元素下方
// fitWidth: true // 设置网格容器宽度等于网格宽度，这样配合css的auto margin实现居中显示
// originLeft: true // 默认true网格左对齐，设为false变为右对齐
// originTop: true // 默认true网格对齐顶部，设为false对齐底部
// containerStyle: { position: 'relative' } // 设置容器样式
// transitionDuration: '0.8s' // 改变位置或变为显示后，重布局变换的持续时间，时间格式为css的时间格式
// stagger: '0.03s' // 重布局时网格并不是一起变换的，排在后面的网格比前一个延迟开始，该项设置延迟时间  
// resize:  false // 改变窗口大小将不会影响布局
// initLayout: true // 初始化布局，设未true可手动初试化布局

export default class extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      hasMore: true, // 是否开启下拉加载
      data: [], // 接受我每次的数据
      count: 0,
    }
    
    this.loadMoreData()
  }

  imagesOnload = () => {
    const elLoad = imagesLoaded('.pages-hoc')
    elLoad.on('always', () => {
      // 图片加载后执行的方法
      // 拿第一次的数据
      this.advanceWidth()
    })
  }

  advanceWidth = () => {
    // new Masonry(节点, 配置)
    new Masonry(document.querySelector('.pages-hoc'), {
      itemSelector: '.d', // 要布局的网格元素
      columnWidth: 200,  // 获取节点 可以自动计算每列的宽度
      fitWidth: true, // 设置网格容器宽度等于网格宽度
      gutter: 20,
    })
  }

  // 加载更多数据
  loadMoreData = (page = 1) => {
    // page 当前滚动到了第几页
    const { data, count } = this.state
    // 超过200条数据 不继续监听下拉事件
    if (count && data.length >= count) {
      return false
    }
    // page 是当前请求第几页数据
    // limit 每页我需要返回的数据条数
    axios.post('/api/Home/Apis/listWithPage', { data: { page, limit: 10 } })
      .then(res => {
        this.setState({
          data: [...data, ...arr],
          count: res.count,
        }, () => {
          this.imagesOnload()
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    const { hasMore } = this.state

    return (
      <div className="box">
        <InfiniteScroll
          initialLoad={false} // 不让它进入直接加载
          pageStart={1} // 设置初始化请求的页数
          loadMore={this.loadMoreData}  // 监听的ajax请求
          hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
          useWindow={false} // 不监听 window 滚动条
        >
          <div className="pages-hoc">
            {
              this.state.data.map((value, key) => (
                <div 
                  key={key} 
                  className={cs('d', {d1: key%2 === 0, d2: key%2 !== 0})}
                >
                  <img src={value} key={key} />
                </div>
              ))
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}





imagesloaded.js


import React from 'react'
import imagesLoaded from 'imagesloaded'

const arr = [
  'https://www.baidu.com3333/link?url=5v5Usz6yi2Yxtw0s7peMfok3NdV_Ws8dL4J5YFSt6vgWQX6dZ1tnXY2VofcFrLqAc_ePMqmpuQB_GfccVRL0G5fWdQlhU605ObjS2Gup46mfOdQEEXADCxRD-uwVKMbV-5gyDRsWVifAjpS6Rtk-VYmg6ELgsa56i280ibJ6I_LphZf2oO5OWg3FIy5pNik9qhzSAHeVgDcAuiMRzK3S0-2E7yPUfy8RNcTtBmkec7yA7kUBR5AFo9Bqow5MXU3OV5B1ZMHzZoUWW7Gzc9PaAal5nHCXLQcOSfIx0QyBK5B0R_Sq5wTVbsGxBO-ujurQPMg7jknJ6PwrDkPGiTSDqwlQrOKYmTfjJ3UxVvz3Xobrm10Z_rCG6Nn97pCWQZ-lpKiXGWsdYrDdxnEWJX-hZwE1znDa8_s_lO8jWZdqty1Oq-TeXiHT9aqPvKf5UB9ntWQbDszu5HJZq8JOSyoPiGZ2Th3f5pHP1G3zUl89YRBbY_camqx12CBV3kc7VEOdQ6pVQ5frfhJRMmFT3R4Ym_&wd=&eqid=b87ddf8f000e6d49000000025df42c3e',
  // 'https://www.baidu.com/link?url=YKhfddJn0zTx3f_s2SBCnyQ2rDadsqme6qk1owCqrGNUZ4jIxV8yl7EZkZI1_VjyE2oyVYu6S12IR06Ck3dJB7b5nevWlQKzZo8qXaBTS4WTB6KbKm3rdrA4r0cq_zOVUEDQ96tgZ7NMOQnUw6d63mIhaGDBeUO2sL9saU5vuohGXXqHjs45dUpTfhr9HHreQYzmMp-0DPexmb4rLvJJ6YrlXAtYf90j-6t5SVC-npYT7VH1ohGdMp5UhG4HvganDXCRKoJk5pKTDd5tXpPop67xfP9uiFJMYCYuKeyXn6LKHdTIOuAQMv9rp1WISTbs8jsMutZleBjxIBXCuliTbqnaQB5YC60g5fHRugrqPBnqCVo-Ge-kpiMrRnQKLjTUB0QIFLDMrx1y2VeuJqNLMXdPwmtnlRq8j1mXzsvq26cberYRCmYEAGOET6Z6Hl7bRZBvO5qeArF0ZoVI4mCeiauy_3ynfAnUc_XmKoeYNkNfz2vqvWKsEzjRQEOkTwck-UtUUC07IMEqH8Y_JrsFmnEfYmB71VrW4OxzRL6NIcFXljdh14P_4P8a4sAVSZTM&wd=&eqid=b87ddf8f000e6d49000000025df42c3e',
  // 'https://www.baidu.com/link?url=5xUUR6tCBKgGi19g5XYJLDtzh6YyhXw1JyM5pPBSS4RfJRsVqrY2MVrtto6r2YThJSrNBQJXgjuQ6eY3TljbaA6sptzzYYW9hPafrPPfj14yv3CxQdTv3dcnIDF3J0zj8Nv9BGT3cgkChznYDswaen4WbHv-FEgh7Po9S0gpyZ5JR3V8P3FVAZEq_OLul_XTMwqQ1xxrDi149_4Ih9OBhA6G14cVUKs5e-Plo4fonetNvLi9Ue31dU7gdb2junyVkL13sVafcRkcnz8atnkbyQRE0pg8vmvP8th2bkrQUFMzL0RZRdq-PXHO1orQ0S0wPS1PFnmNulTn2Ph-4mf4_Jl-QeHaQ47QfO5ltA8cK44Qs0LbCTh4R75Mx2vnvdkPNwprkAI4QnNiNry26IDXMwK3w5Csm9yoZ12s00oBMLZVTifJiJs0XF1npc_8R7dyvsUrDOKC1ZbUovb8h__JWGjw296fOnCh16uhllsKCslTVMtlRU9JEij1OJ7wHCQyaT1SianzLRrnfc4zpxviha&wd=&eqid=b87ddf8f000e6d49000000025df42c3e',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2458227883,4095122505&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1761250919,1896060533&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852083094,372235004&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2944705163,3932100810&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3104686528,572431609&fm=26&gp=0.jpg',
]

export default class extends React.PureComponent {
  componentDidMount () {
    const elLoad = imagesLoaded('.pages-images')
    elLoad.on( 'always', () => {
      // 图片加载后执行的方法
      console.log('图片加载完成')
    } )
    elLoad.on( 'done', () => {
      // 图片加载后执行的方法
      console.log('图片加载成功')
    } )
    elLoad.on( 'fail', option => {
      // 图片加载后执行的方法
      console.log('图片加载失败', option)
    } )
  }

  render () {
    return (
      <div className="pages-images">
        {
          arr.map((value, key) => {
            return <img src={value} key={key} />
          })
        }
      </div>
    )
  }
}



