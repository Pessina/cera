import React, { useEffect, useState } from "react";

import ListStyles from "./ListStyles.js";
import CarerCard from "../CarerCard/CarerCard";
import { getCarers } from "../../api/carers";

const List = ({ setScheduleModal }) => {
  const [carers, setCarers] = useState([]);

  useEffect(() => {
    const fetchCarers = async () => {
      const data = await getCarers();
      console.log(data);
      setCarers(data);
    };

    fetchCarers();
  }, []);

  return (
    <>
      <ListStyles>
        {carers.map(({ name, slots, photo }, index) => (
          <CarerCard
            key={index}
            name={name}
            slots={slots}
            photo={photo}
            setScheduleModal={setScheduleModal}
          />
        ))}
      </ListStyles>
    </>
  );
};

export default List;
