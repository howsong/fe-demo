import React from 'react';
import { Form, Input, Button } from 'antd';
import request from 'umi-request'
import styled from 'styled-components'
import {LOGIN} from '@/contants/apis'

const FormWrapper = styled.div`
  width:300px;
  background-color:#fff;
  padding:16px;
`
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}
export default function LoginForm (): React.FC {
  const hanldeLogin = (values: any) => {
    console.log(values, '提交参数')
    request.post(LOGIN, { data: values }).then(res => {
      console.log(res)
    })
  }
  return (
    <FormWrapper >
      <Form {...layout} onFinish={hanldeLogin}>
        <Form.Item label="账号" name="account" rules={[{ required: true, message: '账号不能为空' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '密码不能为空' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
}