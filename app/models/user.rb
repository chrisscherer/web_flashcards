class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :decks

  validates :username, :presence => true
  validates :password, :presence => true

  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end
