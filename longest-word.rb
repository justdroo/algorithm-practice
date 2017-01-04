require 'byebug'

# ATTEMPT 1
# def find_longest_word(str)
#   longest = ["i"]
#   str.split().each do |word|
#     if word.length > longest.last.length
#       longest << word
#     end
#   end
#   longest.last.length
# end

#ATTEMPT 2
# def find_longest_word(str)
#   str.split().sort{|a,b| a.length <=> b.length}.last.length
# end

#ATTEMPT 3
def find_longest_word(str)
  str.split().max_by{|word| word.length}.length
end
#
#
puts "Expected 6:: 'The quick brown fox jumped over the lazy dog' :: got => #{find_longest_word('The quick brown fox jumped over the lazy dog')}"

puts "Expected 5:: 'May the force be with you' :: got => #{find_longest_word('May the force be with you')}"

puts "Expected 6:: 'Google do a barrel roll' :: got => #{find_longest_word('Google do a barrel roll')}"

puts "Expected 19:: 'What if we try a super-long word such as otorhinolaryngology' :: got => #{find_longest_word('What if we try a super-long word such as otorhinolaryngology')}"
