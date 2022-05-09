import "./Container.css";

export default function Container(props) {
  const styles = "container " + props.className;
  return <div className={styles}>{props.children}</div>;
}
