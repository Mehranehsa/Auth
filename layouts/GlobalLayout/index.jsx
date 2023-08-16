const GlobalLayout = (props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center  bg-blue-800 flex-row ">
      <div className=" bg-white rounded-xl  shadow-xl shadow-slate-900 p-4 z-10 ">
        <div className="flex flex-col gap-3 items-center justify-center ">
          <img src="/image/doctor.png" className="w-9 h-8" />
          <header className="  text-3xl font-bold text-black  mb-10 text-shadow-white ">
            {props.headerText}
          </header>
        </div>
        {props.children}
      </div>
      <div className="  -translate-x-[2rem] drop-shadow-md shadow-black">
        <img
          src="/image/61802.jpg"
          className=" h-96 rounded-xl hidden md:block "
        />
      </div>
    </div>
  );
};
export default GlobalLayout;
