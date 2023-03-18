const getuser = async (req, res) => {
  try {
    return res.send("Get user");
  } catch (error) {
    res.status(500).send("Unable to get user");
  }
};

module.exports = {
  getuser,
};
