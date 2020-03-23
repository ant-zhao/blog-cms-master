// const isProduct = process.env.NODE_ENV == 'production'

// export const hostUrl = isProduct? 'https://api.blog.jjz6.cn':'http://10.10.20.202:6060'

// http://192.168.2.105:3030  // 家
// http://192.168.3.78:3030

let baseUrl = ""; //默认的url
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "https://api.blog.jjz6.cn";  //开发环境url
        break;
    case 'vip':  //vip环境地址
        baseUrl = "https://api.blog.jjz6.cn"  //测试环境中的url
        break
    case 'production':
        baseUrl = "https://api.blog.jjz6.cn"  //生产环境url
        break
}

export default baseUrl;