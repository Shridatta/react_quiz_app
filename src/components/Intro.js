import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" />
            <Typography variant="h6" color="inherit">
              React Quiz App
            </Typography>
          </Toolbar>
        </AppBar>

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Click Begin to Take the React Quiz !!!
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={"/quiz"}
              onClick={() => this.props.startOverHandleChange()}
            >
              <Button size="small" variant="contained" color="primary">
                Begin
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}
