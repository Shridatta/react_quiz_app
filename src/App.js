import React, { Component } from "react";
import Quiz from "./components/Quiz";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false
    };
  }

  showIntro() {
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
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                this.start();
              }}
            >
              Begin
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  start() {
    this.setState({ started: true });
  }
  getContent() {
    if (!this.state.started) {
      return this.showIntro();
    }
    return <Quiz />;
  }
  render() {
    return <div>{this.getContent()}</div>;
  }
}

export default App;
