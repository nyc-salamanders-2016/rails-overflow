class CreateQuestionTags < ActiveRecord::Migration[5.0]
  def change
    create_table :question_tags do |t|
      t.belongs_to :question, null: false
      t.belongs_to :tag, null: false

      t.timestamps null: false
    end
  end
end
