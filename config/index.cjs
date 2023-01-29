/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb8b0b82a84cd29a8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b7802566e6523eafd2cce8fef521ff82',

  PROVINCE: '四川',
  CITY: '雅安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '♥宝贝♥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okKRn60jamSMNX4AsKeWzmD0veKU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'C2W8UNN5MdT25dgdC0JGYUGU7VddiaK12iNDRaHDxzw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1999', date: '11-19',
        },

       
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-11-11' },

      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'zagFRkT-Sgib_LGMC4ig5jw5EiJ3Gll5Xotzpj10cGU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_526b6ba96f92',
    }
  ],

}

module.exports = USER_CONFIG

