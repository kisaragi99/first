import {addPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostCreator})(MyPosts)
export default MyPostsContainer;