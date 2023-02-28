import React from "react";

function ProfileTable2(props) {
  return (
    <div>
  <table class="profileTable2" border="1">
  <thead>
    <tr >
      <td class="profileText1" colspan="3"><h2 class="profileText1">Profile</h2></td>
    </tr>
  </thead>
<tbody>
<tr align="center">
  <td rowspan="2"><strong>Number</strong></td>
  <td>{props.currentteam}</td>
  <td>{props.currentteamnumber}</td>
</tr>
<tr align="center">
  <td>National Team</td>
  <td>{props.nationalteamnumber}</td>
</tr>
<tr align="center">
  <td rowspan="3"><strong>Career</strong></td>
  <td>{props.currentteam}</td>
  <td>{props.year1}</td>
</tr>
<tr align="center">
  <td>{props.teamname2}</td>
  <td>{props.year2}</td>
</tr>
<tr align="center">
  <td>{props.teamname3}</td>
  <td>{props.year3}</td>
</tr>
</tbody>
</table>
</div>
  )
}

export default ProfileTable2;