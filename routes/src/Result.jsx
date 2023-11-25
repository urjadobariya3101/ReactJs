import React from "react";
import { useParams } from "react-router-dom";

export const Result = () => {
  const { id } = useParams();

  console.log(id, "res");

  const data = [
    {
      id: 1,
      title: "card-1",
      desc: "This is a card 1",
    },
    {
      id: 2,
      title: "card-2",
      desc: "This is a card 2",
    },
    {
      id: 3,
      title: "card-3",
      desc: "This is a card 3",
    },
  ];

  const result = data.filter((e) => e.title == id);

  console.log(result, " result");
  return (
    <div>
      <div className="row col-md-12">
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{result[0].title}</h5>
            <p class="card-text">{result[0].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
