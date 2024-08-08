import './index.css';

const SpecificSite = props => {
  const {siteDetails, deleteHistoryItem} = props;
  const {id, timeAccessed, logoUrl, title, domainUrl} = siteDetails;

  const onDelete = () => {
    deleteHistoryItem(id);
  };

  return (
    <li className="history-item">
      <div className="site-details">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <div className="site-info">
          <p className="site-title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button type="button" className="delete-button" onClick={onDelete} data-testid="delete">
        <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" />
      </button>
    </li>
  );
};

export default SpecificSite;
