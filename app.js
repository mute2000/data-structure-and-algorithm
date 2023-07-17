const express = require('express');
const bubbleSort = require('./bubbleSort');
const binarySearch = require('./binarySearch');
const arrayOperations = require('./arrayOperations');
const Queue = require('./queue');

const app = express();
const port = 3000;

app.use(express.json());

//冒泡排序的API接口
app.post('/sort', (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    res.status(400).send({ error: 'Invalid input data' });
  } else {
    const sortedData = bubbleSort(data);
    res.send({ sortedData });
  }
});

//二分查找的API接口
app.post('/binary-search', (req, res) => {
  const { sortedArray, target } = req.body;
  const result = binarySearch(sortedArray, target);

  res.send({ result });
});

//数组的API接口
app.post('/array/insert', (req, res) => {
  const { array, value, position } = req.body;
  const newArray = arrayOperations.insert(array, value, position);

  res.send({ newArray });
});

app.post('/array/delete', (req, res) => {
  const { array, position } = req.body;
  const newArray = arrayOperations.deleteElement(array, position);

  res.send({ newArray });
});

app.post('/array/find', (req, res) => {
  const { array, value } = req.body;
  const position = arrayOperations.find(array, value);

  res.send({ position });
});

//队列的API接口
const queue = new Queue();

app.post('/queue/enqueue', (req, res) => {
  const { value } = req.body;
  queue.enqueue(value);

  res.send({ message: 'Value enqueued' });
});

app.post('/queue/dequeue', (req, res) => {
  const value = queue.dequeue();

  res.send({ value });
});

app.get('/queue/front', (req, res) => {
  const value = queue.front();

  res.send({ value });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});