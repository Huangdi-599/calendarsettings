import React from 'react';

interface UserProfileProps {
  username: string;
  photo: string;
  description: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, photo, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={photo}
        alt={username}
        className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
      />
      <h1 className="mt-4 text-xl font-bold text-white">{username || "No Username"}</h1>
      <p className="mt-2 text-sm text-gray-200">{description || "No description provided."}</p>
    </div>
  );
};

export default UserProfile;
