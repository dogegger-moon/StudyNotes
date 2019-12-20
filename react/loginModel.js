import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { fetchLogin, saveUserInfo } from '@/actions/login'
import './styles.less'

export default @connect(state => {
  const { password, username, password_save } = state.login
  return {
    password,
    username,
    password_save,
  }
}, {
  fetchLogin, // 登录
  saveUserInfo, // 保存用户名 密码
})
@Form.create({
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        value: props.username,
      }),
      password: Form.createFormField({
        value: props.password,
      }),
      password_save: Form.createFormField({
        value: props.password_save,
      }),
    }
  },
})
class Login extends React.Component {
  state = {
    password_save: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    
    const { fetchLogin, saveUserInfo, form, history } = this.props

    form.validateFields((err, values) => {
      if (!err) {
        fetchLogin(values)
          .then(res => {
            if (res.payload.token) {
              // 选中记住密码 记住持久化数据 用于回填
              if ( values.password_save ) {
                saveUserInfo(values)
                
              } else {
                // 未选中记住密码 清空持久化数据
                saveUserInfo({ 
                  username: '',
                  password: '',
                  password_save: false,
                })
              }

              history.push('/')
            }
          })
      }
    })
  }

  // 校验必须包含字母 + 数字
  // 后期提到 utils 里
  validFunction = (rule, value, callback) => {
    const reg = /([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*/img

    if (value && !value.match(reg)) {
      callback('必须包含数字和字母!')
    }
    // 必须写
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form
    
    return (
      <div className="pages-login">
        <Form 
          layout="vertical" 
          onSubmit={this.handleSubmit} 
          className="pages-form"
        >
          {/* 用户名 */}
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { 
                  required: true, 
                  message: '请输入用户名!' 
                },
                { 
                  min: 6, 
                  message: '最小长度不能小于6位!' 
                },
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          
          {/* 密码 */}
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                // 自定义验证放在最上面
                {
                  validator: this.validFunction,
                },
                { 
                  required: true, 
                  message: '请输入密码!',
                },
                { 
                  min: 6, 
                  message: '最小长度不能小于6位!' 
                },
              ],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit">
              Login
            </Button>

            {getFieldDecorator('password_save', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                记住密码
              </Checkbox>
            )}
          </Form.Item>
        </Form>
      </div>
    )
  }
}
