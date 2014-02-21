class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :side_one
      t.string :side_two

      t.string :timestamps
    end
  end
end
