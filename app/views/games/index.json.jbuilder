json.array!(@games) do |game|
  json.extract! game, :id, :user_id, :level_id, :score, :result, :user_solution, :hop_count, :line_of_code
  json.url game_url(game, format: :json)
end
