json.array!(@levels) do |level|
  json.extract! level, :id, :nodes_list, :links_list, :number_of_nodes
  json.url level_url(level, format: :json)
end
