import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer"
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

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


let authRedirectComponent = withAuthRedirect(Dialogs); // HOC

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)


export default DialogsContainer;
