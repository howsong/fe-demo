import React, { useState } from 'react'
import styled from 'styled-components'
const MutiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  background-color: red;
`
const MutiP = styled.p`
  background-color: orange;
  overflow: hidden;
`
export interface MutiEllipsisProps {
  text: string
  lines: number
  lineHeight: number
}
const defaultProps: MutiEllipsisProps = {
  text: '',
  lines: 3,
  lineHeight: 20
}
const MutiEllipsisParagraph: React.FC = (props: MutiEllipsisProps) => {
  const [isUnfold, setIsUnfold] = useState(false)
  const { lines, lineHeight } = { ...defaultProps, ...props }
  return (
    <MutiWrapper style={{ lineHeight: `${lineHeight}px` }}>
      <span>{props.label}</span>
      <MutiP style={{ height: lineHeight * lines }}>{props.text}</MutiP>
    </MutiWrapper>
  )
}
export default MutiEllipsisParagraph
