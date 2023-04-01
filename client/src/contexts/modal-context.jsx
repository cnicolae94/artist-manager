import { createContext, useState } from "react";

export const ModalPopUpContext = createContext();

export const ModalPopUpProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);
  return (
    <ModalPopUpContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalPopUpContext.Provider>
  );
};
