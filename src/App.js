import React, { useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import List from "./components/List/List";
import ScheduleModal from "./components/ScheduleModal/ScheduleModal.js";

const App = () => {
  const [scheduleModal, setScheduleModal] = useState({
    isOpen: false,
    name: "",
  });

  return (
    <div className="App">
      <Topbar />
      <List setScheduleModal={setScheduleModal} />
      <ScheduleModal
        isOpen={scheduleModal.isOpen}
        name={scheduleModal.name}
        onRequestClose={() => setScheduleModal(false)}
      ></ScheduleModal>
    </div>
  );
};

export default App;
