export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/customer-segment/index',
    'pages/project-preference/index',
    'pages/member-value/index',
    'pages/operation/index',
    'pages/warning/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFFFFF',
    navigationBarTitleText: '求美者分层经营',
    navigationBarTextStyle: 'black',
    backgroundColor: '#F7F8FA'
  },
  tabBar: {
    color: '#86909C',
    selectedColor: '#165DFF',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '今日概览'
      },
      {
        pagePath: 'pages/customer-segment/index',
        text: '客群分层'
      },
      {
        pagePath: 'pages/project-preference/index',
        text: '项目偏好'
      },
      {
        pagePath: 'pages/member-value/index',
        text: '会员价值'
      },
      {
        pagePath: 'pages/operation/index',
        text: '运营动作'
      },
      {
        pagePath: 'pages/warning/index',
        text: '异常预警'
      }
    ]
  }
})
