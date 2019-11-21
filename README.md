# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-spaceのDB設計
## userテーブル
|Column|Type|Options|
|------|----|-------|
|email|integer|null :false|
|password|integer|null :false|
### Association
- has_many :chats
- belongs_to :gruop

## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|integer|null :false|
|image|integer|null :false|
### Association
-belongs_to :user
-belongs_to :chat-group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|user|integer|null :false|
|chat|integer|null :false|
### Association
-has_many :users
-has_many :chats

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|chat_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :chat