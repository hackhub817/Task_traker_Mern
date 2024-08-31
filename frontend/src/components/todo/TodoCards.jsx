import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import "./Todo.css";

const Modal = ({ title, body, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

const TodoCards = ({
  title,
  body,
  id,
  delid,
  display,
  updateId,
  toBeUpdate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">
          {body.length > 77 ? (
            <>
              {body.slice(0, 77)}
              <span className="text-primary" onClick={handleModalOpen}>
                ...
              </span>
            </>
          ) : (
            body
          )}
        </p>
      </div>
      <div className="d-flex justify-content-around ">
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
          onClick={() => {
            delid(id);
          }}
        >
          <AiFillDelete className="card-icons del" /> Delete
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal title={title} body={body} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default TodoCards;
