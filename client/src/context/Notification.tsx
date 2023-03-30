import React from "react";
import react, { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationProps, NotificationStatus } from "../components/common/utils";
interface NotificationContexProps {
 showNotificationOpen: boolean,
 setShowNotificationOpen: ()=> void
}
const NotificationContex = createContext<any>(null);

export const useNotification = () => {
  return useContext(NotificationContex);
};


const NotificationProvider = (props: {
  children:
    | string
    | number
    | boolean
    | react.ReactElement<any, string | react.JSXElementConstructor<any>>
    | react.ReactFragment
    | react.ReactPortal
    | null
    | undefined;
}) => {
  const [showNotification, setShowNotification] = useState<NotificationProps>({
    status: NotificationStatus.DEFAULT,
    alertMessage: "This is sample alert..!",
    showAlert:false
  });

  const showNotifications = () => {
   showNotification.showAlert && showNotification.status === NotificationStatus.SUCCESS && toast.success(showNotification.alertMessage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    showNotification.showAlert && showNotification.status === NotificationStatus.ERROR && toast.error(showNotification.alertMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    setShowNotification({
      status: NotificationStatus.DEFAULT,
      alertMessage: "This is sample alert..!",
      showAlert:false
    });
  };

  React.useEffect(()=>{
    showNotifications()
  },[showNotification.showAlert])


  const value = {
    showNotification: showNotification,
    setShowNotification: setShowNotification
  };

  return (
    <NotificationContex.Provider value={value as any}>
      {props.children}
      <ToastContainer />
    </NotificationContex.Provider>
  );
};

export default NotificationProvider;
