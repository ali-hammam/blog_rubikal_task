Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  scope :api do 
    
    resources :users
    post '/auth/login', to: 'authentication#login'

    scope :posts do
      get '/', to: 'posts#index'
      post '/', to:'posts#create'
      get '/:id' , to: 'posts#show'
      delete '/:id/delete', to: 'posts#delete'
      put '/:id/edit', to:'posts#edit'
      post '/:id/addcomment', to:'comments#create'
    end

    scope :comments do
      delete '/:id/delete', to: 'comments#delete'
      put '/:id/update', to: 'comments#update'
    end

  end
end
