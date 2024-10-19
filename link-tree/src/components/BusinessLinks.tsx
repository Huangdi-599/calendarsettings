import React from 'react';

interface BusinessLink {
  image?: string;  // Optional image field
  businessName: string;
  businessUrl: string;
}

interface BusinessLinksProps {
  businessWebsites: BusinessLink[];
  buttonColor: string;
}

const BusinessLinks: React.FC<BusinessLinksProps> = ({ businessWebsites, buttonColor }) => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      {businessWebsites.map((business, index) => (
        <a
          key={index}
          href={business.businessUrl}
          className="w-64 py-3 text-white rounded-full shadow-lg hover:opacity-90 flex items-center justify-center"
          style={{ backgroundColor: buttonColor }}  // Apply dynamic button color
        >
          {/* Check if the business has an image, and display it only for the first service */}
          {index === 0 && business.image && (
            <img
              src={business.image}
              alt={business.businessName}
              className="w-6 h-6 rounded-full mr-4"  // Space to the right of the image
            />
          )}
          <span className="flex-grow text-center">{business.businessName}</span>
        </a>
      ))}
    </div>
  );
};

export default BusinessLinks;
