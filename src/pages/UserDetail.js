import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/actions/userAction";
import { useParams } from "react-router-dom";

export default () => {
  const { user } = useSelector((state) => state.userReducer);
  const disptach = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    disptach(getUser(id));
  }, [id, disptach]);

  return (
    <div>
      <h2>User Detail Page</h2>
      {JSON.stringify(user)}
    </div>
  );
};
