import { Link } from "react-router-dom";
import heroImg from "../assets/hero_img.jpg";

const HomePage = () => {
  return (
    <div className="bg-white h-[calc(100vh-64px)] text-black flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to{" "}
        <span className=" bg-lightYellow px-2 py-1 rounded-lg text-blue">Bubble Chat</span>
      </h1>
      <img src={heroImg} className="h-80 rounded-xl" alt="hero_image" />
      <p className="text-md my-6">
        Chat with your friends and colleagues in a secure and seamless
        environment. <br /> Stay connected with real-time messaging, voice
        calls, and more!
      </p>
      <div className="flex justify-center space-x-6 text-deepBlue">
        <div className="text-lg font-semibold">Real-time Messaging</div>
        <div className="text-lg font-semibold">Send Images</div>
        <div className="text-lg font-semibold">Secure & Private</div>
      </div>
      <button className="bg-lightYellow text-deepBlue text-lg px-6 py-2 rounded-lg mt-4 cursor-pointer font-bold">
        <Link to={"/chat"}>Lets chat</Link>
      </button>
    </div>
  );
};

export default HomePage;
