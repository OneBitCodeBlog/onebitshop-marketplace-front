import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function () {
  const authContextData = useContext(AuthContext);

  return authContextData;
}
