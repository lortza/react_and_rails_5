# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Appointment.destroy_all

Appointment.create!([
  {title: 'Coffee Meeting', start_time: '15 April 2018 9am'},
  {title: 'Lunch Meeting', start_time: '15 April 2018 12pm'},
  {title: 'Conference Call', start_time: '15 April 2018 3pm'},
])
