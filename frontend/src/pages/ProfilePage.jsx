import React, { useState } from "react";
import { Camera } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import avatarImg from "../assets/avatar.png";

const ProfilePage = () => {
  const userData = {
    memberSince: "2023-01-15",
    isActive: true,
    bio: "Loves coding, hiking, and coffee. Exploring the world one line of code at a time.",
    location: "Sri Lanka",
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative flex-shrink-0">
              <img
                src={selectedImg || authUser.profilePic || avatarImg}
                alt="avatar"
                className="size-32 rounded-full object-cover border-4"
              />
              {/* Camera Icon Overlay */}
              <label
                htmlFor="avator-upload"
                className={`
                  absolute bottom-0 right-0
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer
                  transition-all duration-200
                  ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }
                `}
              >
                <Camera size={20} className="text-gray-700" />
                <input
                  type="file"
                  id="avator-upload"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-800">
                {authUser.fullName}
              </h1>
              <p className="text-sm text-gray-600">{authUser.email}</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  userData.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {userData.isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Member since: {formatDate(userData.memberSince)}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              About Me
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {userData.bio || "No bio provided."}
            </p>
          </div>
          {userData.location && (
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Location
              </h2>
              <p className="text-gray-600 text-sm">{userData.location}</p>
            </div>
          )}
        </div>
        <div className="p-6 border-t border-gray-200 text-right">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
