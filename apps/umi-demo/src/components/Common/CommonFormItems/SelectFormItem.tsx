import React from 'react';
import { Form, Select } from 'antd'
const { Option } = Select
export interface CommonSelectProps<T = any> {
  options: <T>[]
  selectProps?: Partial<SelectProps>
  placeholder?: string
  extraSelectProps?: any // 选择框额外配置信息
}
export interface SelectProps {
  label: string
  value: string
}
const defaultSelectProps = { label: 'label', value: 'value' }
export const CommonSelect = (props: CommonSelectProps) => {
  const { options = [], selectProps, placeholder, extraSelectProps = {} } = props
  const nameProps = Object.assign({}, defaultSelectProps, selectProps,)
  return (
    <Select placeholder={placeholder} {...extraSelectProps} >
      {options.map(v => {
        return (
          <Option key={v[nameProps.value]} value={v[nameProps.value]}>{v[nameProps.label]}</Option>
        )
      })}
    </Select>
  )
}
export interface SelectItemProps extends CommonSelectProps {
  label?: string
  extraItemProps?: any
}
const SelectFormItem: React.FC = (props: SelectItemProps) => {
  const { extraItemProps = {} } = props
  return (
    <Form.Item label={props.label} {...extraItemProps} >
      <CommonSelect options={props.options} selectProps={props.selectProps} />
    </Form.Item>
  )
}

export default SelectFormItem
