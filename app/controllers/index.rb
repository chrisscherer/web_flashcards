get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/' do

end

get '/sign_up' do 
  erb :sign_up
end

post '/sign_up' do
  create(params)
  redirect '/'
end

post '/login' do
  user = User.find_by(username: params[:username])
  auth(user, params) # redirects to '/'
end

get '/sign_out' do
  session.clear
  redirect '/'
end

get '/create_deck' do
  erb :create_deck
end

post '/create_deck' do
  redirect '/'
end

post '/create_card' do
end
