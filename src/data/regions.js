/* ──────────────────────────────────────────────
   regions.js — 制县等级 · 云贵川
   46 个地州市方格拼图（tile cartogram）：
   x/y 为网格坐标（9 列），近似真实地理相对位置。
   玩法借鉴「制県等級」（JapanEx）：
   住过5 / 住宿4 / 玩过3 / 途经2 / 落地1 / 未踏足0
────────────────────────────────────────────── */

export const LEVELS = [
  { v: 5, label: '住过', desc: '居住过' },
  { v: 4, label: '住宿', desc: '过夜旅行' },
  { v: 3, label: '玩过', desc: '游玩到访' },
  { v: 2, label: '途经', desc: '路过没停留' },
  { v: 1, label: '落地', desc: '仅中转/换乘' },
  { v: 0, label: '未踏', desc: '还没去过' },
]

/* 城市 id → 区域 code：该城市任一景点打卡后，区域自动视为「玩过」 */
export const CITY_REGION = {
  dali: 'yn-dali',
}

export const REGIONS = [
  /* ── 四川（21）── */
  { code: 'sc-aba',    name: '阿坝',   province: '川', x: 2, y: 0 },
  { code: 'sc-guangyuan', name: '广元', province: '川', x: 4, y: 0 },
  { code: 'sc-bazhong',  name: '巴中',  province: '川', x: 5, y: 0 },
  { code: 'sc-dazhou',   name: '达州',  province: '川', x: 6, y: 0 },
  { code: 'sc-ganzi',    name: '甘孜',  province: '川', x: 1, y: 1 },
  { code: 'sc-mianyang', name: '绵阳',  province: '川', x: 3, y: 1 },
  { code: 'sc-deyang',   name: '德阳',  province: '川', x: 4, y: 1 },
  { code: 'sc-nanchong', name: '南充',  province: '川', x: 5, y: 1 },
  { code: 'sc-guangan',  name: '广安',  province: '川', x: 6, y: 1 },
  { code: 'sc-yaan',     name: '雅安',  province: '川', x: 2, y: 2 },
  { code: 'sc-chengdu',  name: '成都',  province: '川', x: 3, y: 2 },
  { code: 'sc-suining',  name: '遂宁',  province: '川', x: 4, y: 2 },
  { code: 'sc-ziyang',   name: '资阳',  province: '川', x: 5, y: 2 },
  { code: 'sc-liangshan', name: '凉山', province: '川', x: 1, y: 3 },
  { code: 'sc-leshan',   name: '乐山',  province: '川', x: 2, y: 3 },
  { code: 'sc-meishan',  name: '眉山',  province: '川', x: 3, y: 3 },
  { code: 'sc-neijiang', name: '内江',  province: '川', x: 4, y: 3 },
  { code: 'sc-zigong',   name: '自贡',  province: '川', x: 5, y: 3 },
  { code: 'sc-panzhihua', name: '攀枝花', province: '川', x: 1, y: 4 },
  { code: 'sc-yibin',    name: '宜宾',  province: '川', x: 3, y: 4 },
  { code: 'sc-luzhou',   name: '泸州',  province: '川', x: 4, y: 4 },

  /* ── 贵州（9）── */
  { code: 'gz-zunyi',    name: '遵义',  province: '黔', x: 7, y: 4 },
  { code: 'gz-tongren',  name: '铜仁',  province: '黔', x: 8, y: 4 },
  { code: 'gz-bijie',    name: '毕节',  province: '黔', x: 6, y: 5 },
  { code: 'gz-guiyang',  name: '贵阳',  province: '黔', x: 7, y: 5 },
  { code: 'gz-qiandongnan', name: '黔东南', province: '黔', x: 8, y: 5 },
  { code: 'gz-liupanshui', name: '六盘水', province: '黔', x: 6, y: 6 },
  { code: 'gz-anshun',   name: '安顺',  province: '黔', x: 7, y: 6 },
  { code: 'gz-qiannan',  name: '黔南',  province: '黔', x: 8, y: 6 },
  { code: 'gz-qianxinan', name: '黔西南', province: '黔', x: 6, y: 7 },

  /* ── 云南（16）── */
  { code: 'yn-diqing',   name: '迪庆',  province: '滇', x: 0, y: 4 },
  { code: 'yn-nujiang',  name: '怒江',  province: '滇', x: 0, y: 5 },
  { code: 'yn-lijiang',  name: '丽江',  province: '滇', x: 1, y: 5 },
  { code: 'yn-zhaotong', name: '昭通',  province: '滇', x: 3, y: 5 },
  { code: 'yn-baoshan',  name: '保山',  province: '滇', x: 1, y: 6 },
  { code: 'yn-dali',     name: '大理',  province: '滇', x: 2, y: 6 },
  { code: 'yn-chuxiong', name: '楚雄',  province: '滇', x: 3, y: 6 },
  { code: 'yn-kunming',  name: '昆明',  province: '滇', x: 4, y: 6 },
  { code: 'yn-qujing',   name: '曲靖',  province: '滇', x: 5, y: 6 },
  { code: 'yn-dehong',   name: '德宏',  province: '滇', x: 0, y: 7 },
  { code: 'yn-lincang',  name: '临沧',  province: '滇', x: 1, y: 7 },
  { code: 'yn-puer',     name: '普洱',  province: '滇', x: 2, y: 7 },
  { code: 'yn-yuxi',     name: '玉溪',  province: '滇', x: 3, y: 7 },
  { code: 'yn-honghe',   name: '红河',  province: '滇', x: 4, y: 7 },
  { code: 'yn-wenshan',  name: '文山',  province: '滇', x: 5, y: 7 },
  { code: 'yn-xishuangbanna', name: '版纳', province: '滇', x: 2, y: 8 },
]

export const GRID_COLS = 9
export const GRID_ROWS = 9
