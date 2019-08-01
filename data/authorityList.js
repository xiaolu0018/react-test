module.exports = (req, res) => {
  return res.json({
    dataList: [
      'user:list',//about
      'art:list',//art
      'about:btn',//
      'resource:list',//resource
      'resource:edit',//resouce 修改
    ],
    success: true,
    message: null,
    data: {},
    pageNum: 1,
    pageSize: 10,
    totalNum: 30
  });
}