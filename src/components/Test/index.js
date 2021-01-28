import { useSnackbar } from "notistack";
import React, { useEffect } from "react";

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
