import React from 'react'
import { Anchor } from 'antd'
import styled from 'styled-components'
const { Link } = Anchor
const AnchorWrapper = styled.div`
  min-height: 300px;
  background-color:#fff;
`
const LeftWrapper = styled.div`
  
`
const RightWrapper = styled.div`
  position:fixed;
  top:80px;
  right:0;
  min-height:200px;
  width: 300px;
`
export interface AnchorItem {
  href: string
  title: string
  children?: AnchorItem[]
}
const getAnchorBox = (items: AnchorItem[]) => {
  if (items?.length > 0) {
    items.map(v => {
      if (v.children?.length > 0) {
        return (
          <Link key={v.href} href={v.href} title={v.title}>
            {getAnchorBox(v.children)}
          </Link>
        )
      } else {
        return <Link key={v.href} href={v.href} title={v.title}></Link>
      }
    })
  } else {
    return null
  }
}

interface AnchorProps {
  menu: AnchorItem[]
}
const AnchorContainer: React.FC<AnchorProps> = props => {
  return (
    <AnchorWrapper>
      <LeftWrapper>YYYY</LeftWrapper>
      <RightWrapper>
        <Anchor>
          {getAnchorBox(props.menu)}
          <Link href="#components-anchor-demo-basic" title="Basic demo" />
          <Link href="#components-anchor-demo-static" title="Static demo" />
          <Link href="#API" title="API">
            <Link href="#Anchor-Props" title="Anchor Props" />
            <Link href="#Link-Props" title="Link Props" />
          </Link>
        </Anchor>
      </RightWrapper>
    </AnchorWrapper>
  )
}

export default AnchorContainer
