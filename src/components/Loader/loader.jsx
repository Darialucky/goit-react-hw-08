import { Grid } from "react-loader-spinner";

const Loader = () => {
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Grid
      visible={true}
      height={80}
      width={80}
      color="#f00"
      ariaLabel="grid-loading"
      radius={12.5}
      wrapperStyle={{}}
      className="grid-wrapper"
    />
  </div>;
};

export default Loader;
