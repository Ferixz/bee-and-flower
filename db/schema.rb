# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151107140700) do

  create_table "colors", force: :cascade do |t|
    t.string   "name"
    t.integer  "iscc_number"
    t.string   "hex"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "fa_name"
    t.string   "intensity"
  end

  create_table "games", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "element"
  end

  create_table "levels", force: :cascade do |t|
    t.text     "nodes_list"
    t.text     "links_list"
    t.integer  "number_of_nodes"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "name"
    t.integer  "flower_id"
    t.integer  "game_id"
    t.integer  "level_index"
  end

# Could not dump table "profiles" because of following NoMethodError
#   undefined method `[]' for nil:NilClass

  create_table "solutions", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "game_id"
    t.integer  "level_id"
    t.string   "result"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "sol"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.integer  "role_id"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
