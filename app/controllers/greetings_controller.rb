class GreetingsController < ApplicationController
    def index
        greetings = Greeting.all
        index = Random.rand(0..4)
        @greeting = greetings[index]
        respond_to do |format|
        format.html { render 'index' }
        format.json { render json: @greeting }
    end
    end
end