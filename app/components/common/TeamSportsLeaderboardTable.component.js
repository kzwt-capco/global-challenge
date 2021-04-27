/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from "react";
import PropTypes from "prop-types";
import { List, Table } from "semantic-ui-react";
import Avatar from "./Avatar.component";
import "./style.scss";

const svgBarWidth = 100;
const getInitials = (name) => {
  let temp = name
    .replace(/\bthe\b|\band\b/gi, "")
    .split(" ")
    .filter((e) => e);

  if (temp.length === 1) return temp[0].charAt(0).toUpperCase();
  else
    return `${
      temp[0].charAt(0) + temp[temp.length - 1].charAt(0)
    }`.toUpperCase();
};
const TeamSportsLeaderboardTable = ({ teams, height }) => {
  let data = teams.sort((a, b) => b.distance - a.distance);
  let maxDistance = Math.max(...teams.map((team) => team.distance));

  return (
    <List
      animated
      divided
      className={"leaderboard sports"}
      style={{ height: height }}
    >
      <Table basic="very" collapsing>
        <Table.Body>
          {data.map((team, idx) => (
            <Table.Row key={team.name}>
              <Table.Cell>
                {idx + 1}.
                <Avatar teamName={team.name} color={"rgb(167, 167, 167)"} size={30} />
              </Table.Cell>
              <Table.Cell className="distance">{team.distance}km</Table.Cell>
              <Table.Cell>
                <svg width={svgBarWidth + 10} height="16">
                  <rect
                    width={(svgBarWidth * team.distance) / maxDistance + 10} // 10px minimum width
                    height="16"
                    fill={"lightgrey"}
                    rx={8}
                  />
                </svg>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </List>
  );
};

TeamSportsLeaderboardTable.propTypes = {
  teams: PropTypes.array.isRequired,
  height: PropTypes.number,
};

export default TeamSportsLeaderboardTable;