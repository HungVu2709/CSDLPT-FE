import { Row, Col } from "antd";

import { BannerLogin } from "@src/components/icons";
import { LoginForm } from "@src/containers/LoginForm";

export const LoginView = ({ onFinish }) => {
  return (
    <Row className="min-h-full w-full items-center">
      <Col span={0} md={16}>
        <BannerLogin className="overflow-hidden" />
      </Col>
      <Col span={24} md={8} className="px-16">
        <LoginForm onFinish={onFinish} />
      </Col>
    </Row>
  );
};
