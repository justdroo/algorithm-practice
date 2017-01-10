def truncate_a_string(str, num)
  if str.length <= num
    str
  else
    str.slice(0, num > 3 ? num - 3 : num) + "..."
  end
end

puts truncate_a_string("A-tisket a-tasket A green and yellow basket", 2)
