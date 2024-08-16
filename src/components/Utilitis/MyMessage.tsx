import React from 'react';
import { message  } from 'antd';


export default function MyMessage() {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'This is a success message',
      });
    };
  
    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      });
    };
  
    const warning = () => {
      messageApi.open({
        type: 'warning',
        content: 'This is a warning message',
      });
    };
  
    return {contextHolder, success, error, warning}
}
