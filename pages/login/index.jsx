import GlobalLayout from "@/layouts/GlobalLayout";
import { useState } from "react";
const LoginPage = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div>
        <GlobalLayout headerText={"Login"}>
          <div>
            <div className="flex flex-col justify-center gap-5 mx-4 ">
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold w-full">
                  UserName
                </label>
                <input
                  className="rounded-sm border-black  w-full p-2 bg-stone-100 shadow-inner shadow-black text-black placeholder:text-blue-950"
                  type={"text"}
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold w-full">
                  Password
                </label>
                <input
                  className="rounded-sm border-black  w-full p-2 bg-stone-100 shadow-inner shadow-black text-black placeholder:text-blue-950 "
                  type={"password"}
                  value={password}
                  onChange={handlePassword}
                  placeholder="password"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mx-4 ">
              <div className="w-full flex justify-end items-start mb-5 ">
                <a
                  className="text-stone-00 text-sm font-small  "
                  href="/forgot"
                >
                  Forgot Password?
                </a>
              </div>
              <a
                href={"/login"}
                className=" rounded-md bg-blue-one text-white text-xl flex items-center justify-center px-5 py-2 shadow-inner hover:bg-blue-two hover:shadow-lg hover:shadow-black focus:bg-blue-600 focus:shadow-inner focus:shadow-black"
              >
                Login
              </a>
              <div className="mt-4 flex flex-row items-center gap-2">
                <h2 className="text-sm font-normal ">Don't have an acount?</h2>
                <a
                  className=" text-blue-600 text-md font-medium  "
                  href="/signup"
                >
                  SignUp
                </a>
              </div>
            </div>
          </div>
        </GlobalLayout>
      </div>
    </div>
  );
};
export default LoginPage;
