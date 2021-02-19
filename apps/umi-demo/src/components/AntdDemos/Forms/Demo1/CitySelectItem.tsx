import React, { useState, useEffect } from 'react'
import { Form, Select } from 'antd'
const { Item: FormItem } = Form
const { Option } = Select
const getOptions = (num: number, pronviceCode: string) => {
  const n = new Array(num).fill('')
  if (num > 0 && pronviceCode) {
    return n.map((_, index: number) => {
      return {
        label: `省份${pronviceCode}城市${index}`,
        value: `${pronviceCode}${index}`
      }
    })
  } else {
    return []
  }
}
interface CitySelectProps {
  data: any[]
  label: string
  pronviceCode: string
}
const CitySelectItem: React.FC = (props: CitySelectProps) => {
  const { data = [], name, label, pronviceCode } = props
  const [optionData, setOptionData] = useState([])
  useEffect(() => {
    if (pronviceCode) {
      const num = Math.ceil(Math.random() * 50)
      const options = getOptions(num, pronviceCode)
      setOptionData(options)
    } else {
      setOptionData([])
    } 
  }, [pronviceCode])
  return (
    <FormItem name={name}>
      <Select placeholder={`请选择${label}`}>
        {optionData.map(v => {
          return <Option key={v.value} value={v.value} >{v.label}</Option>
        })}
      </Select>
    </FormItem>
  )
}

export default CitySelectItem
