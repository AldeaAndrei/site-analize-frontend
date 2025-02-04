const ListElement = (props) => {
  return (
    <div className="border border-[#D7D7D7] bg-[#FCFCFC] p-2 shadow-sm">
      {props.children}
    </div>
  );
};

export default ListElement;
