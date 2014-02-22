get '/' do
  @display_deck = []
  max_num_of_decks = 10
  @current_user = current_user

  if current_user
    current_user.decks.map { |deck| @display_deck << deck }
  end

  if @display_deck.size < max_num_of_decks
    Deck.all.each do |deck|
      if @display_deck.include?(deck) != true
        @display_deck << deck

        if @display_deck.size >= max_num_of_decks
          break
        end
      end
    end
  end

  erb :index
end

get '/sign_up' do
  erb :sign_up
end

get '/sign_out' do
  session.clear
  redirect '/'
end

get '/create_deck' do
  erb :create_deck
end

get '/create_cards' do
  erb :create_cards
end

post '/sign_up' do
  create(params)
  redirect '/'
end

post '/login' do
  user = User.find_by(username: params[:username])
  auth(user, params) # redirects to '/'
end

post '/create_deck' do
  current_user.decks.create(name: params[:name],
                            description: params[:description])
  # redirect '/create_cards'
end

post '/create_cards' do
  deck = Deck.last
  card = Card.create(side_one: params[:side_one],
              side_two: params[:side_two])
  deck.cards << card
  erb :create_cards
end

get '/decks/:id' do
  current_deck = Deck.find(params[:id])
  @card = current_deck.cards.sample()

  erb :play_deck
end

post '/decks/:id' do
  if params[:guess] == params[:current_card]
    session[:last_answer] = "You're awesome"
  else
    session[:last_answer] = ["You truly suck", "You really suck", "How can someone be that awful", "Really?", "Wow. No. Sucker", "Just quit now.", "Uninstall life.", "Please don't breed.", "RM-F life", "You need to stop", "No.", "Not even close", "Awful.", "Please stop"].sample
  end
  redirect "/decks/#{params[:id]}"
end
