import React, {useState} from "react";
import s from "./News.module.css"

const News = (props) => {
    let [count, setCount] = useState(0);

    const onIncrement = () => {
        setCount(count + 1);
    }
    const onDecrement = () => {
        setCount(count - 1);
    }


    return (
        <div className={s.wrapper}>
            <button className={s.plusButton} onClick={onIncrement}>+</button>
            {count}
            <button className={s.minusButton} onClick={onDecrement} disabled={count === 0}>-</button>
        </div>)
}
export default News;