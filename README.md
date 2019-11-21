# chat-spaceのDB設計
## userテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null :false|
|password|string|null :false|
### Association
- has_many :groups, through: :group_users
- has_many :users
- has_many :chats

## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|integer|null :false|
|image|integer|null :false|
### Association
-belongs_to :user
-belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
### Association
-has_many :users, through: :group_users
-has_many :group_users

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group