import React from 'react'
import styled from 'styled-components'
import { Form, Input, Button, message } from 'antd'
import { useHistory } from 'umi'
import { ROUTES } from '@/contants/routes'
import { RIGISTER } from '@/contants/apis'
import request from 'umi-request'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}
const RegisterFormWrapper = styled.div`

`
export default function RegisterForm (): React.FC {
  const history = useHistory()
  const handleRegister = (values: any) => {
    request.post(RIGISTER, { data: values }).then(res => {
      if (res.code === 1) {
        message.success('注册成功')
        history.push(ROUTES.LOGIN)
      } else {
        message.error(res.message || '注册失败')
      }
    })
  }
  const jumpLoginPage = () => {
    history.push(ROUTES.LOGIN)
  }
  return (
    <RegisterFormWrapper>
      <Form {...layout} onFinish={handleRegister}>
        <Form.Item label="账号" name="account" rules={[{ required: true, message: '账号不能为空' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="昵称" name="nickname">
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '密码不能为空' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
        <div>
          <Button type="text" onClick={jumpLoginPage}>返回登录页</Button>
        </div>
      </Form>
    </RegisterFormWrapper>
  )
}