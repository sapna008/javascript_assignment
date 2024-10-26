//convert setTimeout to return a promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//Function to print multiple greeting messages after different delays async funcion delays
async function delayedMultiGreeting(messageDelayPairs) {
  for (const [messages, delayMs] of messageDelayPairs) {
    await delay(delayMs);
    console.log(message);
  }
}
const messageDelayPairs = [
  ["Hello!", 1000],
  ["Hi there!", 2000],
  ["Hey, how are you?", 3000],
];
delayedMultiGreeting(messageDelayPairs);
