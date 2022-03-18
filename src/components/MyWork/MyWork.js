import { useEffect, useState } from "react";

import "./MyWork.scss";

import MyWorkCard from "./MyWorkCard";

const MyWork = function () {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchWorks = async function () {
      const response = await fetch(
        "https://real-rohit-default-rtdb.firebaseio.com/work.json"
      );
      const data = await response.json();

      const dataArr = [];
      for (const item of Object.entries(data))
        dataArr.push({ id: item[0], ...item[1] });

      setData(dataArr);
    };
    fetchWorks();
  }, []);

  return (
    <section className="container my-work" id="work">
      <h1 className="sectional-heading heading--secondary">My work</h1>
      <div className="work__cards">
        {/* <div className="work__heading">Dynamic web apps</div> */}
        {/* Dynamic web apps */}
        {data?.map((work) => {
          return <MyWorkCard key={work.id} data={work} />;
        })}
      </div>
    </section>
  );
};

export default MyWork;
