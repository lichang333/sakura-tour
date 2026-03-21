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

// Migration: add visited_spots column if it doesn't exist yet
try {
  db.exec(`ALTER TABLE users ADD COLUMN visited_spots TEXT NOT NULL DEFAULT '[]'`)
} catch { /* column already exists, ignore */ }

export default db
