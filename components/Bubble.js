const Bubble = (props) => {
  console.log(props);

  if (props.value === 0 || props.value == null) return <></>;

  const text = props.value < 0 ? "sub medie" : "peste medie";
  const backgroundColor = props.value < 0 ? "#FEB5B5" : "#C5FEB5";
  const textColor = props.value < 0 ? "#700D00" : "#197000";

  return (
    <div className={`bg-[${backgroundColor}] text-small text-[${textColor}]`}>
      {props.value} {text}
    </div>
  );
};

export default Bubble;
