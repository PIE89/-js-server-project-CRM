import { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import MainPanel from "./TableMainPanel";
import TopStatusBar from "./TopStatusBar";
import ProductSelect from "./ProductSelect";
import { serverPath } from "../helpers/path";
import { $api } from "../api/$api";

const Table = () => {
  const [data, setData] = useState(null);

  const [filter, setFilter] = useState({
    status: "all",
    product: "all",
  });

  const [statusNew, setStatusNew] = useState(null);

  useEffect(() => {
    document.body.className = "with-nav body--dashboard";
  }, []);

  useEffect(() => {
    // fetch(
    //   serverPath +
    //     `requests?${filter.status === "all" ? "" : `status=${filter.status}&`}${
    //       filter.product === "all" ? "" : `product=${filter.product}`
    //     }`
    // )
    //   .then((res) => res.json())
    //   .then((result) => setData(result));

    $api
      .get("requests", {
        params: {
          status: filter.status === "all" ? undefined : filter.status,
          product: filter.product === "all" ? undefined : filter.product,
        },
      })
      .then((res) => setData(res.data));
  }, [filter]);

  useEffect(() => {
    // fetch(serverPath + "requests?status=new")
    //   .then((res) => res.json())
    //   .then((result) => setStatusNew(result.length));
    $api
      .get("requests", {
        params: {
          status: "new",
        },
      })
      .then((res) => setStatusNew(res.data.length));
  }, []);

  return (
    <div>
      <LeftPanel filter={filter} setFilter={setFilter} statusNew={statusNew} />

      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <div className="row mb-3 justify-content-start">
            <TopStatusBar filter={filter} setFilter={setFilter} />

            <ProductSelect filter={filter} setFilter={setFilter} />
          </div>
          {data && <MainPanel data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Table;
