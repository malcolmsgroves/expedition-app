Rails.application.routes.draw do
  scope :api do
    resources :applications, only: [:create]
  end
end
