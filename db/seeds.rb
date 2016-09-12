# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.find_by(username: 'username') || User.create(username: 'username', email: 'email@email.com', password: 'password')
question = user.questions.find_or_create_by(title: "article title", body: 'im telech mi yechabek oti kacha mi nishar oti besof hayom')
answer1 = question.answers.find_or_create_by(body: "yeah that sounds about right", user: user)
