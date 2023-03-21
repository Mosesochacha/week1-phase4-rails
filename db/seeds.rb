require 'faker'
puts "seeding ...."
# Create 10 Pizzas
10.times do
  Pizza.create!(
    name: Faker::Food.dish,
    ingredients: Faker::Food.ingredient,
    image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['pizza'])
  )
end

# Create 5 Restaurants
5.times do
  Restaurant.create!(
    name: Faker::Company.name,
    address: Faker::Address.full_address
  )
end

# Create Restaurant Pizzas
Restaurant.all.each do |restaurant|
  Pizza.all.each do |pizza|
    restaurant_pizza = restaurant.restaurant_pizzas.create!(
      price: Faker::Commerce.price(range: 5..20),
      pizza_id: pizza.id
    )
  end
end
puts "complite"
