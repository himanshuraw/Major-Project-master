import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title text-center wow fadeIn">
            <h3>Get Started</h3>
            <div className="underline1"></div>
            <div className="underline2"></div>
            <div className="row px-1 py-2">
              <div className="col-md-9">
                Irure commodo nulla eiusmod esse sit est velit nulla enim eu
                culpa nisi exercitation in. Consequat anim dolor eu est aliqua
                consequat nostrud pariatur occaecat laborum eu laboris. Duis
                magna pariatur officia tempor minim pariatur cillum dolor
                deserunt.Irure commodo nulla eiusmod esse sit est velit nulla
                enim eu culpa nisi exercitation in. Consequat anim dolor eu est
                aliqua consequat nostrud pariatur occaecat laborum eu laboris
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-6 px-1">
                    <Link to="/login">
                      <div className="btn">Log in</div>
                    </Link>
                  </div>
                  <div className="col-md-6 px-1">
                    <Link to="/signup">
                      <div className="btn">Sign up</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
