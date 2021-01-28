import React, { useEffect } from "react";
import { useSnackbar } from "notistack";

const Test = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar("Successfully fetched data!", {
      variant: "success",
    });
  }, [enqueueSnackbar]);
  return <div>Hello world!</div>;
};

export default Test;
