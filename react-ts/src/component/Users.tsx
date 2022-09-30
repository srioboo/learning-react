import { ReactElement, useEffect, useState } from "react";

// esto es para gestionar el tipo correctamente
interface user {
  id: number;
  name: string;
  email: string;
  phone: number;
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // [] son necesarios para que no haga una recarga infinita

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setUsers(json); // aquí seteamos el valor obtenido
  };

  return (
    <div>
      {users?.map((user: user) => (
        <div key={user.id}> {user.name}</div>
      ))}
    </div>
  );
}

export default Users;
