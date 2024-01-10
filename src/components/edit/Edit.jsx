import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import { serverPath } from "../helpers/path";
import CardInformation from "./CardInformation";

const Edit = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(serverPath + "requests/" + id);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "with-nav";
  }, []);

  const deleteCard = (e) => {
    e.preventDefault();

    fetch(serverPath + "requests/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        navigate("/table");
        console.log("Deleted Succesfully");
      }
    });
  };

  return (
    <div className="form-wrapper">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="admin-heading-1">Работа с заявкой</div>
            </div>

            <div className="col text-right">
              <Link to="/table" className="btn btn-link">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "red" }}
                  onClick={deleteCard}
                >
                  Удалить карту
                </button>
              </Link>
            </div>
          </div>

          <CardInformation data={data} />
        </div>
      )}
    </div>
  );
};

export default Edit;
