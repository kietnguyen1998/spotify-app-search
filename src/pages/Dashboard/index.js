import "./dashboard.css";

import { useSelector } from "react-redux";
import Artists from "../../components/Artists";
import Header from "../../components/Header";
import Tracks from "../../components/Tracks";

export default function Dashboard() {
  
  return (
    <div className="dashboard">
      <Header />
      <div className="container px-4 dashboard-content">
        <Artists />
        <Tracks />
      </div>
    </div>
  );
}
