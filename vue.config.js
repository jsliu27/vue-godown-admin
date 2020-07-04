// 模拟数据
const userData = require('./mock/user.json');
// 自定义主题
const themeConfig = require('./src/config/theme.config.ts');

// 文件修改 - 重启项目
module.exports = {
  outputDir: `dist-${process.env.NODE_ENV}`,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          ...themeConfig
        },
        javascriptEnabled: true
      }
    }
  },
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
