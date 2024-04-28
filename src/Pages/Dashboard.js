import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboardcontainer">
      <div className="main-body">
            <div className="dashboardcard">
              <div className="dashboardcard-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="mt-3">
                    <h3 style={{ color: "whitesmoke" }} id="username">
                      Tarun
                    </h3>
                    <p className="text-secondary mb-1" id="category">
                      User 1
                    </p>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github mr-2 icon-inline"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </h6>
                  <p className="text-secondary">Github</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </h6>
                  <p className="text-secondary">facebook</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h4 className="mb-0">Age</h4>
                  </div>
                  <div className="col-sm-6 text-secondary">
                    <p id="age">18</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h4 className="mb-0">Email</h4>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <p id="email">tarun@12345</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h4 className="mb-0">Phone</h4>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <p id="phone">91+ 1234567890</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h4 className="mb-0">Address</h4>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <p id="college">Cbe, TamilNadu.</p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
