import './DealOfTheDay.css'; // Assuming custom CSS for styling

const DealOfTheDay = () => {
  return (
    <div className="deal-of-the-day-container">
      <div className="deal-content">
        <img 
          src="path-to-earbuds-image.png" 
          alt="Earbuds" 
          className="deal-image"
        />
        <div className="deal-text">
          <p className="deal-subtitle">Every day shopping</p>
          <h2 className="deal-title">Deal of the Day</h2>
          <button className="shop-now-button">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
