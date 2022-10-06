import { LoginView } from "./Login.view";

export default () => {
  const handleFinish = (value) => {
    console.log(value);
  };
  return (
    <>
      <LoginView onFinish={handleFinish} />
    </>
  );
};
