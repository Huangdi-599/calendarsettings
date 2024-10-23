import React from 'react';
// LocationIcon SVG Component
const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#2F2F2F"/>
  </svg>
);
// CheckboxIcon SVG Component (for the select all leads checkbox)
const CheckboxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Checkbox path */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4.5h16c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-12c0-.827.673-1.5 1.5-1.5zM9.707 14.207l-3-3a1 1 0 1 1 1.414-1.414L10 11.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0z"
      fill="#2F2F2F"
    />
  </svg>
);

// LeadList Component
const LeadList: React.FC = () => {
  const leads = [
    {
      name: 'Michael',
      location: 'Nationwide',
      timeAgo: '1m ago',
      description: 'Terms and conditions should contain what are not liable for...',
      credits: 36,
      isPaymentVerified: true,
      hasHighIntent: true,
    },
    {
      name: 'Sue',
      location: 'Nationwide',
      timeAgo: '1m ago',
      description: 'Terms and conditions should contain what are not liable for...',
      credits: 36,
      isPaymentVerified: false,
      hasHighIntent: false,
    },
  ];

  return (
    <div className="tw-p-8 tw-w-full tw-max-w-3xl tw-mx-auto">
      {/* Header Section */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
        <div>
          <h1 className="tw-text-3xl tw-font-bold">
            <span className="tw-text-black">91</span> matching leads
          </h1>
          <div className="tw-flex tw-items-center tw-text-gray-500 tw-mt-2">
  <LocationIcon /> 
  <span className="tw-ml-2">2 locations</span>
    </div>

        </div>

       
<div className="tw-flex tw-items-center tw-text-gray-800">
  {/* Checkbox with red background */}
  
  <span className="tw-font-bold">Select all leads</span> {/* Text is now bold */}
  <div className="tw-flex tw-items-center tw-bg-red-500 tw-rounded tw-w-6 tw-h-6 tw-justify-center tw-text-white tw-mr-2">
    <CheckboxIcon /> {/* Checkbox icon */}
  </div>
</div>


      </div>

      {/* Tab Section */}
      <div className="tw-flex tw-border-b tw-mb-4">
        <button className="tw-text-pink-500 tw-font-bold tw-pb-2 tw-border-b-2 tw-border-pink-500 tw-mr-4">
          Best matches
        </button>
        <button className="tw-text-gray-400 tw-font-medium tw-pb-2">Most recent</button>
      </div>

      {/* Leads List */}
      {leads.map((lead, idx) => (
        <div className="tw-border-t tw-border-b tw-py-4 tw-mb-4 tw-flex tw-flex-col" key={idx}>
          {/* Lead Header Section */}
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
            <div className="tw-flex tw-items-center">
              <div className={`tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold ${
                lead.name.charAt(0) === 'M' ? 'tw-bg-yellow-500' : 'tw-bg-green-500'
              }`}>
                {lead.name.charAt(0)}
              </div>
              <div className="tw-ml-4">
                <h3 className="tw-text-lg tw-font-semibold">{lead.name}</h3>
                <p className="tw-text-sm tw-text-gray-500 tw-flex tw-items-center">
                  <LocationIcon /> <span className="tw-ml-2">{lead.location}</span>
                </p>
              </div>
            </div>
            <span className="tw-bg-blue-100 tw-text-blue-700 tw-font-medium tw-px-2 tw-py-1 tw-rounded-lg tw-text-sm">
              {lead.timeAgo}
            </span>
          </div>

          {/* Lead Description */}
          <p className="tw-text-sm tw-text-gray-700 tw-mb-4 tw-leading-6">{lead.description}</p>

          {/* Lead Tags Section */}
          <div className="tw-flex tw-items-center tw-mb-4">
            {lead.isPaymentVerified && (
              <div className="tw-flex tw-items-center tw-bg-blue-100 tw-text-blue-700 tw-px-2 tw-py-1 tw-rounded-lg tw-mr-3">
                {/* Add Payment Verified Icon */}
                <span className="tw-ml-1 tw-font-medium">Payment verified</span>
              </div>
            )}
            {lead.hasHighIntent && (
              <div className="tw-flex tw-items-center tw-bg-green-100 tw-text-green-700 tw-px-2 tw-py-1 tw-rounded-lg">
                <span className="tw-ml-1 tw-font-medium">High hiring intent</span>
              </div>
            )}
          </div>

          {/* Lead Footer Section */}
          <div className="tw-flex tw-justify-between tw-items-center">
            <p className="tw-text-gray-600 tw-text-sm">
              <span className="tw-text-pink-500 tw-font-bold">C</span> {lead.credits} Credits
            </p>
            <button className="tw-bg-pink-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-font-semibold">
              Buy Lead
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadList;
