import IonIcon from "@reacticons/ionicons";
import Logo from "../assets/logo.svg"
import BuiltWithAppWrite from "../assets/built-with-appwrite.svg";
export default function Auth() {
  return (
    <div className="flex gap-5  flex-col items-center justify-center h-screen bg-gradient-to-r from-rose-50 to-teal-50">
      <div className="w-80 md:w-96 bg-white rounded-xl p-5 md:p-10 flex flex-col gap-5 shadow-rose-100 shadow-xl">
        <img className="w-48 logo" src={Logo} alt="" />
        <div className="flex flex-col gap-2">
          <span>Email</span>
          <input
            type="text"
            className="w-full border focus:ring-0 rounded h-10 px-2"
            placeholder="Example : mail@hosenur.dev"
            name=""
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Password</span>
          <input
            type="password"
            className="w-full border focus:ring-0 rounded h-10 px-2"
            placeholder="Super Strong Password"
            name=""
            id="password"
          />
        </div>

        <button className="bg-secondary hover:bg-primary transition-all ease-in-out duration-200 p-2 rounded text-white">Login</button>
        <hr />
        <div className="flex items-center justify-center  gap-2 text-2xl">
            <IonIcon name="logo-google" className="bg-rose-100 p-2 rounded-full text-neutral-600 hover:text-neutral-800 transition-all ease-in-out duration-200 cursor-pointer" />
            <IonIcon name="logo-github" className="bg-rose-100 p-2 rounded-full text-neutral-600 hover:text-neutral-800 transition-all ease-in-out duration-200 cursor-pointer" />
            <IonIcon name="logo-twitter" className="bg-rose-100 p-2 rounded-full text-neutral-600 hover:text-neutral-800 transition-all ease-in-out duration-200 cursor-pointer" />

            </div>
      </div>
      <img src={BuiltWithAppWrite} alt="" className="w-48" />
    </div>
  );
}