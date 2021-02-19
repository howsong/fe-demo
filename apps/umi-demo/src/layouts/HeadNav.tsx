// 头部导航
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Avatar } from "antd";
import { Link } from "umi";
import styled from "styled-components";
import { ROUTES } from '@/contants/routes'
const HeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  .logo_span{
    color:#fff
  }
`;
const navData = [
  { name: "首页", key: "home", path: ROUTES.HOME },
  { name: "可视化", key: "visual", path: ROUTES.VISUAL },
  { name: "Ant Design", key: "antd", path: ROUTES.ANTD }
];
const HeadNav = () => {
  return (
    <HeaderNavWrapper>
      <span className="logo_span">LOGO</span>
      <Menu theme="dark" mode="horizontal">
        {navData.map((v) => {
          return (
            <Menu.Item key={v.path}>
              <Link to={v.path}>{v.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
      <Avatar size={36} icon={<UserOutlined />} />
    </HeaderNavWrapper>
  );
};

export default HeadNav;
