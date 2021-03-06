class Api::BoardsController < ApplicationController

    #before_action :ensure_logged_in, only: [:create, :update]

    def index
        @boards = Board.all 
        render '/api/boards/index'
    end

    def show
        @board = Board.find(params[:id])
        render '/api/boards/show' 
    end

    def create
        # debugger
        @board = Board.new(board_params)
        @board.user_id = current_user.id 
        # debugger
        if @board.save
            render '/api/boards/show' 
        else
        render json: @board.errors.full_messages, status: 422
        end 
    end

    def update
        @board = Board.find(params[:id])
        # debugger
        if @board.user_id === current_user.id && @board.update(board_params)
            # debugger
            render '/api/boards/show' 
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
