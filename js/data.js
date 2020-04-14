const breakfastInf = [{
    "name": "滿福堡",
    "calories": 259
  },
  {
    "name": "青蔬滿福堡",
    "calories": 261
  },
  {
    "name": "豬肉滿福堡",
    "calories": 278
  },
  {
    "name": "火腿蛋堡",
    "calories": 291
  },
  {
    "name": "鬆餅(三片)",
    "calories": 323
  },
  {
    "name": "香鷄滿福堡",
    "calories": 326
  },
  {
    "name": "豬肉滿福堡加蛋",
    "calories": 340
  },
  {
    "name": "吉事蛋堡",
    "calories": 370
  },
  {
    "name": "豬肉蛋堡",
    "calories": 374
  },
  {
    "name": "經典大早餐",
    "calories": 384
  },
  {
    "name": "香鷄滿福堡加蛋",
    "calories": 388
  },
  {
    "name": "香鷄蛋堡",
    "calories": 396
  },
  {
    "name": "豬肉鬆餅",
    "calories": 426
  },
  {
    "name": "無敵豬肉滿福堡加蛋",
    "calories": 442
  },
  {
    "name": "金黃薯餅烤土司",
    "calories": 565
  },
  {
    "name": "火腿薯餅烤土司",
    "calories": 586
  },
  {
    "name": "黃金豬排烤土司",
    "calories": 639
  },
  {
    "name": "鷄塊鬆餅大早餐",
    "calories": 694
  },
  {
    "name": "脆鷄腿排烤土司",
    "calories": 780
  }
];
const normalInf = [{
    "name": "一口咬麥麥鷄",
    "calories": 87
  },
  {
    "name": "麥克鷄塊(4塊)",
    "calories": 193
  },
  {
    "name": "義式烤鷄沙拉",
    "calories": 244
  },
  {
    "name": "漢堡",
    "calories": 246
  },
  {
    "name": "陽光鱈魚堡",
    "calories": 248
  },
  {
    "name": "麥克鷄塊(6塊)",
    "calories": 290
  },
  {
    "name": "吉事漢堡",
    "calories": 295
  },
  {
    "name": "麥脆鷄翅辣味",
    "calories": 309
  },
  {
    "name": "麥脆鷄翅原味",
    "calories": 318
  },
  {
    "name": "麥香魚",
    "calories": 321
  },
  {
    "name": "麥香鷄",
    "calories": 356
  },
  {
    "name": "凱撒脆鷄沙拉",
    "calories": 370
  },
  {
    "name": "嫩煎鷄腿堡",
    "calories": 373
  },
  {
    "name": "美式辣味香雞堡",
    "calories": 373
  },
  {
    "name": "千島黃金蝦堡",
    "calories": 379
  },
  {
    "name": "法式芥末香鷄堡",
    "calories": 379
  },
  {
    "name": "安格斯黑牛堡",
    "calories": 416
  },
  {
    "name": "黃金起司豬排堡",
    "calories": 423
  },
  {
    "name": "BLT嫩煎鷄腿堡",
    "calories": 435
  },
  {
    "name": "麥脆鷄腿辣味",
    "calories": 436
  },
  {
    "name": "麥脆鷄腿原味",
    "calories": 444
  },
  {
    "name": "雙層牛肉吉事堡",
    "calories": 446
  },
  {
    "name": "麥克鷄塊(10塊)",
    "calories": 446
  },
  {
    "name": "勁辣鷄腿堡",
    "calories": 490
  },
  {
    "name": "BLT安格斯黑牛堡",
    "calories": 525
  },
  {
    "name": "BLT辣脆鷄腿堡",
    "calories": 533
  },
  {
    "name": "大麥克",
    "calories": 534
  },
  {
    "name": "蕈菇安格斯黑牛堡",
    "calories": 575
  }
];
const snackInf = [{
    "name": "四季沙拉(小)",
    "calories": 31
  },
  {
    "name": "四季沙拉(大)",
    "calories": 35
  },
  {
    "name": "水果袋-蘋果切片",
    "calories": 36
  },
  {
    "name": "玉米杯",
    "calories": 86
  },
  {
    "name": "薯餅",
    "calories": 109
  },
  {
    "name": "蛋捲冰淇淋",
    "calories": 151
  },
  {
    "name": "薯條(小包)",
    "calories": 188
  },
  {
    "name": "麥當勞搖搖樂鷄球",
    "calories": 189
  },
  {
    "name": "勁辣香鷄翅",
    "calories": 235
  },
  {
    "name": "蘋果派",
    "calories": 240
  },
  {
    "name": "酥嫩鷄翅",
    "calories": 240
  },
  {
    "name": "薯條(中包)",
    "calories": 267
  },
  {
    "name": "麥當勞搖搖樂鷄腿排",
    "calories": 319
  },
  {
    "name": "聖代(巧克力)",
    "calories": 323
  },
  {
    "name": "薯條(大包)",
    "calories": 376
  },
  {
    "name": "冰炫風(OREO)",
    "calories": 379
  }
];
const drinkInf = [{
    "name": "熱紅茶",
    "calories": 0
  },
  {
    "name": "冰紅茶(無糖)",
    "calories": 0
  },
  {
    "name": "可口可樂ZERO(大)",
    "calories": 0
  },
  {
    "name": "可口可樂纖維+(大)",
    "calories": 0
  },
  {
    "name": "冰綠茶(原萃-無糖)(大)",
    "calories": 6
  },
  {
    "name": "熱奶茶",
    "calories": 36
  },
  {
    "name": "焦糖熱奶茶",
    "calories": 87
  },
  {
    "name": "玉米湯(大杯)",
    "calories": 141
  },
  {
    "name": "鮮乳",
    "calories": 160
  },
  {
    "name": "冰奶茶",
    "calories": 171
  },
  {
    "name": "柳橙汁(大)",
    "calories": 203
  },
  {
    "name": "冰阿薩姆鮮奶茶",
    "calories": 228
  },
  {
    "name": "冰紅茶(飛想茶-檸檬風味)(大)",
    "calories": 233
  },
  {
    "name": "冰阿薩姆咖啡鮮奶茶(大)",
    "calories": 236
  },
  {
    "name": "冰宇治抹茶鮮奶茶(大)",
    "calories": 237
  },
  {
    "name": "冰宇治抹茶咖啡鮮奶茶(大)",
    "calories": 244
  },
  {
    "name": "熱巧克力(大)",
    "calories": 247
  },
  {
    "name": "可口可樂(大)",
    "calories": 297
  },
  {
    "name": "阿薩姆咖啡鮮奶茶(大)",
    "calories": 298
  },
  {
    "name": "抹茶咖啡鮮奶茶(大)",
    "calories": 303
  },
  {
    "name": "雪碧(大)",
    "calories": 326
  },
  {
    "name": "阿薩姆鮮奶茶(大)",
    "calories": 329
  },
  {
    "name": "焦糖瑪琪朵(大)",
    "calories": 313
  },
  {
    "name": "抹茶鮮奶茶(大)",
    "calories": 334
  },
  {
    "name": "芒果萊姆冰沙",
    "calories": 360
  },
  {
    "name": "野莓萊姆冰沙",
    "calories": 360
  },
  {
    "name": "冰巧克力(大)",
    "calories": 360
  },
  {
    "name": "葡萄柚萊姆冰沙",
    "calories": 404
  },
  {
    "name": "蘋果漾芒果萊姆冰沙",
    "calories": 419
  },
  {
    "name": "蘋果漾野莓萊姆冰沙",
    "calories": 457
  },
  {
    "name": "蘋果漾葡萄柚萊姆冰沙",
    "calories": 463
  }
];

var coffeeInf = [{
    "name": "特選黑咖啡",
    "calories": 0
  },
  {
    "name": "義式濃縮",
    "calories": 0
  },
  {
    "name": "冰特選黑咖啡",
    "calories": 0
  }, {
    "name": "經典美式咖啡",
    "calories": 6
  }, {
    "name": "熱咖啡",
    "calories": 7
  },
  {
    "name": "特選重黑咖啡",
    "calories": 17
  },
  {
    "name": "特選卡布奇諾(大)",
    "calories": 183
  },
  {
    "name": "摩卡(大)",
    "calories": 184
  },
  {
    "name": "冰特選那堤(大)",
    "calories": 187
  },
  {
    "name": "特濃白咖啡(大)",
    "calories": 196
  },
  {
    "name": "特選那堤(大)",
    "calories": 197
  },
  {
    "name": "冰香草那堤(大)",
    "calories": 208
  },
  {
    "name": "冰焦糖瑪琪朵(大)",
    "calories": 215
  },
  {
    "name": "香草那堤(大)",
    "calories": 286
  },
  {
    "name": "冰摩卡(大)",
    "calories": 299
  }
]