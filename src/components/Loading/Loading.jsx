import { ScaleLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <ScaleLoader color="red" />
    </div>
  )
}

export default Loading