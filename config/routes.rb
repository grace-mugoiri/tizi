Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	# root to: 'static#home'

	resources :appointments
	resources :instructors
	resources :sessions, only: [:create]
	resources :registrations, only: [:create]
	delete :logout, to: "sessions#logout"
	get :logged_in, to: "sessions#logged_in"

	resources :users, only: [:create, :show, :index, :delete]

	post '/register', to: 'users#create'
	post '/login', to: 'users#login'
	# get '/users', to: 'users#show'
	# get '/users/:id', to: 'users#show'
	# put '/users/:id', to: 'users#update'
	# delete '/users/:id', to: 'users#destroy'
end
