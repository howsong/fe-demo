import React, { useEffect } from "react"
import styles from "./antd.less"
import AntdDemos from '@/components/AntdDemos'
import request from 'umi-request'

export default () => {
  useEffect(() => {
    request.get('http://127.0.0.1:3000/josn/form/configs').then(res => {
      console.log(res, '----------')
    })
  }, [])
  return (
    <div>
      <AntdDemos />
    </div>
  )
}
