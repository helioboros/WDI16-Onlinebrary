class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :cover
      t.string :authors
      t.string :publisher
      t.string :subjects
      t.string :excerpts
      t.string :links

      t.timestamps
    end
  end
end
