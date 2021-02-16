import React, { useState } from "react";
import s from "./Paginators.module.css";

let Pagination = ({totalFriendsCount, pageSize, currentPage, onPageChanged, portionSize = 9 }) => {

    let pagesCount = Math.ceil(totalFriendsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <>
        {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}

        <div> {pages.filter(p => (p > leftPortionPageNumber) && (p <= rightPortionPageNumber))
                    .map((p, index) => {
            return <span className={currentPage === p && s.selectedPage}
                         onClick={(e) => {
                             onPageChanged(p)
                         }} key={index}>{`${p} `}</span>

        })}
        </div>

        {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>}
    </>
}
export default Pagination
