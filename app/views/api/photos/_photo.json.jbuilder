json.set! photo.id do
  json.imageThumbUrl photo.image.url(:thumb)
  json.imageBannerUrl photo.image.url(:banner)
  json.imageAvatarUrl photo.image.url(:avatar)
  json.imageUrl photo.image.url
  json.title photo.title
end
