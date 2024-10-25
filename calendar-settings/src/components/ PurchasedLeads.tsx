import React, { useState } from 'react';
import moment from 'moment-timezone';
import { saveAs } from 'file-saver';

const PurchasedLeads = () => {
  const [timezone, setTimezone] = useState(moment.tz.guess());

  const leads = [
    { industry: 'Web Design', leads: 3105, creditsSpent: '$100', date: '1st October' },
    { industry: 'House Cleaning', leads: 100, creditsSpent: '$50', date: '2nd October' },
  ];

  const downloadCSV = () => {
    const csvContent = [
      ['Industry', 'No. of Leads', 'Credits Spent', 'Date'],
      ...leads.map((lead) => [lead.industry, lead.leads, lead.creditsSpent, lead.date])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'purchased_leads.csv');
  };

  return (
    <div className="tw-bg-white tw-p-4 tw-rounded-lg">
      <div className="tw-overflow-x-auto">
        <table className="tw-min-w-full tw-bg-white">
          <thead>
            <tr className="tw-bg-gray-200">
              <th className="tw-px-4 tw-py-2">Industry</th>
              <th className="tw-px-4 tw-py-2">No. of Leads</th>
              <th className="tw-px-4 tw-py-2">Credits Spent</th>
              <th className="tw-px-4 tw-py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="tw-border">
                <td className="tw-px-4 tw-py-2">{lead.industry}</td>
                <td className="tw-px-4 tw-py-2">{lead.leads}</td>
                <td className="tw-px-4 tw-py-2">{lead.creditsSpent}</td>
                <td className="tw-px-4 tw-py-2">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button 
        onClick={downloadCSV} 
        className="tw-mt-4 tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded"
      >
        Export as CSV
      </button>
    </div>
  );
};

export default PurchasedLeads;
