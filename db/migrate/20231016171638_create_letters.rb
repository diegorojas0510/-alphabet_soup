class CreateLetters < ActiveRecord::Migration[7.0]
  def change
    create_table :letters do |t|
      t.text :question
      t.text :response

      t.timestamps
    end
  end
end
