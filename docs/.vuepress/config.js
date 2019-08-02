module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-dynamic-form-component',
      description: 'Vue dynamic nested form component. Support nested Object/Hashmap/Array.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vue-dynamic-form-component',
      description: 'Vue动态嵌套表单组件，支持嵌套对象/Hashmap/数组'
    }
  },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          { title: 'Guide', collapsable: false, children: ['/guide/', '/getting-started/', '/i18n/'] },
          { title: 'API', collapsable: false, children: ['/api/dynamic-form/', '/api/descriptors/'] }
        ]
      },
      '/zh/': {
        selectText: '语言',
        label: '简体中文',
        sidebar: [
          { title: '指南', collapsable: false, children: ['/zh/guide/', '/zh/getting-started/', '/zh/i18n/'] },
          { title: 'API', collapsable: false, children: ['/zh/api/dynamic-form/', '/zh/api/descriptors/'] }
        ]
      }
    },
    nav: [
      { text: 'GitHub', link: 'https://github.com/chenquincy/vue-dynamic-form-component' },
      { text: 'v1.x', link: 'https://vue-dynamic-form.v1.quincychen.cn' }
    ]
  },
  plugins: {
    'sitemap': {
      hostname: 'https://vue-dynamic-form.quincychen.cn',
      exclude: ['/404.html']
    }
  }
}