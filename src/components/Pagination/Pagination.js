import React from "react";
import './style.css'
import arrow from './arrow.png'

function Pagination (props) {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button className="left" onClick={onLeftClick}>
                <img src={arrow} />
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <img src={arrow} />
            </button>
        </div>
    );
}

export default Pagination;