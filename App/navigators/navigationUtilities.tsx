import React from "react";
import {createNavigationContainerRef} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name as never, params as never);
  }
}

function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
