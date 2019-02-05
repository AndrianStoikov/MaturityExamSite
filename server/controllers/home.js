module.exports = {
  home: {
    get: (req, res) => {
      res.status(200).send( {"code": 200}).end()
    }
  }
}
