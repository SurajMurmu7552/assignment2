import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { emptyQuery } from "../redux/searchSice";

export default function Home() {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.data);
  const { query } = useSelector((state) => state.search);
  console.log(data);

  const exp = `(${query.toLowerCase()})`;

  useEffect(() => {
    return () => {
      dispatch(emptyQuery());
    };
  }, [dispatch]);

  if (status === "loading") return <div className="loading">loading ...</div>;

  return (
    <div className="home">
      <div className="container">
        <div className="cards">
          {data.length > 0
            ? data
                .filter((ele) => ele.name.toLowerCase().match(exp))
                .map((item) => <Card item={item} />)
            : null}
        </div>
      </div>
    </div>
  );
}
