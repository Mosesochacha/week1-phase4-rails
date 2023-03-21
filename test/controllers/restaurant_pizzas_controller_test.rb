require "test_helper"

class RestaurantPizzasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @restaurant_pizza = restaurant_pizzas(:one)
  end

  test "should get index" do
    get restaurant_pizzas_url, as: :json
    assert_response :success
  end

  test "should create restaurant_pizza" do
    assert_difference("RestaurantPizza.count") do
      post restaurant_pizzas_url, params: { restaurant_pizza: { price: @restaurant_pizza.price } }, as: :json
    end

    assert_response :created
  end

  test "should show restaurant_pizza" do
    get restaurant_pizza_url(@restaurant_pizza), as: :json
    assert_response :success
  end

  test "should update restaurant_pizza" do
    patch restaurant_pizza_url(@restaurant_pizza), params: { restaurant_pizza: { price: @restaurant_pizza.price } }, as: :json
    assert_response :success
  end

  test "should destroy restaurant_pizza" do
    assert_difference("RestaurantPizza.count", -1) do
      delete restaurant_pizza_url(@restaurant_pizza), as: :json
    end

    assert_response :no_content
  end
end
