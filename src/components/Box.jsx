import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const Box = ({ data }) => {
  const [datas, setDatas] = useState('');

  useEffect(() => {
    setDatas(data);
  }, []);

  return (
    <div style={{ width: "300px", height: "300px", backgroundColor: "white" }}>
      {datas}
    </div>
  );
}

export default connect(mapStateToProps)(Box);