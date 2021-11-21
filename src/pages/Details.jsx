import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { addRejected, addShortlisted } from "../redux/dataSlice";

export default function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const { all } = useSelector((state) => state.data);

  function handleShortlisted() {
    const item = all.filter((ele) => ele.id === id);
    dispatch(addShortlisted(item[0]));
    navigate("/");
  }
  function handleRejected() {
    const item = all.filter((ele) => ele.id === id);
    dispatch(addRejected(item[0]));
    navigate("/");
  }
  return (
    <div className="details container">
      {all
        .filter((ele) => ele.id === id)
        .map((item) => (
          <div className="details-card" key={item.id}>
            <div className="card-img">
              <img src={item.Image} alt="" />
            </div>
            <div className="card-content">
              <div className="card-name">Name : {item.name}</div>
              <div className="card-name">Id : {item.id}</div>
              <div className="details-card-buttons">
                <button onClick={handleShortlisted}>Shortlisted</button>
                <button onClick={handleRejected}>Rejected</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
