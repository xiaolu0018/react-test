const Mock = require('mockjs')
const Random = Mock.Random
module.exports = (req, res) => {
  let len = Random.natural(1, req.body.pageSize || 10)
  return res.json({
    dataList: [...new Array(len)].map(() => ({
      id: Random.guid(),
      name: Random.cname()
    })),
    success: true,
    message: null,
    data: {},
    pageNum: 1,
    pageSize: 10,
    totalNum: 30
  })
}
