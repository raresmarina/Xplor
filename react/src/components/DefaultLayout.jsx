import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";
import { FaHome } from 'react-icons/fa'; // Import the house icon

export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }


  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <div className="content">
        <header style={{ backgroundColor: 'rgb(255, 90, 95)', color: 'white' }}>
          <div>
            <h1 style={{ color: 'white' }}>
              Xplore
            </h1>
          </div>
          <div>
            <Link to="/" className="btn-logout" style={{ color: 'white', marginRight: '10px' }}><FaHome size={20} /></Link> 
            {user.name} &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" style={{ color: 'white' }} href="#">
              Log out
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}
