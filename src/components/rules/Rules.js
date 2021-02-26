import React from "react";

import "./Rules.css";

const Rules = () => {

  return (
    <div className="rules">
      <button type="button" className="ui inverted button" data-bs-toggle="modal" data-bs-target="#rulesModal">RULES</button>

      <div className="modal fade" id="rulesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">RULES</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="../../images/image-rules.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rules
