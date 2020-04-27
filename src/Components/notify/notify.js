import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const CustomToast =({ closeToast })=>{
    console.log(closeToast);
    return(
        <div>
            Something went wrong
            <button onClick={ closeToast }>Close</button>
        </div>
    )
}
function Notify() {
  const notify = () => {
    toast("Basic notification!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000
    });
    toast.info("Info notification!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast/>, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error(" notification!", { position: toast.POSITION.BOTTOM_CENTER });
    toast("Basic notification!", { position: toast.POSITION.BOTTOM_RIGHT });
  };
  return (
    <div>
      <button onClick={notify}>!Notify</button>
    </div>
  );
}
export default Notify;
