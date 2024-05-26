const CustomerStatus = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title">Total Products</div>
        <div className="stat-value">4.2K</div>
      </div>

      <div className="stat">
        <div className="stat-title">Successful delivery</div>
        <div className="stat-value">20.5K</div>
      </div>

      <div className="stat">
        <div className="stat-title">Pending delivery</div>
        <div className="stat-value">36</div>
      </div>
    </div>
  );
};

export default CustomerStatus;
