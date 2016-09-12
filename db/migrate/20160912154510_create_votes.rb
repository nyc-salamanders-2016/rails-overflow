class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :value, null: false
      t.integer :voteable_id
      t.string :voteable_type

      t.timestamps  null: false
    end
  end
end
