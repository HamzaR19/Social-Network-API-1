const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./config/connection');
const cwd = process.cwd();
const PORT = 3001;