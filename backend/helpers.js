const errorHandler = (res) => {
  return (err) => res.status(400).json(`Error: ${err}`);
}

module.exports = { errorHandler };