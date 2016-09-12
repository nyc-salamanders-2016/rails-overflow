module ApplicationHelper

  def get_score(item)
   item.votes.reduce(0) { |score, vote| score += vote.value }
  end

end
