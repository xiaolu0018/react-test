const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = (req, res) => {
  let mod = {
    dataList: [],
    success: Random.boolean(),
    message: null,
    data: {
      newList: 'save edit fail,try again'
    },
    pageNum: 1,
    pageSize: 10,
    totalNum: 30
  }
  return res.json(mod);
}