class Api::PinsController < ApplicationController
    def create
         
        @pin = Pin.new(pin_params)
        # debugger
        if @pin.save 
            @pin.board_pins.create(board_id: params[:board_id]) if params[:board_id]   
            # debugger
            render :show 
        else
            render json: ['invalid pin'], status: 422 
        end 
    end

    def index
        @pins = Pin.all 
        render :index
    end

    def show 
        # debugger
        @pin = Pin.find(params[:id])
        render :show
    end

    def update
        @pin = Pin.find(params[:id])
        # debugger
        if @pin && @pin.update(pin_params)
            # debugger
             @pin.board_pins.create(board_id: params[:board_id]) if params[:board_id]   
            render :show
        else 
            render json: @pin.errors.full_messages, status: 422
        end 
    end

    def destroy
        
        @pin = Pin.find(params[:id])
        @pin.destroy 
            render json: @pin.id
        # else 
        #     render json: @pin.errors.full_messages, status: 422 
        # end 
    end

    def pin_params
        params.require(:pin).permit(:name, :link_url, :photo, :board_id)
    end



end
