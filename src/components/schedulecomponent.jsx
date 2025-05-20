import { useState, useEffect } from "react";
import schedules from "../data/index.js";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ScheduleCard = () => {
  const [scheduleList] = useState(schedules);

  // useEffect untuk simulasi pengambilan data atau efek samping lainnya
  useEffect(() => {
    console.log("Jadwal telah dimuat atau state berubah");
  }, [scheduleList]); // Efek ini akan dijalankan setiap kali state 'scheduleList' berubah

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
      {scheduleList.map((schedule) => (
        <Card
          style={{
            width: "40rem",
            height: "",
            backgroundColor: schedule.backgroundColor,
          }}
          className="card mt-4"
          key={schedule.id}
        >
          <Card.Body>
            <Card.Title className="card-title">
              {" "}
              <b>{schedule.day}</b>
            </Card.Title>
            <hr />
            <div className="card-subtitle text-muted">
              <Card.Subtitle>{schedule.schedule1}</Card.Subtitle>
            </div>
            <div className="card-text mb-4 text-muted ">
              <Card.Text>{schedule.time1}</Card.Text>
            </div>
            <div className=" text-muted ">
              <Card.Subtitle>{schedule.schedule2}</Card.Subtitle>
            </div>
            <div className="card-text mb-4 text-muted ">
              <Card.Text>{schedule.time2}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ScheduleCard;
