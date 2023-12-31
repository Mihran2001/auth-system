import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
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
    <div className="w-full flex justify-center">
      <div className="w-96">
        <h4>Sign In</h4>
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
        <Link to="/"> Back </Link>
      </div>
    </div>
  );
};

export default SignIn;
