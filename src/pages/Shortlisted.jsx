import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { emptyQuery } from "../redux/searchSice";

export default function Shortlisted() {
  const dispatch = useDispatch();

  const { shortlisted, status } = useSelector((state) => state.data);
  const { query } = useSelector((state) => state.search);

  const exp = `(${query.toLowerCase()})`;

  useEffect(() => {
    return () => {
      dispatch(emptyQuery());
    };
  }, [dispatch]);

  if (status === "loading") return <div className="loading">loading ...</div>;

  return (
    <div className="home ">
      <div className="container">
        <div className="cards">
          {shortlisted.length > 0
            ? shortlisted
                .filter((ele) => ele.name.toLowerCase().match(exp))
                .map((item) => <Card item={item} />)
            : null}
        </div>
      </div>
    </div>
  );
}
