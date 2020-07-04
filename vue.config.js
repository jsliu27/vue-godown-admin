const userData = require('./mock/user.json');
// 文件修改 - 重启项目
module.exports = {
  outputDir: `dist-${process.env.NODE_ENV}`,
  devServer: {
    before(app) {
      app.get('/api/user/list', function (req, res) {
        res.json({
          code: 1,
          data: userData,
          message:''
        })
      })
    }
  }
}
