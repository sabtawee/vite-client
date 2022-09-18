import React from "react";
import IMG from "../../assets/img/profile-img.png";

export default function ServerInfo() {
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Server Information</h2>
          <p></p>
        </div>
        <div className="row">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-reight">
            <h3>PREMO RO PROJECT BY PANDORA</h3>
            <p className="fst-italic">
              เราเป็นเซิฟที่กำลังจะเปิดโดยทีมงาน Pandora ผู้บริหาร Pandora
              Project โดยกลับมาตามคำเรียกร้องของผู้เล่นที่ชื่นชอบในผลงาน Pandora
              Project ที่ผ่านมา โดยในรอบนี้
              เราจะอัพเกรดให้มีระบบที่ดีมากยิ่งขึ้น
            </p>
            <div className="row">
              <div className="col-lg-5">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>CBT:</strong> <span>13 Oct 2022 - ???</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>OBT:</strong> <span>???</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Pre-Register:</strong> <span>???</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>แนวทาง: </strong>
                    <span>Ep 1.0 - 5.0 Classic ประยุกต์</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Event: </strong> <span>มากมาย</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>GuildWar SS1: </strong>
                    <span>??/10/2022-??/11/2022 Class 1.0</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>GuildWar SS2: </strong>
                    <span>??/11/2022-??/12/2022 Class 2.1</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>GuildWar SS3: </strong>
                    <span>??/12/2022-??/01/2023 Class 2.1 + 2.2</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>GuildWar SS4: </strong>
                    <span>??/02/2023-??/02/2023 Class 2.2</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              เราจะย้อนวันเวลาในยุคนั้นให้กลับคืนมาอีกครั้ง เราจะเริ่มต้น
              Episode 1.0 ถึง Episode 4.0 เราจะย้อนกลับไปเมื่อ 14
              ปีที่แล้วอีกครั้งเพื่อดูความเป็นมาของสุดยอดเกม MMORPG ขวัญใจคนไทย
              “Ragnarok Online” ในโปรเจ็ค PREMO RO
            </p>
          </div>
          <div className="col-lg-4" data-aos="fade-right">
            <img src={IMG} className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
