class RestaurantPizzasController < ApplicationController
  before_action :set_restaurant_pizza, only: %i[ show edit update destroy ]

  # GET /restaurant_pizzas or /restaurant_pizzas.json
  def index
    @restaurant_pizzas = RestaurantPizza.all
  end

  # POST /restaurant_pizzas or /restaurant_pizzas.json
  def create
    @restaurant_pizza = Pizza.find(params[:pizza_id]).restaurant_pizzas.build(
      restaurant_id: params[:restaurant_id],
      price: params[:price]
    )

    if @restaurant_pizza.save
      render json: @restaurant_pizza.pizza, status: :created
    else
      render json: { errors: @restaurant_pizza.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /restaurant_pizzas/1 or /restaurant_pizzas/1.json
  def update
    if @restaurant_pizza.update(restaurant_pizza_params)
      render json: @restaurant_pizza, status: :ok
    else
      render json: { errors: @restaurant_pizza.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant_pizza
      @restaurant_pizza = RestaurantPizza.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def restaurant_pizza_params
      params.require(:restaurant_pizza).permit(:price, :restaurant_id, :pizza_id)
    end
end