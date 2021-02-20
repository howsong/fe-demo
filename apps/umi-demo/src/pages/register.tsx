import React from 'react';
import styled from 'styled-components'
import RegisterForm from '@/components/Register/RegisterForm'
const PageWrapper = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export default function RegisterPage (): React.FC {
  return (
    <PageWrapper>
      注册页面
      <RegisterForm />
    </PageWrapper>
  )
}