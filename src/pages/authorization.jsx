import {Ways} from "./ways/ways";
import ButtonLink from "../components/button_link";

const Authorization = () => {
  return (
    <div>
      <ButtonLink link={Ways.Register} text="Register" />
      <ButtonLink link={Ways.Login} text="Login" />
    </div>
  )
}

export default Authorization