import React, { PropsWithChildren, ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    background: #EFEFF2;
  }

  #root {
    height: 100%;
    font-size: 14px;
    color: #222;
  }
`

function Entry (props: PropsWithChildren<unknown>): ReactNode {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
}

export default Entry
