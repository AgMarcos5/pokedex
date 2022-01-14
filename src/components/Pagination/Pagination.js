import React from "react";

function Pagination (props) {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div>
            <button onClick={onLeftClick}>izq</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>der</button>
        </div>
    );
}

export default Pagination;