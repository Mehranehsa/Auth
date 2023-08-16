import GlobalLayout from "@/layouts/GlobalLayout";
import { useState } from "react";
const SignupPage = ({ children }) => {

    const [username, setUsername] =
        useState("");
        const [email, setEmail] =
        useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div>
            <GlobalLayout
                headerText={"SignUp"}>
                <div className="flex flex-col justify-center gap-4 mx-8 ">
                    <div className="flex flex-col gap-2">
                        <label className="text-black font-semibold w-full">
                            Email
                        </label>
                        <input
                            className="rounded-sm border-black  w-full p-2 bg-stone-100 shadow-inner shadow-black text-black placeholder:text-blue-950  "
                            type={"Email"}
                            value={email}
                            onChange={handleEmail}
                            placeholder="Email"
                        />
                        <div className="flex flex-col gap-2" >
                        <label className="text-black font-semibold w-full">
                            Username
                        </label>
                        <input
                            className="rounded-sm border-black  w-full p-2 bg-stone-100 shadow-inner shadow-black text-black placeholder:text-blue-950 "
                            type={"text"}
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Username"
                        />
                        </div>
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

                    <div className={"flex  items-center justify-center"}>
                        <a href={"/signup"}
                             className=" rounded-md bg-blue-one text-white text-xl flex items-center justify-center px-5 py-2 shadow-inner hover:bg-blue-two hover:shadow-lg hover:shadow-black focus:bg-blue-600 focus:shadow-inner focus:shadow-black ">
                            SignUp
                        </a>

                        <a className="text-stone-700 text-md font-medium flex "
                            href="/">

                        </a>
                    </div>
                    <div className="mt-4 flex flex-row items-center justify-center gap-2">
                        <h2 className="text-sm font-light ">Have an acount?</h2>
                        <a className="text-blue-600 text-md font-medium "
                            href="/login">
                            LogIn
                        </a>
                    </div>

                </div>

            </GlobalLayout>

        </div>
    )
}
export default SignupPage;