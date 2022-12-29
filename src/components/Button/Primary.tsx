import './Primary.css';

type ButtonProps = {
  text: string;
}

export function Primary(props: ButtonProps) {
  return <button>{props.text}</button>
}