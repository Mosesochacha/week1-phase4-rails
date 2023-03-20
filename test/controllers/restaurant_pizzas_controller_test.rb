require "test_helper"

class RestaurantPizzasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @restaurant_pizza = restaurant_pizzas(:one)
  end

  test "should get index" do
    get restaurant_pizzas_url
    assert_response :success
  end

  test "should get new" do
    get new_restaurant_pizza_url
    assert_response :success
  end

  test "should create restaurant_pizza" do
    assert_difference("RestaurantPizza.count") do
      post restaurant_pizzas_url, params: { restaurant_pizza: { pizza_id: @restaurant_pizza.pizza_id, price: @restaurant_pizza.price, restaurant_id: @restaurant_pizza.restaurant_id } }
    end

    assert_redirected_to restaurant_pizza_url(RestaurantPizza.last)
  end

  test "should show restaurant_pizza" do
    get restaurant_pizza_url(@restaurant_pizza)
    assert_response :success
  end

  test "should get edit" do
    get edit_restaurant_pizza_url(@restaurant_pizza)
    assert_response :success
  end

  test "should update restaurant_pizza" do
    patch restaurant_pizza_url(@restaurant_pizza), params: { restaurant_pizza: { pizza_id: @restaurant_pizza.pizza_id, price: @restaurant_pizza.price, restaurant_id: @restaurant_pizza.restaurant_id } }
    assert_redirected_to restaurant_pizza_url(@restaurant_pizza)
  end

  test "should destroy restaurant_pizza" do
    assert_difference("RestaurantPizza.count", -1) do
      delete restaurant_pizza_url(@restaurant_pizza)
    end

    assert_redirected_to restaurant_pizzas_url
  end
end
