import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
import { Add } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const addData = () => {
    dispatch(Add(data));
    setData("");
  };

  return (
    <>
      <div className="container">
        <section className="mt-3 text-center">
          <h3>Enter Your Task</h3>

          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input
              name="task"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
            />
            <Button
              variant="contained"
              onClick={() => addData()}
              style={{
                backgroundColor: "#4c63b6",
                fontFamily: "Roboto",
                fontSize: "18px",
                borderWidth: "0px",
                borderRadius: "4px",
                marginTop: "26px",
                marginBottom: "28px",
                paddingTop: "8px",
                paddingBottom: "5px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
              className="mx-2"
            >
              <AddIcon />
            </Button>
          </div>
          <Todo />
        </section>
      </div>
    </>
  );
};

export default Home;
