class CreateRestaurantPizzas < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurant_pizzas do |t|
      t.float :price
      t.belongs_to :Restaurant, null: false, foreign_key: true
      t.belongs_to :Pizza, null: false, foreign_key: true

      t.timestamps
    end
  end
end
