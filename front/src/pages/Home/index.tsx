import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1>Home page</h1>
      <div className="flex gap-3 justify-center">
        <Link to="signin" >
          SignIn
        </Link>
        <Link to="signup" >
          SignUp
        </Link>
      </div>
    </div>
  )
};

export default HomePage;
