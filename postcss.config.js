// postcss的配置文件
module.exports = {
  plugins: {
    // .browserslistrc中已有该配置
    // // 自动兼容浏览器厂商
    // autoprefixer: {
    //   // 需要兼容到的程度
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },

    // 把px装换为rem
    'postcss-pxtorem': {

      // 转换基准值
      rootValue: 37.5,

      // 需要转换的css属性
      propList: ['*'],
    },
  },
};