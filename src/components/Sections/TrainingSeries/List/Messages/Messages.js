import React from "react";
import { connect } from "react-redux";

import { createAMessage, editMessage, getAllMessages } from "store/actions";
import DeleteModal from "components/UI/Modals/deleteModal";

import { withStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core/";

import { styles, ListItemContainer, ListButtonContainer } from "./styles.js";

function Messages(props) {
  const { messages, search, classes } = props;
  const setFilter = { messages, search };
  const filtered = props.filter(setFilter);
  const formatted = filtered.map(message => (
    <ListItemContainer key={message.id}>
      <ListItem className={classes.listItem}>
        <ListItemText
          primary={message.subject}
          secondary={message.body}
          className={classes.listItemText}
          onClick={e => this.routeToeditMessagePage(e, message)}
        />
        <ListItemSecondaryAction className={classes.secondaryAction}>
          <div>
            <p>{message.days_from_start} days</p>
          </div>
          <ListButtonContainer>
            <i
              className={`material-icons ${classes.icons}`}
              onClick={e => props.history.push(`/home/message/${message.id}`)}
            >
              edit
            </i>
            <DeleteModal
              className={`material-icons ${classes.icons}`}
              deleteType="message"
              id={message.id}
            />
          </ListButtonContainer>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </ListItemContainer>
  ));
  props.setCount(formatted.length);
  return <>{formatted}</>;
}

const mapStateToProps = state => ({
  messages: state.messagesReducer.messages
});

export default connect(
  mapStateToProps,
  { createAMessage, editMessage, getAllMessages }
)(withStyles(styles)(Messages));