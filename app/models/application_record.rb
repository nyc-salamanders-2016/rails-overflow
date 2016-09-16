class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def long_form_date
    self.created_at.strftime('%B %e, %Y')
  end

  def score
   self.votes.reduce(0) { |score, vote| score += vote.value }
  end
  
end
