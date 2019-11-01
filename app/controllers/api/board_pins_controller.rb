class Api::BoardPinsController < ApplicationController

    def index
        @board_pins = BoardPin.all 
    end 

    def show
        @board_pin = BoardPin.find(params[:id])
        if @board_pin
            render :show
        else
            render json: ['no board_pin relationship'], status: 422
        end 
    end

    def create
        @board_pin = BoardPin.new(board_pin_params)
        debugger
        if @board_pin.save
            debugger
            render :show 
            # @pin = Pin.find_by(id: @board_id.pin_id)
            # render :show //save pin as instance variable, render pin's show 
        else
            debugger
            render json: ['already saved to board!'], status: 422
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
        params.require(:board_pin).permit(:pin_id, :board_id)
    end 

end
