export default {
    // 教育背景
    education: [{title: '西南石油大学', pic: require('../../src/assets/images/xlsy.png')}],
    // 前端技能
    skill: [
        {title: "html + css + js", pic: require('../../src/assets/images/html.png')},
        {title: "VUE",             pic: require('../../src/assets/images/vuejs.png')},
        {title: "React",           pic: require('../../src/assets/images/react.png')},
        {title: "小程序",           pic: require('../../src/assets/images/小程序.png')},
    ],
    // 编程学习
    note: [
        {title: "手写简单的MVVM",    pic: require('../../src/assets/images/vuejs.png'),   turn2: 'https://gitee.com/lby1024/MVVM/wikis/pages'},
        {title: "手写简单的promise", pic: require('../../src/assets/images/promise.png'), turn2: 'https://gitee.com/lby1024/promise/wikis/pages'},
        {title: "webpack4",         pic: require('../../src/assets/images/Webpack.png'), turn2: 'https://gitee.com/lby1024/webpack4/wikis/pages'},
        {title: "koa",              pic: require('../../src/assets/images/server.png'),  turn2: 'https://gitee.com/lby1024/koa/tree/master'},
        {title: "更多",           pic: require('../../src/assets/images/more.png'),    turn2: 'https://gitee.com/lby1024'},
    ],
    // 个人项目
    demos: [
        {
            title: 'VUE实现俄罗斯方块',
            tags: ['VUE'],
            pic: require('../../src/assets/images/9.png'),
            link: 'https://github.com/lby1024/Tetris'
        },  // 'VUE实现俄罗斯方块'
        {
            title: 'React仿饿了么',
            tags: ['React', 'Redux', 'react-router', 'axios', 'better-scroll'],
            pic: require('../../src/assets/images/4.png'),
            link: 'https://github.com/lby1024/ele'
        },  // 'React仿饿了么'
        {
            title: 'VUE 实现 flappy bird',
            tags: ['vue'],
            pic: require('../../src/assets/images/2.png'),
            link: 'https://github.com/lby1024/vue_flappybird'
        },  // flappy bird
        {
            title: '后台管理系统',
            tags: ['React', 'react-router', 'axios', 'antd-design', 'echarts','百度地图', '响应式'],
            pic: require('../../src/assets/images/6.png'),
            link: 'https://github.com/lby1024/off'
        },  // 后台管理系统
        {
            title: '音乐播放器',
            tags: ['vue', 'vuex', 'vue-router', 'better-scroll', 'vue-awesome-swiper', 'axios', 'jsonp'],
            pic: require('../../src/assets/images/3.png'),
            link: 'https://github.com/lby1024/music'
        },  // 音乐播放器
        {
            title: '仿简书',
            tags: ['React', 'Redux', 'react-router', 'axios', '响应式'],
            pic: require('../../src/assets/images/7.png'),
            link: 'https://github.com/lby1024/jian_shu'
        },  // 简书
        {
            title: '仿去哪儿网',
            tags: ['vue', 'vuex', 'vue-router', 'vue-awesome-swiper', 'axios', 'better-scroll'],
            pic: require('../../src/assets/images/5.png'),
            link: 'https://github.com/lby1024/travle'
        },  // 去哪儿网
        {
            title: '书单',
            tags: ['小程序'],
            pic: require('../../src/assets/images/8.png'),
            link: 'https://github.com/lby1024/books'
        },  // 书单
        {
            title: '计算器',
            tags: ['小程序'],
            pic: require('../../src/assets/images/1.png'),
            link: 'https://github.com/lby1024/wechart_calculator'
        },  // 计算器
    ]
}