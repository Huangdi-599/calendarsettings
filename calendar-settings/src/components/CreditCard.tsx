import React, { useMemo } from 'react';
import './CreditCard.css';
import chipImage from '../assets/chip.png';
import visaImage from '../assets/visa.png';
import mastercardImage from '../assets/mastercard.png';
import amexImage from '../assets/amex.png';
import discoverImage from '../assets/discover.png';
import troyImage from '../assets/troy.png';

// Import background images
import bg1 from '../assets/1.jpeg';
import bg2 from '../assets/2.jpeg';
import bg3 from '../assets/3.jpeg';
import bg4 from '../assets/4.jpeg';
import bg5 from '../assets/5.jpeg';
import bg6 from '../assets/6.jpeg';
import bg7 from '../assets/7.jpeg';

const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];

interface CreditCardProps {
  cardNumber: string;
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  isFlipped: boolean;
}

const CreditCard: React.FC<CreditCardProps> = ({
  cardNumber,
  cardHolder,
  expiryMonth,
  expiryYear,
  cvv,
  isFlipped,
}) => {
  const cardType = useMemo(() => {
    if (/^4/.test(cardNumber)) return visaImage;
    if (/^5[1-5]/.test(cardNumber)) return mastercardImage;
    if (/^3[47]/.test(cardNumber)) return amexImage;
    if (/^6/.test(cardNumber)) return discoverImage;
    if (/^9792/.test(cardNumber)) return troyImage;
    return visaImage; // Default to visa
  }, [cardNumber]);

  const cardBackground = useMemo(
    () => backgrounds[Math.floor(Math.random() * backgrounds.length)],
    []
  );

  return (
    <div className="card-item-wrapper">
      <div className={`card-item ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side of the Card */}
        <div
          className="card-item__side -front"
          style={{ backgroundImage: `url(${cardBackground})` }}
        >
          <div className="card-item__cover">
            <img src={chipImage} alt="Chip" className="card-item__chip" />
            <img src={cardType} alt="Card Type" className="card-item__type" />
          </div>
          <div className="card-item__details">
        <div className="card-item__number">{cardNumber || '#### #### #### ####'}</div>
        <div className="card-item__info">
            <div className="card-item__name-section">
            <div className="card-item__label">Card Holder</div>
            <div className="card-item__name">{cardHolder || 'FULL NAME'}</div>
            </div>
            <div className="card-item__expiry-section">
            <div className="card-item__label">Expires</div>
            <div className="card-item__expiry">
                {expiryMonth || 'MM'}/{expiryYear || 'YY'}
            </div>
            </div>
        </div>
        </div>

        </div>

        {/* Back Side of the Card */}
        <div
        className="card-item__side -back"
        style={{ backgroundImage: `url(${cardBackground})` }}
        >
        <div className="card-item__band"></div>
        <div className="card-item__cvv-container">
            <span className="card-item__cvv-label">CVV</span>
            <span className="card-item__cvv">{cvv || '***'}</span>
        </div>
        <img src={cardType} alt="Card Type" className="card-item__type-back" />
        </div>

      </div>
    </div>
  );
};

export default CreditCard;
