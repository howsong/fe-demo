import React from "react";
import { Link } from "umi";
import { Layout } from "antd";
import { createGlobalStyle } from "styled-components";
import HeadNav from "./HeadNav";
const { Content, Header, Footer } = Layout;
const GlobalStyle = createGlobalStyle`
  body{
    height: 100%
  }
  #root {
    height:100%
  }
`;
function BasicLayout(props) {
  return (
    <>
      <GlobalStyle />
      <Layout style={{ height: "100%" }}>
        <Header>
          <HeadNav />
        </Header>
        <Content> {props.children}</Content>
        <Footer>HHHHH</Footer>
      </Layout>
    </>
  );
}
export default BasicLayout;
