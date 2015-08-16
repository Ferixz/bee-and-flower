class HomeController < ApplicationController
  def index
  end

  def data
    @data = File.read("#{Rails.root}/public/graph.json")
    render :json => @data
  end
end
