helpers do
  # This will return the current user, if they exist
  # Replace with code that works with your application
  def current_user
    if session[:user_id]
      @current_user ||= User.find_by_id(session[:user_id])
    end
  end

  # Returns true if current_user exists, false otherwise
  def logged_in?
    !current_user.nil?
  end

  def create(params)
    @user = User.new(username: params[:username],
                     email: params[:email])
    @user.password = params[:password_hash]
    @user.save!
  end

  def auth(user, params)
    if user.password == params[:password_hash]
      session[:user_id] = user.id
      session[:username] = user.username
      redirect '/'
    else
      'invalid password'
    end
  end
end