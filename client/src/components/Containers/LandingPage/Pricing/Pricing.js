// contains all components for landing page
import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { animateScroll as scroll } from "react-scroll";

//Styling
import {
  styles,
  LandingPageContainer,
  NavbarContainer,
  NavbarItemsContainer,
  NavbarItem,
  FirstSection,
  FooterContainer,
  FooterItemsContainer
} from "./styles.js";

import { ArrowUpward } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core/";

import Logo from "img/training-bot.png";
//Auth
import { login } from "../../../../Auth/Auth";

let id = 0;
function createData(name, basic, premium, pro) {
  id += 1;
  return { id, name, basic, premium, pro };
}

const rows = [
  createData(
    "Automated Text/Email",
    <span>&#10004;</span>,
    <span>&#10004;</span>,
    <span>&#10004;</span>
  ),
  createData(
    "Unlimited Training Series",
    <span>&#10004;</span>,
    <span>&#10004;</span>,
    <span>&#10004;</span>
  ),
  createData(
    "Unlimited Team Members",
    <span>&#10004;</span>,
    <span>&#10004;</span>,
    <span>&#10004;</span>
  ),
  createData("Message Limit", "50/mo", "200/mo", "1000/mo")
];
class Pricing extends React.Component {
  scrollToTop(e) {
    e.preventDefault();
    scroll.scrollToTop();
  }
  render() {
    const { classes } = this.props;
    return (
      <LandingPageContainer>
        {/* NAVIGATION */}
        <NavbarContainer>
          <Link to="/">
            <img src={Logo} alt="A cute, personable robot" />
          </Link>
          <NavbarItemsContainer>
            <NavbarItem to="/team">Team</NavbarItem>
            <NavbarItem to="/pricing">Pricing</NavbarItem>
            <h2 onClick={login}>Sign In</h2>
          </NavbarItemsContainer>
        </NavbarContainer>
        {/* JUMBOTRON STYLED SECTION */}
        <FirstSection>
          <Typography variant="h3" style={{ paddingLeft: "10%" }}>
            Pricing
          </Typography>
          <div className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell />
                  <TableCell className={classes.tableCell} align="center">
                    Basic
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Premium
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Pro
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.basic}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.premium}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.pro}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className={classes.noBorder} align="center" />
                  <TableCell className={classes.noBorder} align="center">
                    <Button
                      variant="contained"
                      className={classes.selectButton}
                      onClick={login}
                    >
                      Sign Up
                    </Button>
                  </TableCell>
                  <TableCell className={classes.noBorder} align="center">
                    <Button
                      variant="contained"
                      className={classes.selectButton}
                      onClick={login}
                    >
                      Sign Up
                    </Button>
                  </TableCell>
                  <TableCell className={classes.noBorder} align="center">
                    <Button
                      variant="contained"
                      className={classes.selectButton}
                      onClick={login}
                    >
                      Sign Up
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className={classes.subCard}>
            <Typography className={classes.title}>Basic</Typography>
            <Typography className={classes.price}>FREE</Typography>
            <div className={classes.content}>
              <Typography className={classes.feature}>
                Automated Text/Email
              </Typography>
              <Typography className={classes.feature}>
                Unlimited Training Series
              </Typography>
              <Typography className={classes.feature}>
                Unlimited Team Members
              </Typography>
              <div className={classes.spread}>
                <Typography className={classes.feature}>
                  Message Limit
                </Typography>
                <Typography className={classes.feature}>50 / mo</Typography>
              </div>
            </div>
            <Button
              variant="contained"
              className={classes.selectButton}
              onClick={login}
            >
              Sign Up
            </Button>{" "}
          </div>
          <div className={classes.subCard}>
            <Typography className={classes.title}>Premium</Typography>
            <Typography className={classes.price}>
              $5
              <span className={classes.subPrice}> / mo</span>
            </Typography>{" "}
            <div className={classes.content}>
              <Typography className={classes.feature}>
                Automated Text/Email
              </Typography>
              <Typography className={classes.feature}>
                Unlimited Training Series
              </Typography>
              <Typography className={classes.feature}>
                Unlimited Team Members
              </Typography>
              <div className={classes.spread}>
                <Typography className={classes.feature}>
                  Message Limit
                </Typography>
                <Typography className={classes.feature}>200 / mo</Typography>
              </div>
            </div>
            <Button
              variant="contained"
              className={classes.selectButton}
              onClick={login}
            >
              Sign Up
            </Button>{" "}
          </div>
          <div className={classes.subCard}>
            <Typography className={classes.title}>Pro</Typography>
            <Typography className={classes.price}>
              $10
              <span className={classes.subPrice}> / mo</span>
            </Typography>{" "}
            <div className={classes.content}>
              <Typography className={classes.feature}>
                Automated Text/Email
              </Typography>
              <Typography className={classes.feature}>
                Unlimited Training Series
              </Typography>
              <Typography className={classes.feature}>
                Unlimited Team Members
              </Typography>
              <div className={classes.spread}>
                <Typography className={classes.feature}>
                  Message Limit
                </Typography>
                <Typography className={classes.feature}>1000 / mo</Typography>
              </div>
            </div>
            <Button
              variant="contained"
              className={classes.selectButton}
              onClick={login}
            >
              Sign Up
            </Button>{" "}
          </div>
        </FirstSection>
        <FooterContainer>
          <FooterItemsContainer>
            <Link to="/team">Team</Link>
            <Link to="/pricing">Pricing</Link>
          </FooterItemsContainer>
          <ArrowUpward onClick={e => this.scrollToTop(e)} />
        </FooterContainer>
      </LandingPageContainer>
    );
  }
}
export default withStyles(styles)(Pricing);
