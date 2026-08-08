import { TOAST_MESSAGE_ENUM } from "../enums/toastMessageEnum";
import type { TOAST_MESSAGE_TYPE } from "../types/toastMessageType";
import Classes from '../style/Toast.module.css'

import suspendAccount from "../../../../../assets/icons/suspendIcon.svg";
import deleteUser from "../../../../../assets/icons/deleteUser.svg";
import restoreAccount from "../../../../../assets/icons/restoreAccount.svg";
import incompleteInformation from "../../../../../assets/icons/incompleteInformatio.svg";
import loginSuccess from "../../../../../assets/icons/like.svg";
import invalidUsernameOrPassword from "../../../../../assets/icons/dislike.svg";


export const TOAST_MESSAGE_ICON_AND_MODE: Record<
  TOAST_MESSAGE_TYPE,
  {
    icon: string;
    className: string;
  }
> = {
  [TOAST_MESSAGE_ENUM.SuspendAccount]: {
    icon: suspendAccount,
    className: Classes.container_info,
  },

  [TOAST_MESSAGE_ENUM.RestoreAccount]: {
    icon: restoreAccount,
    className: Classes.container_success,
  },

  [TOAST_MESSAGE_ENUM.DeleteAccount]: {
    icon: deleteUser,
    className: Classes.container_info,
  },

  [TOAST_MESSAGE_ENUM.IncompleteInformation]: {
    icon: incompleteInformation,
    className: Classes.container_warning,
  },

  [TOAST_MESSAGE_ENUM.LoginSuccess]: {
    icon: loginSuccess,
    className: Classes.container_success,
  },

  [TOAST_MESSAGE_ENUM.InvalidUsernameorPassword]: {
    icon: invalidUsernameOrPassword,
    className: Classes.container_error,
  },
};