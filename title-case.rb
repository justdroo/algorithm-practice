require 'byebug'

def title_case(str)
  str.downcase.split().map {|word| word.capitalize}.join(" ")
end

puts "Given:: I'm a little tea pot|| Got:: #{title_case("I'm a little tea pot")}:: #{title_case("I'm a little tea pot") == "I'm A Little Tea Pot"}"

puts "Given:: Short And Stout|| Got:: #{title_case("sHoRt AnD sToUt")}:: #{title_case("sHoRt AnD sToUt") == "Short And Stout"}"

puts "Given:: HERE IS MY HANDLE HERE IS MY SPOUT|| Got:: #{title_case("HERE IS MY HANDLE HERE IS MY SPOUT")}:: #{title_case("HERE IS MY HANDLE HERE IS MY SPOUT") == "Here Is My Handle Here Is My Spout"}"
