import React from "react";
import { Button, Form, FormItem, Input, InputPassword } from "@src/libs/ui";
import Checkbox from "@src/libs/ui/checkbox";

const RegisterForm = ({ onSubmitRegister }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span className="text-2xl text-gray-700">Adventure starts here 👋</span>
        <span className="text-sm text-gray-600">
          Make your app management easy and fun!
        </span>
      </div>
      <Form
        layout="vertical"
        initialValues={{ policy: false }}
        onFinish={onSubmitRegister}
      >
        <FormItem
          label="Username"
          name="username"
          required
          rules={[
            { required: true, message: "The Username field is required!" },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Email"
          name="email"
          required
          rules={[
            { required: true, message: "Please input your email!" },
            {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Email invalidate!",
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Password"
          name="password"
          required
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be more than 6 characters!" },
          ]}
        >
          <InputPassword />
        </FormItem>
        <FormItem containerClass="mt-10">
          <Button
            type="primary"
            htmlType="submit"
            content={"Register"}
            className="w-full bg-violet-600 hover:bg-violet-600 hover:shadow-form-item-hover hover:shadow-violet-600 rounded-sm"
          />
        </FormItem>
      </Form>
    </div>
  );
};

export default RegisterForm;
