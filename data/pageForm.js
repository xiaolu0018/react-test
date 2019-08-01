const Mock = require('mockjs')
const Random = Mock.Random
module.exports = (req, res) => {
  let len = Random.natural(1, req.body.pageSize || 10);
  let dataList = [...new Array(5)].map(item => ({
      roomId: Random.guid(),
      roomName:Random.csentence()
    }));
  return res.json({
    dataList: dataList,
    success: true,
    message: null,
    data: {
      roomId: dataList[Random.natural(0, 4)].roomId,
      testName: Random.cname(),
      remark: Random.csentence()
    },
    pageNum: 1,
    pageSize: 10,
    totalNum: 30
  })
}
