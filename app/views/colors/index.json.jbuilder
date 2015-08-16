json.array!(@colors) do |color|
  json.extract! color, :id, :name, :iscc_number, :hex
  json.url color_url(color, format: :json)
end
