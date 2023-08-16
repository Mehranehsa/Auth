import { useState } from "react";

const EmailSentPage = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="w-screen h-screen items-center justify-center flex  bg-blue-800 flex-row    ">
      <div className=" bg-white rounded-xl flex justify-center items-center flex-col  shadow-xl shadow-slate-900 p-4  gap-3">
        <img src="/image/doctor.png" className="w-9 h-8 " />

        <h2 className="text-lg font-semibold" >E-mail Sent! Please Check Your E-mail.</h2>

        <div className="flex flex-row">
        <h2 className="text-md font-normal mr-2">continue to</h2>
        <a href="/login" className=" text-blue-600 text-md font-medium  ">login</a>
        </div>
      </div>
    </div>
  );
};
export default EmailSentPage;
