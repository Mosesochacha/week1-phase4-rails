require "application_system_test_case"

class RestaurantPizzasTest < ApplicationSystemTestCase
  setup do
    @restaurant_pizza = restaurant_pizzas(:one)
  end

  test "visiting the index" do
    visit restaurant_pizzas_url
    assert_selector "h1", text: "Restaurant pizzas"
  end

  test "should create restaurant pizza" do
    visit restaurant_pizzas_url
    click_on "New restaurant pizza"

    fill_in "Pizza", with: @restaurant_pizza.pizza_id
    fill_in "Price", with: @restaurant_pizza.price
    fill_in "Restaurant", with: @restaurant_pizza.restaurant_id
    click_on "Create Restaurant pizza"

    assert_text "Restaurant pizza was successfully created"
    click_on "Back"
  end

  test "should update Restaurant pizza" do
    visit restaurant_pizza_url(@restaurant_pizza)
    click_on "Edit this restaurant pizza", match: :first

    fill_in "Pizza", with: @restaurant_pizza.pizza_id
    fill_in "Price", with: @restaurant_pizza.price
    fill_in "Restaurant", with: @restaurant_pizza.restaurant_id
    click_on "Update Restaurant pizza"

    assert_text "Restaurant pizza was successfully updated"
    click_on "Back"
  end

  test "should destroy Restaurant pizza" do
    visit restaurant_pizza_url(@restaurant_pizza)
    click_on "Destroy this restaurant pizza", match: :first

    assert_text "Restaurant pizza was successfully destroyed"
  end
end
