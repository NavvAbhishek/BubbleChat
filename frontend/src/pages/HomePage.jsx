import { Link } from "react-router-dom";
import heroImg from "../assets/hero_img.jpg";
import Footer from "../components/Footer";

const MessageCircleIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const ImageIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

const ShieldCheckIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HomePage = () => {
  const features = [
    {
      icon: <MessageCircleIcon className="w-6 h-6 text-amber-600" />,
      text: "Real-time Messaging",
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-teal-600" />,
      text: "Send Images & Files",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />,
      text: "Secure & Private",
    },
  ];

  return (
    <div className="container mx-auto px-12 py-12 bg-slate-50 text-slate-800 flex-1 flex items-center justify-center">
      <main className="flex-grow flex">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Bubble Chat
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg text-slate-600">
                Chat with your friends and colleagues in a secure and seamless
                environment. Stay connected with real-time messaging, voice
                calls, and more!
              </p>

              <ul className="mt-8 space-y-4 inline-block text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div
                      className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                        index === 0
                          ? "bg-amber-100"
                          : index === 1
                          ? "bg-teal-100"
                          : "bg-indigo-100"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <span className="ml-4 text-lg font-semibold text-slate-700">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button
                className="inline-block bg-amber-500 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                   <Link to={"/chat"}>Lets chat</Link>
                </button>
                
              </div>
            </div>

            <div className="flex items-center justify-center order-1 lg:order-2">
              <img
                src={heroImg}
                 className="rounded-2xl shadow-2xl w-[550px] lg:w-[800px] h-auto object-cover"
                alt="BubbleChat Homepage Image"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
