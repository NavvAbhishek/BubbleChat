import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "../components/NoChatSelected";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";

const ChatPage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-[calc(100vh-64px)] bg-base-200">
      <div className="flex items-center justify-center pt-12 px-4">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
