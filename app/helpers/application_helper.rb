module ApplicationHelper
  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end


  def sexs
    @options = [
      [t(:male), t(:male)],
      [t(:female) , t(:female)]
    ]
    return @options
  end

  def admin?
    if current_user.role_id == 11
      return true
    else
      return false
    end
  end
end
