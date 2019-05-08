import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

import axios from "axios";
import { connect } from "react-redux";

function TeamMembersTabSingle(props) {
  const [mentor, setMentor] = useState("");
  const [manager, setManager] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/team-members/${
          props.teamMember.mentor
        }`
      )
      .then(res => {
        setMentor(res.data.teamMember);
      })
      .catch(err => {
        //I know, this is a hilarious way to do this, but I think it looks a bit cleaner over all hahaha. Change if you want xD
        setMentor({
          first_name: "not assigned",
          last_name: ""
        });
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/team-members/${
          props.teamMember.manager
        }`
      )
      .then(res => {
        setManager(res.data.teamMember);
      })
      .catch(err => {
        setManager({
          first_name: "not assigned",
          last_name: ""
        });
      });
  }, []);

  return (
    <Grid
      key={props.teamMember.id}
      item
      style={{ cursor: "pointer" }}
      onClick={e => {
        props.history.push(`/home/team-member/${props.teamMember.id}`);
      }}
    >
      <TeamsMember>
        <Typography variant="subtitle1">
          {props.teamMember.first_name} {props.teamMember.last_name}
        </Typography>
        <hr />
        <Typography variant="subtitle2">{props.teamMember.email}</Typography>
        <Typography variant="overline">
          {props.teamMember.phone_number}
        </Typography>
        <Typography variant="overline">
          mentor: {`${mentor.first_name} ${mentor.last_name}` || "not assigned"}
        </Typography>
        <Typography variant="overline">
          manager:{" "}
          {`${manager.first_name} ${manager.last_name}` || "not assigned"}
        </Typography>
        <DeleteIcon
          onClick={e => {
            e.stopPropagation();
            props.deleteTeamMember(props.teamMember.id);
          }}
        />
        {/* <ul>
                      {props.teamMember.trainingSeries.map(series => {
                        return <div>{series}</div>;
                      })}
                    </ul> */}
      </TeamsMember>
    </Grid>
  );
}

export default connect(
  null,
  {}
)(TeamMembersTabSingle);

const TeamsMember = styled(Paper)`
  margin: 10px;
  padding: 10px;
  width: 220px;
  &:hover {
    background: #f8f8f8;
  }
`;