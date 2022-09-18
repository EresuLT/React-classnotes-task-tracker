import React from "react";
import Header from "../components/Header";
import ShowTask from "../components/ShowTasks";
import { useState, useEffect } from "react";
// import data from "../helper/starterData";

//! task her değiştiğinde değişen veriyi localstorageye atarsak güncellemeyi sağlamış oluruz
//! her güncellemede = useEffect
//? 10-16 satır aralığı locale aktarma
const Home = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  //! JSONparse ile verimizi localden aldık

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])


  console.log(tasks);
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTask />
    </div>
  );
};

export default Home;