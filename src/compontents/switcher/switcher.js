import LoginContainer from "../login/loginContainer";
import CreateUserContainer from "../creteUser/createUserContainer";
import {switcherCondition} from "../../usingRedux/redusers/switcher";
import StartMenuContainer from "../startMenu/startMenuContainer";

export const Switcher = (props) => {
  switch (props.state.condition) {
    case switcherCondition.startLoading:
      props.startLoad()
      return <div>loading</div>
    case switcherCondition.login:
      return <LoginContainer />
    case switcherCondition.createUser:
      return <CreateUserContainer />
    case switcherCondition.mainMenu:
      return <div>main menu</div>
    case switcherCondition.startMenu:
      return <StartMenuContainer />
    default:
      return <div>loading</div>
  }
}
