class RestaurantPizzasController < ApplicationController
  before_action :set_restaurant_pizza, only: %i[ show update destroy ]

  # GET /restaurant_pizzas
  def index
    @restaurant_pizzas = RestaurantPizza.all

    render json: @restaurant_pizzas
  end

  # GET /restaurant_pizzas/1
  def show
    render json: @restaurant_pizza
  end

  # POST /restaurant_pizzas
  def create
    restaurant_pizza = RestaurantPizza.new(restaurant_pizza_params)
    if restaurant_pizza.save
      render json: restaurant_pizza.pizza
    else
      render json: { errors: restaurant_pizza.errors.full_messages }, status: :unprocessable_entity
    end
end


  # PATCH/PUT /restaurant_pizzas/1
  def update
    if @restaurant_pizza.update(restaurant_pizza_params)
      render json: @restaurant_pizza
    else
      render json: @restaurant_pizza.errors, status: :unprocessable_entity
    end
  end

  # DELETE /restaurant_pizzas/1
  def destroy
    @restaurant_pizza.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant_pizza
      @restaurant_pizza = RestaurantPizza.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def restaurant_pizza_params
      params.require(:restaurant_pizza).permit(:price , :restaurant_id , :pizza_id)
    end
end
