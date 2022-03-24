const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');


const filter = require('./data/filter.json')
const agentBackoffice = require('./data/agent-backoffice.json')
const groups = require('./data/groups.json')
const taskStates = require('./data/tasks-states.json')

app.use(cors());

app.post('/auth/login', (req, res) => {
  const payload = {
    user: 'John',
    id: 111,
  };

  const jwtToken = jwt.sign(payload, 'randomsecret');

  const idToken = {
    jwtToken,
    payload,
  };

  return res.status(200).json({
    idToken,
  });
});

app.post('/inspection/tasks/filter', (req, res) => {
  return res.status(200).json(filter);
});

app.get('/inspection/groups', (req, res) => {
  return res.status(200).json(groups);
});

app.get('/tasks-states', (req, res) => {
  return res.status(200).json(taskStates);
});

app.use('/users/groups/agents,backoffice', (req, res) => {
  return res.status(200).json(agentBackoffice);
});

module.exports = app;
