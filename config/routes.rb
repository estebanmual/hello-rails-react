Rails.application.routes.draw do
  get 'greeting', to: 'greetings#index', as: 'greeting_path'
end
