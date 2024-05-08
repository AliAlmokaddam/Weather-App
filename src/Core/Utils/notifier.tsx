import { notification } from 'antd';
import { ResponseStatus } from '@/Core/Enums/ResponseStatus';

export const notifier = (message: string, type: ResponseStatus) => {
  notification[type]({
    message,
  });
};
