import React from "react";
import { Checkbox as CheckboxButton } from "antd";
import styled from "styled-components";

const Checkbox = ({ content, ...rest }) => {
  return (
    <CheckboxWrapper>
      <CheckboxButton {...rest}>
        <span>{content}</span>
      </CheckboxButton>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  .ant-checkbox {
    border-radius: 30%;
    border: 1px black solid;
  }
`;

export default Checkbox;
