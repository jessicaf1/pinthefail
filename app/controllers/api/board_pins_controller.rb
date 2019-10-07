class Api::BoardPinsController < ApplicationController

    # def index
    #     @board_pins = BoardPin.all 
    # end 

    # def show
    #     @board_pin = BoardPin.find(params[:id])
    #     if @board_pin
    #         render :show
    #     else
    #         render json: ['no board_pin relationship'], status: 422
    #     end 
    # end

    def create
        @board_pin = BoardPin.new(params[:id])
        if @board_pin.save
            render :show
        else
            render json: @board_pin.errors.full_messages, status: 422
        end 
    end

    def update
        @board_pin = BoardPin.find(params[:id])
        if @board_pin && @board_pin.update(board_pin_params)
            render :show
        else
            render json: @board_pin.errors.full_messages, status: 422
        end 
    end

    def destroy
        @board_pin = BoardPin.find(params[:id])
        if @board_pin.destroy
            render :show
        else
            render json: @board_pin.errors.full_messages, status: 422
        end 
    end

    def board_pin_params
        params.require(:boardpin).permit(:board_id, :pin_id)
    end 

end
