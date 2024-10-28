import React, { useState } from 'react';

const Feedback = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');

  // Emoji options with ratings
  const emojis = [
    { id: 1, symbol: '😞', label: 'Very Dissatisfied' },
    { id: 2, symbol: '😐', label: 'Dissatisfied' },
    { id: 3, symbol: '😐', label: 'Neutral' },
    { id: 4, symbol: '😊', label: 'Satisfied' },
    { id: 5, symbol: '😁', label: 'Very Satisfied' }
  ];

  const handleEmojiClick = (id) => {
    setSelectedEmoji(id);
    console.log(`Selected feedback: ${emojis.find((emoji) => emoji.id === id).label}`);
  };

  const handleFeedbackSubmit = () => {
    if (selectedEmoji && feedbackText) {
      console.log(`Feedback submitted: ${feedbackText}, Rating: ${emojis.find((emoji) => emoji.id === selectedEmoji).label}`);
      // Reset feedback form
      setSelectedEmoji(null);
      setFeedbackText('');
    } else {
      console.log("Please provide a rating and feedback text.");
    }
  };

  return (
    <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-md tw-max-w-md tw-mx-auto">
      <h2 className="tw-text-2xl tw-font-bold tw-text-center tw-text-pink-600">
        We'd Love Your Feedback!
      </h2>
      <p className="tw-text-center tw-text-gray-600 tw-mb-4">
        Help us improve our service by sharing your experience
      </p>

      <p className="tw-text-lg tw-font-medium tw-mb-2">
        How would you rate our customer service?
      </p>
      
      <div className="tw-flex tw-justify-center tw-my-4">
        {emojis.map((emoji) => (
          <button
            key={emoji.id}
            onClick={() => handleEmojiClick(emoji.id)}
            className={`tw-mx-1 tw-text-2xl tw-transition-transform tw-duration-200 ${
              selectedEmoji === emoji.id ? 'tw-opacity-100 tw-scale-150' : 'tw-opacity-70'
            }`}
            style={{ transition: 'transform 0.3s ease', opacity: selectedEmoji === emoji.id ? 1 : 0.7 }}
            aria-label={emoji.label}
          >
            {emoji.symbol}
          </button>
        ))}
      </div>

      <p className="tw-text-lg tw-font-medium tw-mb-2">
        Share your thoughts with us
      </p>
      
      <textarea
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        placeholder="Tell us about your experience..."
        className="tw-border tw-border-gray-300 tw-p-3 tw-w-full tw-rounded-md tw-mb-4"
      ></textarea>
      
      <button
        onClick={handleFeedbackSubmit}
        className="tw-w-full tw-bg-pink-600 tw-text-white tw-font-bold tw-py-2 tw-rounded-md tw-hover:bg-pink-700"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;
