Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  scope :api do 
    get 'posts', to: 'posts#index'
    post 'posts', to:'posts#create'
    get 'posts/:id' , to: 'posts#show'
    delete 'posts/:id/delete', to: 'posts#delete'
    put '/posts/:id/edit', to:'posts#edit'
  end
end
