module.exports = type => {
  const regex = {
    username: new RegExp('^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$'),
    default: new RegExp('[^]*')
  }
  return regex[type] ? regex[type] : regex.default
}