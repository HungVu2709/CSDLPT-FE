import { Form as AntForm } from "antd";
import styled from "styled-components";

export const Form = ({ ...rest }) => {
  return (
    <FormWrapper>
      <AntForm {...rest} />
    </FormWrapper>
  );
};

export const FormItem = ({ containerClass, ...rest }) => {
  return (
    <FormItemWrapper className={containerClass || ""}>
      <AntForm.Item {...rest} />
    </FormItemWrapper>
  );
};

export const useForm = () => AntForm.useForm();

const FormWrapper = styled.div``;

const FormItemWrapper = styled.div``;
