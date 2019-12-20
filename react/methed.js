//ant 表单插件写入自己的正则判断
        onRule = (rule, value, callback) => {
           const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/ig
             if (value && !value.match(reg)) {
                  callback('必须有字母和数字！')
             }
           callback()
        }

        rules: [
                { validator : this.onRule },
                { required: true, message: 'Please input your username!' }
        ]

//路由跳转不记录
        this.props.history.replace("/type/list")

//参数解析
        <Link to="/login/?name=郝云龙&sex=男">LOGIN</Link>
        //解析成对象的格式
        qs.parse(props.location.search, { ignoreQueryPrefix: true })
        
        
 //路由拦截里面添加参数
        // config.data = { ...config.data.data, key: '5d2878270550ac239657ffa54edd96ff' }
        // config.headers = { ...config.headers, key: '5d2878270550ac239657ffa54edd96ff' }

        headers: {
           key: '5d2878270550ac239657ffa54edd96ff',
        }
       
//页面使用react-redux
  import { connect } from 'react-redux'
        export default @connect(state => {
          return {
            dataTable: state.dataTable,
          }
        }, {
          // 获取表格数据
          getData: () => {
            return {
              type: 'TABLE_DATA',
              payload: get('/api/banner/list')
            }
          }
        })       
        
        
        
//下拉加载
        npm install react-infinite-scroller --save
        import InfiniteScroll from 'react-infinite-scroller';

        export default class extends React.Component {

          constructor (props) {
            super(props)
            this.state = {
              hasMore: true,
              data: [],
              count: 0,
            }
            this.loadFunc()
          }

          // 加载更多数据
          loadFunc = page => {
            // page 当前滚动到了第几页
            const { data, count } = this.state
            // 超过200条数据 不继续监听下拉事件
            if (count && data.length >= count) {
              return false
            }
            // page 是当前请求第几页数据
            // limit 每页我需要返回的数据条数
            request('/Home/Apis/listWithPage', { page, limit: 10 })
              .then(res => {
                this.setState({
                  data: [...data, ...res.list],
                  count: res.count,
                })
              })
              .catch(err => console.log(err))
          }

          render () {
            const { hasMore, data } = this.state
            return (
              <div  className="wrap_box">
                <InfiniteScroll
                    initialLoad={false}//	组件是否应加载第一组项目
                    pageStart={1}//要加载的第一页的编号，默认值为0，第一页为1
                    loadMore={this.loadFunc}
                    hasMore={hasMore}//是否还有更多项目要加载。如果事件监听器被删除false
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}//将滚动侦听器添加到窗口，或者添加组件的parentNode
                >
                    {
                        data.map((v,k) => {
                          return(
                          <p key={k}>{v.title}</p>
                          )
                        })
                    }

                </InfiniteScroll>
              </div>
            )
          }
        }
        
