json.set! photo.id do
  json.imageThumbUrl photo.image.url(:thumb)
  json.imageAvatarUrl photo.image.url(:avatar)
  json.imageUrl photo.image.url
  json.title photo.title
end
