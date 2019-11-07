Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :follows, only: [:create, :destroy]
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :show, :update, :create, :destroy] do 
        resources :pins, only: [:create, :update]
    end 
    resources :pins, only: [:index, :show, :update, :create, :destroy]
    resources :board_pins, only: [:show, :create, :destroy, :update, :index]
  end 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

