class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :comment, null: false, limit: 300
      t.timestamps
    end
    add_reference :comments, :post, foreign_key: true
  end
end
