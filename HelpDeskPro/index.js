const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticket.route');
const analyticRoutes = require('./routes/analytics.route');

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/tickets',ticketRoutes);
app.use('/api/analytics/tickets',analyticRoutes)
mongoose.connect('mongodb://127.0.0.1:27017/TicketDataBase');

app.listen(3001, () => {
  console.log('Server started on port 3001');
});