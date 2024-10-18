import React from 'react';

interface SettingsProps {
  textColor: string;
  backgroundColor: string;
  buttonColor?: string;
  description?: string;
}

const Settings: React.FC<SettingsProps> = ({ textColor, backgroundColor, buttonColor, description }) => {
  return (
    <div className={`p-4`} style={{ color: textColor, backgroundColor }}>
      {description && <p className="mb-4">{description}</p>}
      {buttonColor && (
        <button className={`px-4 py-2`} style={{ backgroundColor: buttonColor }}>
          Sample Button
        </button>
      )}
    </div>
  );
};

export default Settings;
