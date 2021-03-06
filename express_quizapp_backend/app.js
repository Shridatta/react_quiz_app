var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

var config = {
  id: 1,
  lang: "en",
  questions: [
    {
      label: "React uses virtual DOM instead of the real DOM",
      options: [
        {
          label: "True",
          value: 1,
          validity: "valid"
        },
        {
          label: "False",
          value: 0,
          validity: "invalid"
        }
      ],
      user_answer: null
    },
    {
      label:
        "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser",
      options: [
        {
          label: "True",
          value: 1,
          validity: "valid"
        },
        {
          label: "False",
          value: 0,
          validity: "invalid"
        }
      ]
    },
    {
      label: "Stateless Components have the authority to change state",
      options: [
        {
          label: "True",
          value: 0,
          validity: "invalid"
        },
        {
          label: "False",
          value: 1,
          validity: "valid"
        }
      ]
    },
    {
      label:
        "Stateful Components contains no knowledge of past, current and possible future state changes",
      options: [
        {
          label: "True",
          value: 0,
          validity: "invalid"
        },
        {
          label: "False",
          value: 1,
          validity: "valid"
        }
      ]
    }
  ]
};

app.get("/", function(req, res) {
  res.json(config);
});

app.listen(process.env.PORT || 8080, () => console.log("listening"));
