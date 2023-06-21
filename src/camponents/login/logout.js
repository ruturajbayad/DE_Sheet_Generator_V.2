import React, { useEffect , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch} = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3001/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type:'USER', payload:false });
        navigate('/login', { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },);

  return <></>;
};

export default Logout;