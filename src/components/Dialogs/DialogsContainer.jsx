import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer"
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
