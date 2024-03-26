import React, { useContext, useState } from "react";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Modal, Button } from "react-bootstrap";
import { Remove, Update_data } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { DeleteContext } from "./context/ContextProvider";

const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers);
  const { setDlettask } = useContext(DeleteContext);
  const dispatch = useDispatch();

  const [showeye, setShoweye] = useState(false); // show modal state
  const [showeyevalue, setShoweyeValue] = useState(""); // setvalue state
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  const [ind, setInd] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (el) => {
    setShow(true);
    setUpdate(el);
  };

  // dlt function
  const remove = (id) => {
    dispatch(Remove(id));
    setDlettask(true);
  };

  // update function
  const usertask_update = () => {
    dispatch(Update_data(update, ind));
    handleClose();
  };

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {User_data.map((ele, k) => {
          return (
            <>
              <div
                className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                key={k}
                style={{
                  backgroundColor: "#e6f6ff",
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: "5px",
                  borderColor: "#096f92",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderRadius: "4px",
                }}
              >
                <li style={{ listStyle: "none" }}>{ele}</li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <DriveFileRenameOutlineOutlinedIcon
                    onClick={() => {
                      handleShow(ele);
                      setInd(k);
                    }}
                    style={{ color: "#3c40c6", cursor: "pointer" }}
                  />
                  <button className="delete-button" onClick={() => remove(k)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                  <RemoveRedEyeIcon
                    onClick={() => {
                      setShoweye(true);
                      setShoweyeValue(ele);
                    }}
                    style={{ color: "#1dd1a1", cursor: "pointer" }}
                  />
                </div>
              </div>
            </>
          );
        })}

        {/* read modal */}
        <Modal show={showeye}>
          <h1 className="text-center">{showeyevalue}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* update modal */}
        <Modal show={show} onHide={handleClose}>
          <h3 className="text-center mt-2">Update Your Task</h3>
          <Modal.Header>
            <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
              <input
                name="task"
                value={update}
                onChange={(e) => setUpdate(e.target.value)}
                className="form-control col-lg-5 mt-2"
              />
            </div>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => usertask_update()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Todo;
