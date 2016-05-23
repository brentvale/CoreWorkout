# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Workout.create(name: "Full Ab Routine", user_id: 1)
Workout.create(name: "Lower Ab Focus", user_id: 1)
Workout.create(name: "Lower Ab / Back", user_id: 1)

Exercise.create(name: "Crunch", description: "Description for a crunch.")
Exercise.create(name: "Pushups", description: "Description for pushups.")
Exercise.create(name: "Bicycle", description: "Description for bicylce.")
Exercise.create(name: "Supermans", description: "Description for supermans.")
Exercise.create(name: "Side-Crunch", description: "Description for a side crunch.")
Exercise.create(name: "Bridge", description: "Description for a bridge.")
Exercise.create(name: "Leg Kicks", description: "Description for leg-kicks.")