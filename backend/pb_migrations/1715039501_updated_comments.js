/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4z4k73v5axel9al")

  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4z4k73v5axel9al")

  collection.createRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
})
