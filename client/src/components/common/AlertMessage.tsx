import React, { useEffect } from "react";
import { message } from "antd";
import { AlertMessageProps, AlertStatus } from "./utils";

const AlertMessage = (props: AlertMessageProps) => {
  const { status, alertMessage, showAlert } = props;
  const [messageApi, contextHolder] = message.useMessage();

  showAlert &&
    messageApi.open({
      type: status,
      content: alertMessage,
      duration: 1,
    });

  return <React.Fragment>{contextHolder}</React.Fragment>;
};

export default AlertMessage;
