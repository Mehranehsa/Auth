import { useState } from "react";



const ForgotPage = () => {
    const [email, setEmail] =
        useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className="w-screen h-screen items-center justify-center flex  bg-blue-800 flex-row    ">
            <div className=" bg-white rounded-xl flex justify-center items-center flex-col  shadow-xl shadow-slate-900 p-4  gap-3"
            >

                <img src="/image/doctor.png" className="w-9 h-8 "  />
                <header className="  text-3xl font-bold text-black  mb-10 text-shadow-white ">
                    Forgot your pass?
                </header>
                <h2>
                    enter your E-mail
                  
                </h2>
                <input
                    className="rounded-sm border-black  w-full p-2 bg-stone-100 shadow-inner shadow-black text-black placeholder:text-blue-950 mb-4 "
                    type={"Email"}
                    value={email}
                    onChange={handleEmail}
                    placeholder="Email"
                />
                    <a href={"/forgot"}
                            className=" rounded-md bg-blue-one text-white text-xl flex items-center justify-center px-3 py-2 mx-16  shadow-inner hover:bg-blue-two hover:shadow-lg hover:shadow-black focus:bg-blue-600 focus:shadow-inner focus:shadow-black">
                            Submit
                        </a>
            </div>
        </div>

    )
}
export default ForgotPage;