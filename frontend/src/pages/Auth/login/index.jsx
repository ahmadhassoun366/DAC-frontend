import { useState, useContext } from "react";
import Header from "../../../layout/header-layout/header";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log("From login page");
  console.log(isAuthenticated);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    console.log(setPassword);
    console.log(setEmail);
    e.preventDefault();
    try {
      // Call your login function passing email and password
      await login(email, password);
      console.log("checking fetch");
    } catch (error) {
      setError("Invalid email or password"); // Set error message if login fails
    }
  };
  return (
    <>
      <Header />
      <div className=" bg-gray-100 py-5 flex flex-row justify-center sm:py-12">
        <div className="flex items-center justify-center w-[40%]">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt="Logo"
            className="md:block hidden"
          />
        </div>
        <div className="w-2/4">
          <form
            onSubmit={handleLogin}
            className="relative py-3 w-2/4"
            style={{
              width: "70%",
              height: "100%",
              margin: "auto",
              marginRight: "10%",
            }}
          >
            <div className="absolute inset-0 bg-CustomColor4 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl md:block hidden"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl font-semibold ">
                    Sign in to account
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 pt-5">
                      <button
                        className="bg-gray-900 text-white rounded-md px-4 py-1 font-normal hover:bg-gray-300 hover:text-gray-900 transition-all  "
                        type="submit"
                      >
                        Submit
                      </button>
                      <Link
                        to="/signup"
                        className=" text-sm text-CustomColor1 rounded-md underline-offset-8 underline"
                      >
                        Don't have an account?
                      </Link>
                      {error && <p>{error}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
