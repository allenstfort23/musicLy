import React from "react";
import MockUp from "./img/Mock up.png";
import "./banner.css";

function Banner() {
  return (
    <div className="static-slider9 position-relative">
      <div className="row">
        <div className="container">
          <div className="col-md-5 info-detail align-self-center">
            <h1 className="title">MusicLy</h1>
            <h6 className="subtitle font-weight-normal">
              All Your Music In One Place. While Your On The Go!
            </h6>
            <p className="text-dark font-weight-medium">
              Don't have an account. Sign up, it's for free.
            </p>
            <form className="form-inline">
              <div className="form-group">
                <label for="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg mr-2 mb-2"
                  id="inputPassword2"
                  placeholder="email address"
                />
              </div>
              <button
                type="submit"
                className="btn btn-md btn-success-gradiant text-white border-0 mb-2"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div
          className="col-md-5 bg-img"
          style={{
            backgroundImage: `url("https://lemonade.co/wp-content/uploads/2018/06/shutterstock_438996334.jpg")`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Banner;

{
  /* <div classNameName="banner-layout">
  <div classNameName="row">
    <div classNameName="container">
      <div className="col-md-5 info-detail align-self-center">
        <h1 className="title">MusicLy</h1>
        <h6 className="subtitle font-weight-normal">
          All Your Music In One Place. While Your On The Go!
        </h6>
        <p className="text-dark font-weight-medium">Don't have an account?</p>
        <button
          type="submit"
          className="btn btn-md btn-success-gradiant text-white border-0 mb-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>; */
}
