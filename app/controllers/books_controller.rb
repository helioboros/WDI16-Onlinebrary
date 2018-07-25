class BooksController < ApplicationController
    def index
        @book = Book.generate rand(100)
    end
end
