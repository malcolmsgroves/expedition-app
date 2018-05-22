class Application < ApplicationRecord
  validates :email, presence: true
  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :overall_exp, presence: true
  validates :hvac_exp, presence: true
  validates :refrigeration_exp, presence: true
  validates :mechanical_exp, presence: true
end
