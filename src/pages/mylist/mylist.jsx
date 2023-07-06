import React from "react";

function MyList({ movieIds }) {
  const [list, setList] = React.useState(movieIds || []);

  return (
    <div>
      <h2>My List</h2>
      {list.map((id) => (
        <p key={id}>{id}</p>
      ))}
    </div>
  );
}

export default MyList;
