def repeat_string_num_times(str, num)
  if num > 0
    num.times do
      print str
    end
  else
    print ""
  end
end

repeat_string_num_times("abc", 3);
