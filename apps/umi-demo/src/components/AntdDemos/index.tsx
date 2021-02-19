import React from 'react'
import styled from 'styled-components'
import { Anchor } from 'antd'
import Demo1 from '@/components/AntdDemos/Forms/Demo1'
const { Link: AnchorLink } = Anchor
const PageWraper = styled.div``
const PageWrapperLeft = styled.div`
  margin-right:370px;
  background-color:lightblue;
`
const PageWrapperRight = styled.div`
  position:fixed;
  top:70px;
  right:0;
  width:360px;
  padding: 10px;
`
interface AnchorType {
  href: string
  title: string
  children?: AnchorType[]
}
const AnchorBox: React.FC<{ data: AnchorType[] }> = (props) => {
  if (props.data.length > 0) {
    return <>
      {props.data.map(v => {
        return (
          <AnchorLink key={v.href} href={v.href} title={v.title}>
            {v.children?.length > 0 ? <AnchorBox data={v.children} /> : null}
          </AnchorLink>
        )
      })}
    </>
  } else {
    return null
  }
}
const menu: AnchorType[] = [
  {
    href: '#form', title: '一、Form', children: [
      { href: '#form_demo1', title: '1、表单选项数据依赖另一项表单输入值' },
      { href: '#form_demo2', title: '2、表单选项数据依赖另一项表单输入值' },
    ]
  }
]

const AntdDemos: React.FC = () => {
  return (
    <PageWraper>
      <PageWrapperLeft>
        <h3 id="form">一、FORM</h3>
        <section id="form_demo1">
          <Demo1 />
        </section>
        <section id="form_demo2" style={{ height: 1500 }}></section>
      </PageWrapperLeft>
      <PageWrapperRight>
        <Anchor>
          <AnchorBox data={menu} />
        </Anchor>
      </PageWrapperRight>
    </PageWraper>
  )
}

export default AntdDemos
