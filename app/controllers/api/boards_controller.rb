class Api::BoardsController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :update]

    def index
        @boards = Board.all 
        render :index
    end

    def show
        @board = Board.find(params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            render :show 
        else
        render json: @board.errors.full_messages, status: 422
    end

    def update
        @board = Board.find(params[:id])
        if @board.user_id === current_user.id && @board.update(board_params)
            render :show 
        else
            render json: @board.errors.full_messages 
        end 
    end

    def destroy
        @board = Board.find(params[:id])
        if @board.destroy
            render :index 
        else
            render json: @board.errors.full_messages, status: 422
        end 
    end 

    def board_params
        params.require(:board).permit(:name, :description, :private, :user_id)
    end

end