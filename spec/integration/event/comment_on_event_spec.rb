require "spec_helper"

describe "Comment on event" do
  it_behaves_like "a commentable" do
    let!(:commentable) { create(:event, :tasafoconf, :users => [ user ], :owner => user.id) }
    let(:commentable_path)  { event_path commentable }
  end
end