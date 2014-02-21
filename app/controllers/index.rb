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
  if current_user
    auth(current_user, params)
  end
end
