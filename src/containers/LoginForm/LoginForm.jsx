import { Button, Form, FormItem, Input, InputPassword } from "@src/libs/ui";

export const LoginForm = ({ onFinish }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span className="text-2xl text-gray-700">Welcome to Vuexy! 👋</span>
        <span className="text-sm text-gray-600">
          Please sign-in to your account and start the adventure
        </span>
      </div>
      <Form layout="vertical" onFinish={onFinish}>
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
            content={"Login"}
            className="w-full bg-violet-600 hover:bg-violet-600 hover:shadow-form-item-hover hover:shadow-violet-600 rounded-sm"
          />
        </FormItem>
      </Form>
    </div>
  );
};
