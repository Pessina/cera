import React from "react";
import CarerCardStyles from "./CarerCardStyles.js";
import defaultCarer from "../../assets/defaultCarer.png";
import Button from "../Button/Button";
import Label from "../Label/Label.js";
import SB from "../SB/SB";

const CarerCard = ({
  name = "Lorem Ipsum",
  slots = 0,
  photo = defaultCarer,
  setScheduleModal,
}) => {
  return (
    <CarerCardStyles>
      <img src={photo} alt="carer avatar" />
      <SB>
        <div>
          <Label>{name}</Label>
          <p className="slots">{slots} slots available</p>
        </div>
        <Button onClick={() => setScheduleModal({ isOpen: true, name })}>
          Check Availability
        </Button>
      </SB>
    </CarerCardStyles>
  );
};

export default CarerCard;
