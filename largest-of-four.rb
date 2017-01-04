def largest_of_four(arr)
  arr.map { |a| a.max_by {|num| num } }
end

puts "Expected:: [27,5,39,1001] || Got:: #{largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])}"
