class HomeController < ApplicationController
  def index
    render :layout => false
  end

  def data
    @data = File.read("#{Rails.root}/public/graph.json")
    render :json => @data
  end
end
