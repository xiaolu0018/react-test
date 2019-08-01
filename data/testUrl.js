
module.exports = (req, res) => {
    let mod = {
        dataList: [],
        success: true,
        message: null,
        data: {
            newList:'wode test'
        },
        pageNum: 1,
        pageSize: 10,
        totalNum: 30
    }
    return res.json(mod);
}