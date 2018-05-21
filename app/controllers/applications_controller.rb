class ApplicationsController < ApplicationController
  def create
    Application.create!(application_params)
  end

  private

  def application_params
    params.require(:application).permit(:email,
                                        :firstName,
                                        :lastName,
                                        :overall_exp,
                                        :hvac_exp,
                                        :refrigeration_exp,
                                        :mechanical_exp)
  end
end
