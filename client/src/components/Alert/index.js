import { useSelector } from "react-redux";
import "./Alert.css";

const Alert = () => {
  const alertType = useSelector((state) => state.registeredUser.alertType);
  const alertText = useSelector((state) => state.registeredUser.alertText);

  return <p className={`alert alert-${alertType}`}>{alertText}</p>;
};

export default Alert;
