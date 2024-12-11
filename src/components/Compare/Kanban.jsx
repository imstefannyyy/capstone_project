import React from "react";

function Kanban({ data, onClick }) {
    return (
        <div className="card col-lg-1 col-md-2 col-3 mb-1" onClick={onClick}>
            <img src={data.flags.png} className="card-img-top" alt={data.name} style={{height: "80px"}} />
            <div className="card-body border-top">
                <h6 className="card-title">{data.name} ({data.cca2})</h6>
            </div>
        </div>
    )
}

export default Kanban;
