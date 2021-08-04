import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/upin.jpg", name: "upin" },
    { id: 2, image: "/images/ipin.jpg", name: "ipin" },
    { id: 3, image: "/images/mail.jpg", name: "mail" },
    { id: 4, image: "/images/jarjit.jpg", name: "jarjit" },
    { id: 5, image: "/images/ehsan.jpg", name: "ehsan" },
    { id: 6, image: "/images/fizi.jpg", name: "fizi" },
    { id: 7, image: "/images/tokdalang.jpg", name: "tok dalang" },
    { id: 8, image: "/images/kak ros.jpg", name: "kak ros" },
    { id: 9, image: "/images/susanti.jpg", name: "susanti" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
