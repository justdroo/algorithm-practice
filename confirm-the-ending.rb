require 'byebug'

def confirm_the_ending(str, target)
  str.slice(-target.length) == target ? true : false
end

puts confirm_the_ending("Bastian", "n")
puts confirm_the_ending("Connor", "n")
