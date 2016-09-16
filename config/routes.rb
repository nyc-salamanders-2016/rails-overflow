Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  concern :commentable do
    resources :comments, only: [:new, :create]
  end

  resources :users, only: [:new, :create, :show] do
    get 'login', on: :collection
    post 'login', on: :collection
    get 'logout', on: :collection
  end

  resources :questions, concerns: :commentable do
    resources :answers, only: [:new, :create]
  end

  resources :answers, only: [:show], concerns: :commentable

end
