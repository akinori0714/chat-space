# chat-spaceのDB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null :false|
|email|string|null :false|
|password|string|null :false|
### Association
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :chats

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
-belongs_to :user
-belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
-has_many :users, through: :group_users
-has_many :group_users
-has_many :chats

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group