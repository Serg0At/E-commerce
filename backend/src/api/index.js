import express from 'express';

import auth from './auth.api';
import users from './users.api';
import admin from './admin.api.js';

const app = express();

app.use('/auth', auth);
app.use('/admin', admin);
app.use('/users', users);

export default app;