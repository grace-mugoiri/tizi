Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	resources :appointments
	resources :instructors
	resources :users, only: [:create, :show, :index]

	post '/register', to: 'users#create'
	post '/login', to: 'login#login',
	get '/users', to: 'users#show',
	get '/users/:id', to: 'users#show',
	put '/users/:id', to: 'users#update',
	delete '/logout', to: 'users#destroy'
	# get '/logged_in', to: 'api/v1/sessions#is_logged_in?'

	# post: RegisterUser
	# post: LoginUser
	# get: GetUserInfo => users/:id
	# get: GetAllUsers
	# put: UpdateUser -> users/:id
	# delete: DeleteUser -> users/:id
end
