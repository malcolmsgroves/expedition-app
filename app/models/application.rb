class Application < ApplicationRecord
  validates :email, { presence: true, uniqueness: true }
  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :overall_experience, presence: true
  validates :hvac_experience, presence: true
  validates :refrigeration_experience, presence: true
  validates :mechanical_experience, presence: true
end
