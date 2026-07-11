/* 一次性迁移：踏印(tayin) data/db.json 用户 → sakura SQLite users 表
   用法：node server/migrate-tayin-users.mjs /opt/tayin/data/db.json
   - email 列存踏印用户名（登录时直接输用户名）
   - 密码存 scrypt$<salt>$<hash>，首次登录由 auth.js 校验并自动升级为 bcrypt
   - levels → region_levels 原样保留
   - 幂等：email 已存在则跳过（不覆盖） */
import { readFileSync } from 'fs'
import db from './db.js'

const src = process.argv[2]
if (!src) { console.error('用法: node server/migrate-tayin-users.mjs <db.json 路径>'); process.exit(1) }

const tayin = JSON.parse(readFileSync(src, 'utf8'))
const users = tayin.users || {}
const insert = db.prepare(`
  INSERT INTO users (name, email, password, avatar, streak, last_active_date, region_levels)
  VALUES (?, ?, ?, '🏔️', 1, ?, ?)
`)
const exists = db.prepare('SELECT id FROM users WHERE email = ?')

let done = 0, skipped = 0
for (const [username, u] of Object.entries(users)) {
  if (exists.get(username)) {
    console.log(`跳过（已存在）: ${username}`)
    skipped++
    continue
  }
  const levelCount = Object.keys(u.levels || {}).length
  insert.run(
    username,                              // name
    username,                              // email 列充当登录名
    `scrypt$${u.salt}$${u.hash}`,          // 兼容格式，首登自动升级 bcrypt
    new Date().toDateString(),
    JSON.stringify(u.levels || {}),
  )
  console.log(`导入: ${username}（${levelCount} 枚印记）`)
  done++
}
console.log(`完成：导入 ${done}，跳过 ${skipped}`)
