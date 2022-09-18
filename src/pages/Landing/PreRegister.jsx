import React from "react";

export default function PreRegister() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Pre-Register</h2>
          <p>ยอดสมัครไอดีล่วงหน้าครบตามเป้าหมาย รับไอเท็มไปเลยยกเชิร์ฟเวอร์</p>
        </div>
        <div className="row skills-content">
          <div className="col-lg-12">
            <div className="progress">
              <span className="skill mt-3 mb-3">
                Account Id <i className="val">100</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-green"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "1000%" }}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill mt-3 mb-3">
                Account Id <i className="val">500</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-green"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill mt-3 mb-3">
                Account Id <i className="val">1000</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-green"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill mt-3 mb-3">
                Account Id <i className="val">3000</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-green"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill mt-3 mb-3">
                Account Id <i className="val">5000</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-green"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
