import React from "react";

function Table(props) {
  return (
    <div>
  <table className="profileTable1" border="1">
    <thead>
      <tr>
        <td className="profileText"><h2 class="profileText">Profile</h2></td>
      </tr>
    </thead>
    <tbody>
    <tr align="center">
        <td className="fcell" rowspan="2"><strong>Name</strong></td>
        <td className="scell">Korean</td>
        <td>{props.kname}</td>
      </tr>
      <tr align="center">
        <td>English</td>
        <td>{props.ename}</td>
      </tr>
      <tr align="center">
      <td><strong>Date of Birth</strong></td>
      <td colspan="2">{props.birth}</td>
    </tr>
      <tr align="center">
      <td><strong>Nationality</strong></td>
      <td colspan="2">{props.nationality}</td>
    </tr>
    <tr align="center">
      <td><strong>Height</strong></td>
      <td colspan="2">{props.height}</td>
    </tr>
    <tr align="center">
      <td><strong>Postion</strong></td>
      <td colspan="2">{props.position}</td>
    </tr>
    <tr align="center">
      <td><strong>National Team</strong></td>
      <td colspan="2">{props.nationalTeam}</td>
    </tr>
    </tbody>    
  </table>
</div>
  );
}

export default Table;