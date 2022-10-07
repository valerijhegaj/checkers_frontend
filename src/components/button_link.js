import {Ways} from "../pages/ways/ways";

const ButtonLink = (props) => {
  return (
    <form action={props.link}>
      <button type="submit">
        {props.text}
      </button>
    </form>
  )
}

export default ButtonLink