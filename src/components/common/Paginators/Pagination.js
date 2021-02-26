import React, { useState } from "react";
import s from "./Paginators.module.css";

let Pagination = ({totalFriendsCount, pageSize, currentPage, onPageChanged, portionSize = 9, ...props}) => {

    let pagesCount = Math.ceil(totalFriendsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize;
    let rightPortionPageNumber = portionNumber * portionSize;

    const prevButton = <button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>
    const nextButton = <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button> 

    return <> 
    { 
        <div className={s.paginationWrapper}>
            {leftPortionPageNumber > 1 ? prevButton : <button>prev</button>}
            <div> {pages.filter(p => (p > leftPortionPageNumber) && (p <= rightPortionPageNumber))
                    .map((p, index) => {
            return <span className={currentPage === p ? s.selectedPage : s.pages}
                         onClick={(e) => {
                             onPageChanged(p)
                         }} key={index}>{`${p} `}</span>

            })}
            </div>
            {portionCount > portionNumber && nextButton}
        </div>}
    </>
}
export default Pagination