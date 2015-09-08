class HomeController < ApplicationController
   before_filter :authenticate_user!, :except => [:index]
  def index
    render :layout => false
  end

  def test
   @level = Level.last
  end
end
