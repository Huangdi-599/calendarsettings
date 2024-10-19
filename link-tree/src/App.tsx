import React from 'react';
import UserProfile from './components/UserProfile';
import BusinessLinks from './components/BusinessLinks';
import SocialMediaIcons from './components/SocialMediaIcons';

const businessData = {
  success: true,
  businessLink: {
    _id: "64aabcf6fc13ae1d5c00000a",
    userId: { 
      username: "John Doe", 
      photo: "https://via.placeholder.com/150" 
    },
    profileUrl: "https://yourwebsite.com/johndoe",
    businessWebsites: [
      { businessName: "Business One", businessUrl: "https://businessone.com" },
      { businessName: "Business Two", businessUrl: "https://businesstwo.com" }
    ],
    settings: {
      textColor: "#000000",
      backgroundColor: "#FFFFFF",
      backgroundImageUrl: null,
      buttonColor: "#FF5733",
      description: "A creative and magical business profile"
    },
    createdAt: "2024-10-01T12:34:56.789Z",
    updatedAt: "2024-10-01T14:56:78.123Z"
  }
};

const App: React.FC = () => {
  const { businessLink } = businessData;
  const { userId, businessWebsites, settings } = businessLink;

  // Dynamic Styles
  const dynamicStyles = {
    color: settings.textColor || "#000",
    backgroundColor: settings.backgroundColor || "#FFF",
    backgroundImage: settings.backgroundImageUrl ? `url(${settings.backgroundImageUrl})` : 'none',
    buttonColor: settings.buttonColor || "#007BFF"
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundColor: dynamicStyles.backgroundColor,
        backgroundImage: dynamicStyles.backgroundImage,
        color: dynamicStyles.color,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* User Profile */}
      <UserProfile 
        username={userId.username} 
        photo={userId.photo} 
        description={settings.description || "Welcome to the profile"} 
      />
      
      {/* Business Links */}
      <BusinessLinks businessWebsites={businessWebsites} buttonColor={dynamicStyles.buttonColor} />
      
      {/* Social Media Icons */}
      <SocialMediaIcons buttonColor={dynamicStyles.buttonColor} />
    </div>
  );
};

export default App;
