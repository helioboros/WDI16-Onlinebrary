class Book < ApplicationRecord
    include HTTParty
    base_uri 'https://openlibrary.org/api/books'
    def self.generate(api_id)
        book = find_by api_id: api_id
        return book unless book.nil?

        response = get "/#{api_id}"
        placeholder_image = "https://www.placecage.com/c/500/500"
end
