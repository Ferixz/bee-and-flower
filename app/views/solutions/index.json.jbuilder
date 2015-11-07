json.array!(@solutions) do |solution|
  json.extract! solution, :id, :user_id, :game_id, :level_id, :result
  json.url solution_url(solution, format: :json)
end
