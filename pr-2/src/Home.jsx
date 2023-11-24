import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const data = [
    {
      id: 1,
      title: "card-1",
      desc: "This is card 1",
    },
    {
      id: 2,
      title: "card-2",
      desc: "This is card 2",
    },
    {
      id: 3,
      title: "card-3",
      desc: "This is card 3",
    },
  ];
  return (
    <div>
      <div className="row col-md-12">
        {data.map((val,index) => {
          return (
            <div class="card" style={{ width: "18rem" }} key={index}>
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text">{val.desc}</p>
                <Link to={`/${val.title}`} class="btn btn-primary">
                  view
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};
