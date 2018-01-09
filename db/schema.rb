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

ActiveRecord::Schema.define(version: 20180109194334) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "renter_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.string "status", default: "Pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "room_id", null: false
    t.integer "adult_guests", null: false
    t.integer "child_guests", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.string "imageable_type"
    t.bigint "imageable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.string "title"
    t.index ["imageable_type", "imageable_id"], name: "index_photos_on_imageable_type_and_imageable_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.string "address", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.integer "price", null: false
    t.integer "max_guests", null: false
    t.text "description", null: false
    t.integer "beds", null: false
    t.integer "bathrooms", null: false
    t.integer "bedrooms", null: false
    t.string "cancellation", null: false
    t.integer "min_stay", null: false
    t.boolean "kitchen", default: false
    t.boolean "wifi", default: false
    t.boolean "washer", default: false
    t.boolean "dryer", default: false
    t.boolean "gym", default: false
    t.boolean "hot_tub", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "room_type", null: false
    t.index ["host_id"], name: "index_rooms_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.boolean "host", default: false
    t.string "pwd_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
