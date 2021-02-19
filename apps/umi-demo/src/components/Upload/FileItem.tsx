import React from 'react';
import { Progress } from 'antd'
import styled from 'styled-components'
const FileItemWrapper = styled.div`

`
const FileItem = (props:any) => {
  return <FileItemWrapper>
   TTT  {props.complete}
  </FileItemWrapper>
}
export default FileItem

