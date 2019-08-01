const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = (req, res) => {
  let len = Random.natural(1, (req.body.pageSize || 10));
  let mod = Mock.mock({
    'dataList': [...new Array(12)].map(() => ({
      id: Random.guid(),
      name: Random.cname(),
      ip: Random.ip(),
      pid: Random.integer(0, 100),
      pna: Random.cword(3, 20),
      time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
      con: Random.natural(0, 100),
      tx: 0,
      url: Random.image('200x100'),
      rx: Random.float(0, 1000) + 'px',
      txp: Random.float(0, 1000),
      rxp: Random.natural(0, 100)
    })),
    'success': true,
    'message': null,
    'data': {
      name: Random.cname()
    },
    'pageNum': req.body.pageNum || 1,
    'pageSize': 12,
    'totalNum': 121
  })

  return res.json(mod);
}