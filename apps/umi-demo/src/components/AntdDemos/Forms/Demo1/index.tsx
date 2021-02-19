// 表单联动刷新子组件选项数据
import React from 'react'
import { Form, Select, Button } from 'antd'
import CitySelectItem from './CitySelectItem'
import styled from 'styled-components'
const FormWrapper = styled.div`
  padding:50px;
`
const { Option } = Select
const pronviceData = [
  { label: '城市A', value: 'A' },
  { label: '城市B', value: 'B' },
  { label: '城市C', value: 'C' },
  { label: '城市D', value: 'D' },
]
const FormDemo: React.FC = () => {
  const [form] = Form.useForm()
  const handleSubmit = () => {
    //console.log(form.isFieldsTouched(), 'isFieldsTouched--------------')
  }
  return (
    <FormWrapper>
      <Form form={form} name="demoForm" >
        <Form.Item name="province" label="省份">
          <Select placeholder="请选择省份" allowClear onChange={() => {
            form.setFieldsValue({ city:undefined})
          }}>
            {pronviceData.map(v => {
              return <Option key={v.value} value={v.value} >{v.label}</Option>
            })}
          </Select>
        </Form.Item>

        <Form.Item shouldUpdate label="城市">
          {() => {
            return <CitySelectItem label="城市"  pronviceCode={form.getFieldValue('province') } name="city"/>
          }}
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>提交</Button>
        </Form.Item>

      </Form>
    </FormWrapper>
  )
}

export default FormDemo
