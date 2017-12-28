Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, {default: :json} do

    resources :users, only: [:create, :show] do
      resources :bookings, only: [:index]
      resources :reviews, only: [:index, :create]
    end

    resources :rooms, only: [:index, :create, :update, :destroy, :show] do
      resources :bookings, only: [:index, :create]
      resources :reviews, only: [:index, :create]
    end

    resources :bookings, only: [:destroy, :update]

    resources :reviews, only: [:destroy, :update]

    resource :session, only: [:create, :destroy]
  end

end
