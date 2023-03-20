class CreatePizzas < ActiveRecord::Migration[7.0]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.text :ingredients
      t.string :image

      t.timestamps
    end
  end
end
