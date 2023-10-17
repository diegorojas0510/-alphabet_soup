class LettersController < ApplicationController

  def index
    # ORM = OBJECT REALTIONAL MAPPING "mapeo relacional de objetos"
    @letters = Letter.all
    wordSearch = GenerateLetter.new
    @matrix = wordSearch.generate
  end

  def new
    @letter = Letter.new
  end

  def create
    @letter = Letter.create letter_params
    redirect_to letters_path
  end

  private
  def letter_params
    params.require(:letter).permit(:question, :response)
  end
end
