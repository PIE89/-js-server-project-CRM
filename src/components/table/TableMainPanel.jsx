import { Link } from "react-router-dom";

const MainPanel = ({ data }) => {
  return (
    <table className="table fs-14">
      <thead>
        <tr>
          <th>ID</th>
          <th>дата</th>
          <th>продукт</th>
          <th>имя</th>
          <th>email</th>
          <th>телефон</th>
          <th>статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tbody">
        {data.map((request) => (
          <tr key={request.id}>
            <th scope="row">{request.id}</th>
            <td>{request.date}</td>
            <td>
              {request.product === "course-html"
                ? "Курс по верстке"
                : request.product === "course-js"
                ? "Курс по JavaScript"
                : request.product === "course-vue"
                ? "Курс по VUE JS"
                : request.product === "course-php"
                ? "Курс по PHP"
                : "Курс по WordPress"}
            </td>
            <td>{request.name}</td>
            <td>{request.email}</td>
            <td>{request.phone}</td>
            <td>
              <div
                className={
                  request.status === "new"
                    ? "badge badge-pill badge-danger"
                    : request.status === "inwork"
                    ? "badge badge-pill badge-warning"
                    : "badge badge-pill badge-success"
                }
              >
                {request.status === "new"
                  ? "Новый"
                  : request.status === "inwork"
                  ? "В работе"
                  : "Завершенный"}
              </div>
            </td>
            <td>
              <Link to={`/edit/${request.id}`}>Редактировать</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainPanel;
