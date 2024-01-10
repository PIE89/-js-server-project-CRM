import { useState } from "react";
import { serverPath } from "../helpers/path";
import { useNavigate } from "react-router-dom";

const CardInformation = ({ data }) => {
  const [product, setProduct] = useState(data.product);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [status, setStatus] = useState(data.status);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObj = {
      name: name,
      product: product,
      email: email,
      phone: phone,
      status: status,
    };

    fetch(serverPath + "requests/" + data.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    }).then((res) => {
      if (res.ok) {
        navigate("/table");
        console.log("Data changed!!!");
      }
    });
  };

  return (
    <div className="row">
      <div className="col">
        <form id="form" onSubmit={handleSubmit}>
          <div className="card mb-4">
            <div className="card-header">Данные о заявке</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>ID:</strong>
                </div>
                <div className="col">
                  Заявка №<span id="number">{data.id}</span>
                </div>
                <input name="id" type="hidden" id="id" />
              </div>

              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>Дата создания:</strong>
                </div>
                <div className="col" id="date">
                  {data.date}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>Продукт:</strong>
                </div>
                <div className="col">
                  <select
                    id="product"
                    name="product"
                    className="custom-select"
                    onChange={(e) => {
                      setProduct(e.target.value);
                    }}
                    value={product}
                  >
                    <option value="course-html">Курс по верстке</option>
                    <option value="course-js">Курс по JavaScript</option>
                    <option value="course-vue">Курс по VUE JS</option>
                    <option value="course-php">Курс по PHP</option>
                    <option value="course-wordpress">Курс по WordPress</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>Имя:</strong>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="name"
                    name="name"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>Email:</strong>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>Телефон:</strong>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => {
                      setPhone(+e.target.value);
                    }}
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>Статус заявки:</strong>
                </div>
                <div className="col">
                  <select
                    className="custom-select"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    name="status"
                  >
                    <option disabled>Выберите...</option>
                    <option value="new">Новая</option>
                    <option value="inwork">В работе</option>
                    <option value="complete">Завершена</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col text-right">
              <button type="submit" className="btn btn-primary">
                Сохранить изменения
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardInformation;
