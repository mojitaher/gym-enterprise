import { TOAST_MESSAGE_ENUM } from "../enums/toastMessageEnum";
import type { TOAST_MESSAGE_TYPE } from "../types/toastMessageType";

import suspendAccount from "../../../../../assets/icons/suspendIcon.svg";
import deleteUser from "../../../../../assets/icons/deleteUser.svg";
import restoreAccount from "../../../../../assets/icons/restoreAccount.svg";
import incompleteInformation from "../../../../../assets/icons/incompleteInformatio.svg";
import loginSuccess from "../../../../../assets/icons/like.svg";
import invalidUsernameOrPassword from "../../../../../assets/icons/dislike.svg";

export const TOAST_MESSAGE_ICON: Record<TOAST_MESSAGE_TYPE, string> = {
    [TOAST_MESSAGE_ENUM.SuspendAccount]: suspendAccount,
    [TOAST_MESSAGE_ENUM.RestoreAccount]: restoreAccount,
    [TOAST_MESSAGE_ENUM.DeleteAccount]: deleteUser,
    [TOAST_MESSAGE_ENUM.IncompleteInformation]: incompleteInformation,
    [TOAST_MESSAGE_ENUM.LoginSuccess]: loginSuccess,
    [TOAST_MESSAGE_ENUM.InvalidUsernameorPassword]: invalidUsernameOrPassword,
};