import { useEffect, useState } from "react";
import getTestData from "../helpers/TestData";
import { $api } from "../api/$api";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");

  const setForm = () => {
    const { name, phone, email, product } = getTestData();
    setName(name);
    setPhone(phone);
    setEmail(email);
    setProduct(product);
  };

  useEffect(() => {
    document.body.className = "with-nav radial-bg flex-center";
    setForm();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArray = {
      date: new Intl.DateTimeFormat("ru-RU").format(new Date()),
      status: "new",
      name,
      phone,
      email,
      product,
    };

    // fetch(serverPath + "requests/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newArray),
    // }).then(() => console.log("New post was added"));
    $api
      .post("requests/", newArray, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => console.log("New post was added"))
      .catch((error) => console.error("Error: ", error));

    setForm();
  };

  return (
    <div className="white-plate white-plate--payment">
      <div className="container-fluid">
        <div className="white-plate__header text-center">
          <p className="white-plate__logo">
            <span>Форма</span> заявок
          </p>
        </div>
        <div className="white-plate__line-between white-plate__line-between--main"></div>

        <form id="form" method="POST" onSubmit={handleSubmit}>
          <label>Ваши данные:</label>

          <div className="form-group">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              autoComplete="on"
              className="form-control"
              placeholder="Имя и Фамилия"
              required
            />
          </div>

          <div className="form-group">
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              name="phone"
              autoComplete="on"
              className="form-control"
              placeholder="Телефон"
            />
          </div>

          <div className="form-group">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              autoComplete="on"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Продукт:</label>

            <select
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
              id="product"
              name="product"
              className="form-control"
            >
              <option value="course-html">Курс по верстке</option>
              <option value="course-js">Курс по JavaScript</option>
              <option value="course-vue">Курс по VUE JS</option>
              <option value="course-php">Курс по PHP</option>
              <option value="course-wordpress">Курс по WordPress</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Оформить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
