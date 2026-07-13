import Database from 'better-sqlite3'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const db = new Database(join(__dirname, 'sakura.db'))

// Enable WAL mode for better concurrent read performance
db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT    NOT NULL,
    email     TEXT    NOT NULL UNIQUE,
    password  TEXT    NOT NULL,
    avatar    TEXT    NOT NULL DEFAULT '🌸',
    xp        INTEGER NOT NULL DEFAULT 0,
    streak    INTEGER NOT NULL DEFAULT 0,
    last_active_date TEXT,
    checked_spots        TEXT NOT NULL DEFAULT '[]',
    completed_activities TEXT NOT NULL DEFAULT '[]',
    visited_spots        TEXT NOT NULL DEFAULT '[]',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`)

// Migrations: add columns that may not exist in older DBs
try { db.exec(`ALTER TABLE users ADD COLUMN visited_spots       TEXT NOT NULL DEFAULT '[]'`) } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN spot_ratings        TEXT NOT NULL DEFAULT '{}'`) } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN spot_reviews        TEXT NOT NULL DEFAULT '{}'`) } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN removed_activities  TEXT NOT NULL DEFAULT '[]'`) } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN recommended_spots TEXT NOT NULL DEFAULT '[]'`) } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN spot_photos         TEXT NOT NULL DEFAULT '{}'`) } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN region_levels       TEXT NOT NULL DEFAULT '{}'`) } catch {}
// 星探食堂共享同一账号，但其整套餐厅数据独立存这一列 JSON，
// 与上面的 Sakura 景点列彻底隔离、互不污染（见 routes/star.js）
try { db.exec(`ALTER TABLE users ADD COLUMN star_data           TEXT NOT NULL DEFAULT '{}'`) } catch {}

export default db
