import React from "react";
import s from "./Paginators.module.css";

let Pagination = ({totalFriendsCount, pageSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalFriendsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <>
        <div> {pages.map((p, index) => {
            return <span className={currentPage === p && s.selectedPage}
                         onClick={(e) => {
                             onPageChanged(p)
                         }} key={index}>{`${p} `}</span>

        })}
        </div>
    </>
}
export default Pagination
