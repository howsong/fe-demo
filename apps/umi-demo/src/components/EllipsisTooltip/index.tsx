import React, { useRef, PropsWithChildren, useEffect, useState } from 'react'
import { Tooltip } from 'antd'
import styled from 'styled-components'

const EllipsisSpan = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
`
interface EllipsisProps extends PropsWithChildren {
  width: string
  placement: string
}
export default function EllipsisTooltip(props: EllipsisProps) {
  const ellipsisRef = useRef()
  const [isTooltip, setIsTooltip] = useState(false)

  useEffect(() => {
    const { scrollWidth, clientWidth } = ellipsisRef.current
    setIsTooltip(scrollWidth > clientWidth)
  }, [props.children])

  if (isTooltip) {
    return (
      <Tooltip title={props.children} placement={props.placement}>
        <EllipsisSpan ref={ellipsisRef} style={{ width: props.width }}>
          {props.children}
        </EllipsisSpan>
      </Tooltip>
    )
  } else {
    return (
      <EllipsisSpan ref={ellipsisRef} style={{ width: props.width }}>
        {props.children}
      </EllipsisSpan>
    )
  }
}
