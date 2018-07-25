class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :cover
      t.array :authors
      t.string :publisher
      t.array :subjects
      t.array :excerpts
      t.array :links

      t.timestamps
    end
  end
end
