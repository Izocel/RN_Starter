// ErrorNotification.jsx

import React, { createRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DropdownAlert from "react-native-dropdownalert";

const ScreenNotification = (props) => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.screenNotificationReducer.msg);
  const type = useSelector((state) => state.screenNotificationReducer.type);
  const title = useSelector((state) => state.screenNotificationReducer.title);
  const isOpen = useSelector((state) => state.screenNotificationReducer.isOpen);

  let dropDownAlertRef = createRef();

  useEffect(() => {
    handleShowType();
  }, []);

  function handleClose() {
    dispatch({ isOpen: false });
  }

  function handleShowType() {
    if (!dropDownAlertRef.alertWithType || !isOpen) {
      return;
    }

    dropDownAlertRef.alertWithType(type, title ?? type?.toUpperCase(), msg);
  }

  function render() {
    if (!isOpen) {
      return;
    }

    return <DropdownAlert 
      showCancel={true}
      closeInterval={30000}
      messageNumOfLines={8}
      ref={(ref) => (dropDownAlertRef = ref)}
    />;
  }

  return render();
};

export default ScreenNotification;
