import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const  [userData, setUserData] = useState({ name: "" });
  const callProfilePage = async () => {
    try {
      const res = await fetch("http://localhost:3001/profileA", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const err = new Error(res.err);
        throw err;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);
  return (
    <>
      <div className="profilemain">
        <div className="container">
          <div className="main-body">
            <div className="row">
              <div className="row-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="Admin"
                        className="rounded-circle p-1 bg-primary"
                        width="110"
                      />
                      <div className="mt-3">
                        <h4>{userData.name}</h4>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
              <div className="row-lg-8">
                <div className="card">
                  {/* <div className="card-body"> */}
                    {/* <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          value=""
                        />
                      </div>
                    </div> */}
                    {/* <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Password</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          value=""
                        />
                      </div> 
                    </div> */}
                    {/* <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="button"
                          className="btn btn-style1"
                          value="Save Changes"
                        />
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="d-flex align-items-center mb-3">
                          Sheets
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
