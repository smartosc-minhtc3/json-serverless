import express from 'express';
import cors from 'cors';
import jsonGraphqlExpress from './jsonGraphqlExpress';

var data = {
  posts: [
    { id: 1, title: 'Lorem Ipsum', views: 254, user_id: 123 },
    { id: 2, title: 'Sic Dolor amet', views: 65, user_id: 456 },
  ],
  users: [
    { id: 123, name: 'John Doe' },
    { id: 456, name: 'Jane Doe' },
  ],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: 'Consectetur adipiscing elit',
      date: new Date('2017-07-03'),
    },
    {
      id: 995,
      post_id: 1,
      body: 'Nam molestie pellentesque dui',
      date: new Date('2017-08-17'),
    },
  ],
};
var PORT = process.env.NODE_PORT || 3001;
var HOST = process.env.NODE_HOST || 'localhost';
var app = express();
app.use(cors());
app.use('/', jsonGraphqlExpress(data));
app.listen(PORT, HOST);
var msg = `GraphQL server running with your data at http://${HOST}:${PORT}/`;
console.log(msg); // eslint-disable-line no-console

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line no-console
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
