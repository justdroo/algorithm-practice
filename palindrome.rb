require 'byebug'


def palindrome(str)
  strSD = str.upcase.split("").map { |char| char.sub(/ |\_|\,|\.|\:|\-|\(|\)|\\|\//, '') }.join()
  reverse = strSD.split('').reverse.join()
  if strSD == reverse
    true
  else
    false
  end
end

puts "Expected true:: 'racecar' :: got => #{palindrome('racecar')}"
puts "Expected false:: 'Drew' :: got => #{palindrome('Drew')}"

puts "Expected true:: 'never odd or even' :: got => #{palindrome('never odd or even')}"

puts "Expected true:: '_eye' :: got => #{palindrome('_eye')}"
puts "Expected true:: 'A man, a plan, a canal. Panama' :: got => #{palindrome('A man, a plan, a canal. Panama')}"
puts "Expected true:: '0_0 (: /-\ :) 0-0' :: got => #{palindrome('0_0 (: /-\ :) 0-0')}"
