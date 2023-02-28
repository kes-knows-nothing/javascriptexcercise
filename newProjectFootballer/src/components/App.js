import React from "react";
import ProfileTable1 from "./ProfileTable1"
import ProfileTable2 from "./ProfileTable2";

function App() {
  return (
    <div className="photoProfile">
    <ProfileTable1 
    kname = "이재성"
    ename = "Jae-sung Lee"
    birth = "Aug 10, 1992"
    nationality = "Korea, South"
    height = "1, 80m"
    position = "Attacking Midfield"
    nationalTeam = "69 apps / 9 goals"
    />
    <ProfileTable2 
    currentteam = "1. FSV Mainz 05"
    currentteamnumber = "7"
    nationalteamnumber = "10"
    teamname2 = "Holstein Kiel"
    teamname3 = "Jeonbuk Hyundai Motors"
    year1 = "2021~"
    year2 = "2018~2021"
    year3 = "2014~2018"
    />
    </div>
  )
}

export default App;