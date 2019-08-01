module.exports = (req, res) => {
  return res.json({
    dataList: null,
    success: true,
    message: null,
    data: {
      name:'test0007',
      userId:'307',
      phone: '15162736475',
    },
    pageNum: 1,
    pageSize: 10,
    totalNum: 30
  });
}