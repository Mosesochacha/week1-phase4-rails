class PizzasController < ApplicationController
  before_action :set_pizza, only: %i[show edit update destroy]

  # GET /pizzas or /pizzas.json
  def index
    @pizzas = Pizza.all
    render json: @pizzas
  end

  # GET /pizzas/1 or /pizzas/1.json
  def show
    render json: @pizza
  end

  # GET /pizzas/new
  def new
    @pizza = Pizza.new
  end

  # GET /pizzas/1/edit
  def edit
  end

  # POST /pizzas or /pizzas.json
  def create
    @pizza = Pizza.new(pizza_params)

    if @pizza.save
      render json: @pizza, status: :created, location: @pizza
    else
      render json: @pizza.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pizzas/1 or /pizzas/1.json
  def update
    if @pizza.update(pizza_params)
      render json: @pizza
    else
      render json: @pizza.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pizzas/1 or /pizzas/1.json
  def destroy
    if @pizza.destroy
      head :no_content
    else
      render json: { error: "pizza not found" }, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pizza
      @pizza = Pizza.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pizza_params
      params.require(:pizza).permit(:name, :ingredients, :image)
    end
end