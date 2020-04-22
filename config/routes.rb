Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	namespace :api do
		namespace :v1 do
			resources :appointments
			resources :instructors
			resources :users, only: [:create, :show, :index]
		end
	end
	post '/login', to: 'api/v1/sessions#create'
	delete '/logout', to: 'api/v1/sessions#destroy'
	get '/logged_in', to: 'api/v1/sessions#is_logged_in?'
end
