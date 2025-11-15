import Toast, { ToastShowParams } from "react-native-toast-message";

export const showToast = (params: ToastShowParams) => {
  Toast.show({
    type: params.type ?? "success",
    position: params.position ?? "top",
    text1: params.text1,
    text2: params.text2,
    visibilityTime: 5000,
    autoHide: true,
    topOffset: params.topOffset,
  });
};
