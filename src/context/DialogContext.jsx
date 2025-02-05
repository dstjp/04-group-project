import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

export const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDialogMovie, setSelectedDialogMovie] = useState(null);
  const [isInfoButtonClicked, setIsInfoButtonClicked] = useState(false);
  const dialogRef = useRef(null);

  const handleOpenDialog = (movie) => {
    setSelectedDialogMovie(movie);
    setIsInfoButtonClicked(true);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedDialogMovie(null);
    setIsInfoButtonClicked(false);
    setIsDialogOpen(false);
  };

  // Open and close dialog
  // useEffect(() => {
  //   if (isDialogOpen && dialogRef.current) {
  //     dialogRef.current.showModal();
  //   } else if (!isDialogOpen && dialogRef.current) {
  //     dialogRef.current.close();
  //   }
  // }, [isDialogOpen, dialogRef]);

  return (
    <DialogContext.Provider
      value={{
        isDialogOpen,
        setIsDialogOpen,
        selectedDialogMovie,
        setSelectedDialogMovie,
        dialogRef,
        handleOpenDialog,
        handleCloseDialog,
        isInfoButtonClicked,
        setIsInfoButtonClicked,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
