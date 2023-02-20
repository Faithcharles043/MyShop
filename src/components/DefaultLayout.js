import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
  // ShoppingCartOutlined,
} from "@ant-design/icons";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Layout, Menu, theme } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const myCart = useSelector((store) => store.cartReducer);
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: "sticky",
          top: 0,
          bottom: 0,
          height: "100vh",
        }}
      >
        <div className="logo">
          <div className="pt-3 pb-4">
            {collapsed ? (
              <h5 style={{ color: "white" }}>E-SHOP</h5>
            ) : (
              <h1>E-SHOP</h1>
            )}
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={location.pathname}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/" className="link">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/about/2" icon={<UserOutlined />}>
            <Link to="/about/2" className="link">
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="/services" icon={<VideoCameraOutlined />}>
            <Link to="/services" className="link">
              Services
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}{" "}
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge
              badgeContent={myCart.cart.length}
              onClick={() => navigate("/cart")}
              color="error"
              className="shopping-cart"
            >
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
