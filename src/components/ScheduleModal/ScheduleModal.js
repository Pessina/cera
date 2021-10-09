import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import ButtonList from "../Button/ButtonList/ButtonList";
import ReactModal from "react-modal";
import { getAvailabilities } from "../../api/availabilities.js";
import { schedule } from "../../api/schedule.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    background: "#D7D7D7",
    border: "1px solid #000000",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "324px",
    height: "374px",
    textAlign: "center",
    color: "var(--black)",
    padding: "39px",
  },

  overlay: {
    background: "rgba(196, 196, 196, 0.67)",
  },
};

const ScheduleModal = ({ name = "Name", isOpen, onRequestClose }) => {
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    const fetchAvailabilities = async () => {
      const data = await getAvailabilities();
      console.log(data);
      setAvailabilities(data);
    };

    fetchAvailabilities();
  }, [isOpen]);

  const requestSchedule = async () => {
    const ret = await schedule();
    console.log(ret);
  };

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Schedule Carer</h2>
      <p>{name}</p>
      <ButtonList>
        {availabilities.map((item, index) => (
          <Button key={index} onClick={requestSchedule}>
            {item}
          </Button>
        ))}
      </ButtonList>
    </ReactModal>
  );
};

export default ScheduleModal;
