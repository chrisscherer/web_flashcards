class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.belongs_to :deck
      t.string :side_one
      t.string :side_two

      t.timestamps
    end
  end
end
