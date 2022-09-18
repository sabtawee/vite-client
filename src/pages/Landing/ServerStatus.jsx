import React, { useEffect, useState } from "react";
import Count from "../../components/Count/Count";
import data from "../../data/data.json";

export default function ServerStatus() {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Server Status</h2>
          
        </div>
        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="bi bi-emoji-smile" />
              <span>
                {data.counts.map((count) => (
                  <Count key={count.id} data={count} />
                ))}
              </span>
              <p>
                <strong>Happy Clients</strong> consequuntur quae
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="count-box">
              <i className="bi bi-journal-richtext" />
              <span>
                {data.counts.map((count) => (
                  <Count key={count.id} data={count} />
                ))}
              </span>
              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="count-box">
              <i className="bi bi-headset" />

              <span>
                {data.counts.map((count) => (
                  <Count key={count.id} data={count} />
                ))}
              </span>
              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="count-box">
              <i className="bi bi-people" />
              <span>
                {data.counts.map((count) => (
                  <Count key={count.id} data={count} />
                ))}
              </span>
              <p>
                <strong>Hard Workers</strong> rerum asperiores dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
