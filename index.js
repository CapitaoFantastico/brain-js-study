// input 0 0, outpu 0
// input 0 1, outpu 1
// input 1 0, outpu 1
// input 1 1, outpu 0

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

net.train(trainingData, {
  iterations: 20000, // the maximum times to iterate the training data
  errorThresh: 0.005, // the acceptable error percentage from training data
  log: (error) => console.log(error), // rate of errors in the training
  logPeriod: 100, // iterations between logging out
  learningRate: 0.3, // scales with delta to effect training rate
  momentum: 0.1, // scales with next layer's change value
});

console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 0]));
console.log(net.run([1, 1]));