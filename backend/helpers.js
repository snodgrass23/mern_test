const errorHandler = (res) => {
  return (err) => {
    console.log(err);
    res.status(400).json(`Error: ${err}`);
  }
}

module.exports = { errorHandler };