import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "./store";

function App() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      {/* <h1>{message}</h1> */}
      <h2>Hey the 1st store works!</h2>
    </div>
  );
}

export default App;
