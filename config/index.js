// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        /*'/hotnew':{
            target:'http://op.juhe.cn/onebox/news/query',
            changeOrigin:true,
            pathRewrite:{
                '^/hotnew':''
            }
        },
        '/funny':{
            target:'http://v.juhe.cn/toutiao',
            changeOrigin:true,
            pathRewrite:{
                '^/funny':''
            }
        },*/
        '/api':{
            target:'http://v.juhe.cn/toutiao/index',
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        },
        ///getcon?url=http://mini.eastday.com/mobile/170406123327849.html&type=2&token=6e432f2ffc6ef6c70e93e9e9662fdc25
        '/getcon':{
            target:'http://api.ip138.com/text/',
            changeOrigin:true,
            pathRewrite:{
                '^/getcon':''
            }
        },
        //极速数据https://www.jisuapi.com/api/news/

        //分类        URL
        //新闻首页    http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html
        //科技        http://c.m.163.com/nc/article/list/T1348649580692/0-20.html
        //手机        http://c.m.163.com/nc/article/list/T1348649654285/0-20.html
        //移动互联    http://c.m.163.com/nc/article/list/T1351233117091/0-20.html
        //首页广告    http://c.m.163.com/nc/ad/headline/0-4.html
        '/banner':{
            target:'http://c.m.163.com/nc/article/headline/T1348647853363/0-10.html',
            changeOrigin:true,
            pathRewrite:{
                '^/banner':''
            }
        },
        '/newsIndex':{
            target:'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html',
            changeOrigin:true,
            pathRewrite:{
                '^/newsIndex':''
            }
        },
        '/technology':{
            target:'http://c.m.163.com/nc/article/list/T1348649580692/0-20.html',
            changeOrigin:true,
            pathRewrite:{
                '^/technology':''
            }
        },
        '/mobile':{
            target:'http://c.m.163.com/nc/article/list/T1348649654285/0-20.html',
            changeOrigin:true,
            pathRewrite:{
                '^/mobile':''
            }
        },
        '/mobileInternet':{
            target:'http://c.m.163.com/nc/article/list/T1351233117091/0-20.html',
            changeOrigin:true,
            pathRewrite:{
                '^/mobileInternet':''
            }
        },
        '/user':{
            target: 'http://192.168.2.223:8088/user/',
            changeOrigin: true,
            pathRewrite: {
              '^/user': ''
            }
        },
        '/userLogin':{
            target: 'http://datainfo.duapp.com/shopdata/userinfo.php',
            changeOrigin: true,
            pathRewrite: {
              '^/userLogin': ''
            }
        },
        // /http:/mini.eastday.com/mobile/
        '/watchinfo':{
            target: 'http:/mini.eastday.com/mobile/',
            changeOrigin: true,
            pathRewrite: {
              '^/watchinfo': ''
            }
        },
        '/search':{
            target:'http://api.jisuapi.com/news/search',
            changeOrigin: true,
            pathRewrite:{
                '^/search':''
            }
        }


    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
