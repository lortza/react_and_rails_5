class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('start_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointments = Appointment.order('start_time ASC')
    @appointment = Appointment.create(appointment_params)
    respond_to :js
    # redirect_to appointments_url
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :start_time)
  end
end
