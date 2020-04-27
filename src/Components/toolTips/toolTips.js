import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";

const ColouredToolTip = () => {
  return <span style={{ color: "orange" }}>Coloured</span>;
};

const CustomChild = forwardRef((props, ref)=>{
    return(
        <div ref={ref}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})
function ToolTips() {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy  placement={"right"} delay={1000} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Coloured</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="top-start" content={<ColouredToolTip />}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}
export default ToolTips;
