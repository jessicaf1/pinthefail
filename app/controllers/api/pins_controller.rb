class Api::PinsController < ApplicationController
    def create
        @pin = Pin.new(pin_params)
    end

    def index
        @pins = Pin.all 
        render :index
    end

    def show 
        @pin = Pin.find(params[:id])
        if @pin.update
            render :show 
        else
            render json: @pin.errors.full_messages, status: 422
        end 
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render :show
        else 
            render json: @pin.errors.full_messages, status: 422
    end

    def destroy
        @pin = Pin.find(params[:id])
        if @pin.destroy 
            render :index 
        else 
            render json: @pin.errors.full_messages, status: 422 
        end 
    end

    def pin_params
        params.require(:pin).permit(:name, :link_url)
    end
end
