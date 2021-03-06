class LevelsController < ApplicationController
  before_action :set_level, only: [:show, :edit, :update, :destroy]
  # GET /levels
  # GET /levels.json
  def index
    @levels = Level.where(:game_id => params[:game_id])
    @game = Game.find(params[:game_id])
  end

  # GET /levels/1
  # GET /levels/1.json
  def show
     @level = Level.find(params[:id])
     @first = Level.where(:game_id => @level.game_id).first
     @last = Level.where(:game_id => @level.game_id).last
     case
      when @level.id == @first.id
        @next_index = @level.level_index.to_i + 1
        @prev_index = @level.level_index.to_i
      when @level.id == @last.id
        @next_index = @level.level_index.to_i
        @prev_index = @level.level_index.to_i - 1
      when @level.id != @first.id && @level.id != @first.id
        @next_index = @level.level_index.to_i + 1
        @prev_index = @level.level_index.to_i - 1
      end
     @next = Level.find_by_level_index(@next_index)
     @prev = Level.find_by_level_index(@prev_index)
  end
  def converter

  end

  # GET /levels/new
  def new
    @level = Level.new
  end

  # GET /levels/1/edit
  def edit
  end

  # POST /levels
  # POST /levels.json
  def create
    if admin?
      @level = Level.new(level_params)

      respond_to do |format|
        if @level.save
          format.html { redirect_to @level, notice: 'Level was successfully created.' }
          format.json { render :show, status: :created, location: @level }
        else
          format.html { render :new }
          format.json { render json: @level.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # PATCH/PUT /levels/1
  # PATCH/PUT /levels/1.json
  def update
    if admin?
      respond_to do |format|
        if @level.update(level_params)
          format.html { redirect_to @level, notice: 'Level was successfully updated.' }
          format.json { render :show, status: :ok, location: @level }
        else
          format.html { render :edit }
          format.json { render json: @level.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /levels/1
  # DELETE /levels/1.json
  def destroy
    if admin?
      @level.destroy
      respond_to do |format|
        format.html { redirect_to levels_url, notice: 'Level was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_level
    @level = Level.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def level_params
    params.require(:level).permit(:nodes_list, :links_list, :number_of_nodes, :name, :flower_id, :game_id, :level_index)
  end
end
