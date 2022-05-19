import React, { Component, Modal, Button, useState, render} from "react";
import './styles.css';
import Artur from "./artur"

const Site = ({ handleClose, show, children, handler }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={ () => handleClose, handler}>
          Close
        </button>
        <Artur></Artur>
      </section>
    </div>
  );
};

export default Site;