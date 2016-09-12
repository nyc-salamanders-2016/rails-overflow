class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def long_form_date
    self.created_at.strftime('%B %e, %Y')
  end
end
