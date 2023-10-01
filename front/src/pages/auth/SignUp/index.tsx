import { useCallback, useState } from "react";

const SignUp = () => {
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const onInputChange = useCallback((type: string, event: any) => {
    if (type === "login") {
      setLoginText(event.target.value);
    } else {
      setPasswordText(event.target.value);
    }
  }, []);

  const onSubmit = useCallback(() => {}, []);

  return (
    <div className="w-96">
      <h4>Sign up</h4>
      <form action="" onSubmit={onSubmit} className="flex flex-col">
        <label htmlFor="">Login</label>
        <input
          type="text"
          value={loginText}
          onChange={(e) => onInputChange("login", e)}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          value={passwordText}
          onChange={(e) => onInputChange("", e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
