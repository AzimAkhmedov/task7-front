const beforeStyle: any = {
  background: "white",
  width: "90%",
  height: "90%",
  position: "absolute",
  borderRadius: "50%",
};
const afterStyle: any = {
  background: "var(--dark-blue)",
  width: "70%",
  height: "70%",
  position: "absolute",
  borderRadius: "50%",
};

const O = () => {
  return (
    <>
      <div className="before" style={beforeStyle}></div>
      <div className="after" style={afterStyle}></div>
    </>
  );
};

export default O;
