import { btnArray } from "../helpers/const";

const TopStatusBar = ({ filter, setFilter }) => {
  return (
    <div className="col">
      <div
        id="topStatusBar"
        className="btn-group"
        role="group"
        aria-label="..."
      >
        {btnArray.map((btn) => (
          <button
            key={btn.active}
            onClick={() => setFilter({ ...filter, status: btn.active })}
            className={`btn btn-light ${
              filter.status === btn.active ? "active" : ""
            }`}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopStatusBar;
