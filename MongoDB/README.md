
# MongoDB –EJ3

A brief description of what this project does and who it's for.

Ejercicio 3
 1. En sample_airbnb.listingsAndReviews, ¿qué "roomtypes" existen?
 db.listings.aggregate([ { $group: { _id: "$room_type" } }, { $project: { _id: 0, room_type:
 "$_id" } }])
 2. En sample_training.companies, haga una query que devuelva el nombre y el año en
 el que se fundaron las 5 compañías más antiguas.
 (clase) db.companies.find({founded_year:{$ne:null}},{name:1, founded_year:1,
 _id:0}).sort({founded_year:1}).limit(5)
 3. En sample_training.trips, ¿en qué año nació el ciclista más joven? 
 (clase) db.trips.find({"birth year":{$ne:""}},{"birth year":1,_id:0}).sort({"birth
 year":-1}).limit(1)