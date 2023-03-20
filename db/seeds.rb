# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
puts "Seeding data ........"
# Create Pizzas
5.times do
  Pizza.create(
    name: Faker::Food.dish,
    ingredients: Faker::Food.ingredient,
    image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['pizza'])
  )
end

# Create Restaurants
3.times do
  Restaurant.create(
    name: Faker::Restaurant.name,
    address: Faker::Address.full_address
  )
end

# Create Restaurant Pizzas
Restaurant.all.each do |restaurant|
  Pizza.all.each do |pizza|
    RestaurantPizza.create(
      price: Faker::Number.decimal(l_digits: 2),
      Restaurant_id: restaurant.id,
      Pizza_id: pizza.id
    )
  end
end
puts "Seeding complite"