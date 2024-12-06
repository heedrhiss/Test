"use client"

import { useState } from "react";
import ButtonActions from "../_components/ButtonActions";
import { TaskProp } from "../_types/typeScripts";
import Modal from "../_components/Modal";
import { useDarkMode } from "../_hooks/DarkModeContext";

interface TaskItemProp {
  data : TaskProp
}

export default function TaskItem({ data }: TaskItemProp) {
  const {showModal, openModal, handleClose} = useDarkMode()
  
  return (
    <>
    <div className={`w-52 text-md border-2 ${data.completed ? "border-green-500" : "border-red-500"} px-3 py-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 my-3 h-40 hover:scale-105 transition-all duration-300 lg:text-lg lg:w-64 lg:h-48`}>
      <div className="">{data.id}</div>
      <div className="font-semibold">{data.title}</div>
      {/* Button Client Component for Interactions */}
      <ButtonActions id={data.id} openModal={openModal} />
    </div>
    <Modal visible={showModal} onClose={handleClose}/>
    </>
  );
}
