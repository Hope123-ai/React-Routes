import { useState, useEffect } from "react";

function UserDetails(props) {
  console.log(props);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${props.match.params.id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUser(response.data);
      });
  }, []);
  return (
    <div>
      {user && user.first_name && (
        <div>
          <img src={user.avatar}></img>
          <div>{user.first_name + " " + user.last_name}</div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
