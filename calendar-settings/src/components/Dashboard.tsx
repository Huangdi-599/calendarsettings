import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="tw-flex tw-flex-col tw-h-screen">
      {/* Navbar */}
      <nav className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-px-6 tw-bg-white tw-border-b tw-border-gray-300">
        {/* Logo */}
        <div>
          <img src="/logo.svg" alt="Logo" className="tw-h-8" />
        </div>
        
        {/* Right Navbar Items */}
        <div className="tw-flex tw-items-center">
        <a href="#" className="tw-mr-6 tw-text-gray-500 tw-border-b-4 tw-border-blue-500">Dashboard</a>
          <a href="#" className="tw-mr-6 tw-text-gray-500">Leads</a>
          <a href="#" className="tw-mr-6 tw-text-gray-500">My Responses</a>
          <a href="#" className="tw-mr-6 tw-text-gray-500">Settings</a>
          <a href="#" className="tw-mr-6 tw-text-gray-500">Help</a>
          
          {/* Profile Avatar */}
          <div className="tw-flex tw-items-center tw-ml-6">
            <div className="tw-bg-pink-500 tw-text-white tw-rounded-full tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center">
              P
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="tw-flex tw-flex-grow tw-px-6 tw-pt-6 tw-bg-gray-100">
        {/* Left section - Profile Card */}
        <div className="tw-w-1/3 tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-mr-4">
          <div className="tw-flex tw-items-center tw-mb-4">
            <div className="tw-bg-pink-500 tw-text-white tw-rounded-full tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center">
              P
            </div>
            <div className="tw-ml-4">
              <h3 className="tw-text-lg tw-font-semibold">Puzzle Piece Solutions</h3>
              <div className="tw-flex tw-items-center">
                {/* Progress Circle */}
                <div className="tw-relative tw-h-6 tw-w-6 tw-mr-2">
                  <svg className="tw-absolute tw-top-0 tw-left-0" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e5e5"
                      strokeWidth="4"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="none"
                      stroke="#ff4b82"
                      strokeWidth="4"
                      strokeDasharray="27, 100"
                    />
                  </svg>
                  <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-text-sm tw-font-semibold">27%</div>
                </div>
                <p className="tw-text-gray-500">Your profile is 27% complete</p>
              </div>
              <a href="#" className="tw-text-blue-500">Edit profile</a>
            </div>
          </div>
          
          <div>
            <h3 className="tw-text-lg tw-font-semibold">Get started</h3>
            <p className="tw-text-gray-500">
              20% OFF STARTER PACK OFFER Respond to up to 10 customers 20% off and get a free upgrade on advanced tools.{' '}
              <a href="#" className="tw-text-blue-500">More info</a>
            </p>
          </div>
          
          <div className="tw-mt-6">
            <h3 className="tw-text-lg tw-font-semibold">Help</h3>
            <p className="tw-text-gray-500">Visit help center for tips & advice.</p>
            <p className="tw-text-gray-500">Email: team@bark.com</p>
            <p className="tw-text-gray-500">Call: 020 3697 0237</p>
          </div>
        </div>

        {/* Right Section - Lead Settings */}
        <div className="tw-w-2/3 tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6">
          <div>
            <h3 className="tw-text-lg tw-font-semibold">Lead settings</h3>
            <p className="tw-text-gray-500">
              Services: Marketing Agencies, Social Media Marketing +4
            </p>
            <div className="tw-flex tw-items-center tw-text-gray-500 tw-mt-2">
              {/* Inline SVG for Location Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="tw-w-6 tw-h-6 tw-mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.75c4.5-4.125 7.5-7.875 7.5-11.25a7.5 7.5 0 10-15 0c0 3.375 3 7.125 7.5 11.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.25a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
                />
              </svg>
              <span>Nationwide</span>
            </div>
            <p className="tw-text-gray-500 tw-mt-2">Estimated 100 leads per day</p>
            <p className="tw-text-gray-500">Sending new leads to</p>
            <p className="tw-text-blue-500">isac.odley@puzzlepiecesolutions.com</p>
            <a href="#" className="tw-text-blue-500">Change</a>
          </div>

          <div className="tw-mt-6 tw-flex">
            <div className="tw-mr-4">
              <h3 className="tw-text-lg tw-font-semibold">Leads</h3>
              <p className="tw-text-blue-500 tw-text-2xl tw-font-semibold">783</p>
              <p className="tw-text-gray-500">Leads</p>
            </div>
            <div>
              <h3 className="tw-text-lg tw-font-semibold">Unread leads</h3>
              <p className="tw-text-blue-500 tw-text-2xl tw-font-semibold">782</p>
              <p className="tw-text-gray-500">Unread leads</p>
            </div>
          </div>
          <div className="tw-mt-6">
            <h3 className="tw-text-lg tw-font-semibold">Responses</h3>
            <p className="tw-text-gray-500">You haven't responded to any leads yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
