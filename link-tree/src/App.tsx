import React from 'react';
import UserProfile from './components/UserProfile';
import BusinessLinks from './components/BusinessLinks';
import SocialMediaIcons from './components/SocialMediaIcons';

const businessData = {
  userId: { 
    username: "John Doe", 
    photo: "https://via.placeholder.com/150", 
    description: "A creative and magical business specialist." 
  },
  businessWebsites: [
    { businessName: "Class Schedule", businessUrl: "https://classschedule.com" },
    { businessName: "Studio Info", businessUrl: "https://studioinfo.com" },
    { businessName: "Upcoming Events", businessUrl: "https://events.com" },
    { businessName: "About", businessUrl: "https://about.com" }
  ]
};

const App: React.FC = () => {
  const { userId, businessWebsites } = businessData;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #f5af19, #f12711, #0f2027)',
      }}
    >
      {/* User Profile Section */}
      <UserProfile 
        username={userId.username} 
        photo={userId.photo} 
        description={userId.description} 
      />
      
      {/* Business Links Section */}
      <BusinessLinks businessWebsites={businessWebsites} />
      
      {/* Social Media Icons Section */}
      <SocialMediaIcons />
    </div>
  );
};

export default App;
