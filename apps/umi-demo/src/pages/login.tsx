import React from 'react';
import styled from 'styled-components'
import LoginForm from '@/components/Login/LoginForm'
const LoginPageWrapper = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export default function LoginPage (): React.FC {
  return (
    <LoginPageWrapper>
      <LoginForm/>
    </LoginPageWrapper>
  )
}