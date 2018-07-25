Rails.application.routes.draw do
  get 'books/title'
  get 'books/subtitle'
  get 'books/authors:array'
  get 'books/subjects:array'
  get 'books/excerpts'
  get 'books/publisher'
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
