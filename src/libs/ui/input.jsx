import { Input as AntInput } from "antd";
import styled from "styled-components";

export const Input = ({ ...rest }) => {
  return (
    <InputWrapper>
      <AntInput {...rest} />
    </InputWrapper>
  );
};

export const InputPassword = ({ ...rest }) => {
  return (
    <InputPasswordWrapper>
      <AntInput.Password {...rest} />
    </InputPasswordWrapper>
  );
};

const InputWrapper = styled.div`
  .ant-input{
    height: 38px;
  }
`;


const InputPasswordWrapper = styled.div`
  .ant-input-password{
    height: 38px;
  }
`;