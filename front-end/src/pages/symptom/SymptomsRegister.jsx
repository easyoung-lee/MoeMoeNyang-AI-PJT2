import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Asymptomatic from "../../components/modal/Asymptomatic";
import ImgUpload from "../../components/upload/ImgUpload";

export default function SymptomsRegister() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  // const [imgFile, setImgFile] = useState("");

  // function checkForm() {
  //   // if (imgFile === "") {
  //   //   alert("이미지를 등록해주세요.");
  //   // }
  // }

  return (
    <div className="m-4">
      <Dropdown />
      <ImgUpload />
      <div
        className="grid place-items-center w-full h-10 mt-4 mb-4 bg-lisa-200 rounded-xl"
        onClick={showModal}
      >
<<<<<<< HEAD
        <span className="font-bold text-slate-500">분 석</span>
=======
        <span className="font-bold text-slate-500">질 병 분 석</span>
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
      </div>
      {modalOpen && <Asymptomatic setModalOpen={setModalOpen} />}
    </div>
  );
}
