// 站点全局配置：品牌信息、下载地址、域名、百度统计、SEO 关键词
export const SITE = {
  name: '蚂蚁影视',
  nameEn: 'Ant Movie',
  shortName: '蚂蚁影视',
  appPackage: 'com.antmovie.video',
  version: 'v3.2.0',
  minAndroid: 'Android 6.0 及以上',
  description:
    '蚂蚁影视是一款免费的安卓高清影视播放应用，聚合海量电影、电视剧、综艺、动漫、体育直播资源，支持极速极清播放、离线缓存、多线路切换，热门影视免费在线看。',
  // 线上域名：生产环境通过环境变量注入真实域名，用于 canonical / OG / sitemap
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.COZE_PROJECT_DOMAIN_DEFAULT ||
    'https://www.antmovie.example',
  downloadUrl:
    'https://bos.liao-hai.chat/yxq/%e8%9a%82%e8%9a%82%e5%bd%b1%e8%a7%86.apk',
  downloadFileSize: '约 28.6 MB',
  baiduAnalyticsId: 'efd07e2b1118e3636f28e03e9c4d5790',
  keywords: [
    '蚂蚁影视',
    '蚂蚁影视app',
    '蚂蚁影视下载',
    '蚂蚁影视安卓版',
    '免费看剧',
    '免费影视',
    '高清影视',
    '追剧app',
    '免费追剧软件',
    '手机影院',
    '电视剧免费观看',
    '电影免费观看',
    '蚂蚁tv',
  ],
  icp: '',
} as const;