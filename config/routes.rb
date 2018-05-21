Rails.application.routes.draw do
  resources :applications, only: [:create]
end
