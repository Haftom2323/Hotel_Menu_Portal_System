import React from "react";
import Category from "./Category";
import { Typography } from "antd";

const { Title } = Typography;

const Categories = () => (
  <div>
    <Title level={4} className="title">
      Job Categories
    </Title>
    <Category />
  </div>
);

export default Categories;
