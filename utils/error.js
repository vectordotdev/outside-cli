module.exports = (message, exit) => {
  console.error(message)
  exit && process.exit(1)
}
