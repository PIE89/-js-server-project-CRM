import { Link } from "react-router-dom";
import { btnArray } from "../helpers/const";

const LeftPanel = ({ filter, setFilter, statusNew }) => {
  return (
    <div className="left-panel blue-skin">
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">
          учебный проект webcademy
        </div>
      </div>

      <div className="left-panel__user clearfix">
        <div className="left-panel__user-photo">
          <img src={"./img/D85_7973-2.jpg"} alt="Avatar" />
        </div>
        <div className="left-panel__user-name">
          Иван <br />
          Попов
        </div>
      </div>
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
          {btnArray.map((btn) => (
            <li key={btn.active}>
              <Link
                to="#"
                onClick={() => setFilter({ ...filter, status: btn.active })}
                className={btn.active === filter.status ? "active" : ""}
              >
                {btn.name}
                {btn.active === "new" && statusNew > 0 ? (
                  <div className="badge" id="badge-new">
                    {statusNew}
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
