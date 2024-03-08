require 'rails_helper'

RSpec.describe PostsController, type: :controller do
  let!(:posts) { create_list(:post, 3) }
  let(:post_id) { posts.first.id }

  # Test suite for GET /posts
  describe 'GET #index' do
    before { get :index }

    it 'returns all posts' do
      expect(json).not_to be_empty
      expect(json.size).to eq(3)
