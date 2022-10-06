import { Button as AntButton } from "antd";
import styled from "styled-components";

export const Button = ({ content, ...rest }) => {
  return (
    <ButtonWrapper>
      <AntButton {...rest}>
        <span>{content}</span>
      </AntButton>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  .ant-btn{
    border: none;
    height: 38px;
  }
`;
