import React, {useState} from "react";
import s from "./News.module.css"


// После того как закончу, надо переделать с использованием redux-form или formik
const News = () => {

    const Todo = () => {

        //state hooks
        let [list, setList] = useState([]);
        let [value, setValue] = useState("")
        let [initialId, setInitialID] = useState(0)


        //eventHandlers
        const handleChange = (e) => {
            setValue(value = e.currentTarget.value);
        }

        const handleSubmit = (e) => {
            setList(list => [...list, {text: value, id: initialId}]);
            e.preventDefault();
            setInitialID(initialId + 1);
            e.target.reset();
            setValue("");
        }

        const deleteTodo = (e) => {
            setList(list.filter(todo => todo.id != e._dispatchInstances.key)); // Это невежество тоже надо исправить
        }

        // "list" array mapping
        let todoList = list.map((todo, index) => <div key={todo.id} onClick={deleteTodo}>{todo.text}</div>);


        //render
        return (

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}></input>
                <button className="submit">Submit</button>
                <div>{todoList}</div>
            </form>
        )
    }


    const Counter = () => {
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
            </div>
        )
    }


    return (<>
            <Todo/>
            <Counter/>
        </>
    )
}
export default News;