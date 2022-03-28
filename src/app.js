const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');


const filter = require('./data/filter.json')
const filterNew = require('./data/filter-new.json')
const filterProgress = require('./data/filter-progress.json')
const filterAssigned = require('./data/filter-assigned.json')
const filterApproved = require('./data/filter-approved.json')
const filterCancelled = require('./data/filter-cancelled.json')
const filterAll = require('./data/filter-all.json')

const agentBackoffice = require('./data/agent-backoffice.json')
const groups = require('./data/groups.json')
const taskStates = require('./data/tasks-states.json')

app.use(cors());
app.use(express.json())

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
  const { stateId } = req.body

  if(stateId == 3616) return res.status(200).json(filterNew)
  else if(stateId == 9178) return res.status(200).json(filterAssigned)
  else if(stateId == 1135) return res.status(200).json(filter)
  else if(stateId == 2777) return res.status(200).json(filterProgress)
  else if(stateId == 2974) return res.status(200).json(filterApproved)
  else if(stateId == 9152) return res.status(200).json(filterCancelled)
  return res.status(200).json(filterAll)

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
