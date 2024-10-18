import React from 'react';

interface BusinessLink {
  businessName: string;
  businessUrl: string;
}

interface BusinessLinksProps {
  businessWebsites: BusinessLink[];
}

const BusinessLinks: React.FC<BusinessLinksProps> = ({ businessWebsites }) => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      {businessWebsites.map((business, index) => (
        <a
          key={index}
          href={business.businessUrl}
          className="w-64 py-3 text-center bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-100"
        >
          {business.businessName}
        </a>
      ))}
    </div>
  );
};

export default BusinessLinks;
