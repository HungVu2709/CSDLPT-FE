import { Row, Col } from "antd";

import { BannerRegister } from "@src/components/icons";
import RegisterForm from "@src/containers/RegisterFrom/RegisterForm";

export const RegisterView = ({ onSubmitRegister }) => {
  return (
    <Row className="min-h-full w-full items-center">
      <Col span={0} md={16}>
        <BannerRegister className="overflow-hidden" />
      </Col>
      <Col span={24} md={8} className="px-16">
        <RegisterForm onSubmitRegister={onSubmitRegister} />
      </Col>
    </Row>
  );
};
