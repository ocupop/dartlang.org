#!/usr/bin/env ruby

require 'html-proofer'
require 'net/http'
require 'tempfile'

require_relative 'urls/get_all'

puts "===== Checking HTML and outbound links and through HTMLProofer ====="

# TODO(filiph) remove when not needed
$LOCALHOST_URLS.delete("http://localhost:4000/events/2016/summit/index.html")

puts "Spawning firebase server on localhost"
pid = spawn("firebase serve --port #{$PORT}", :out => "/dev/null")
puts "..."
sleep 5

begin
  puts "Checking contents"
  $LOCALHOST_URLS.each do |url|
    uri = URI(url)
    puts "- #{uri}"
    source = Net::HTTP.get(uri)
    file = Tempfile.new([uri.path.gsub(/\//, '___') + '_____', '.html'])
    begin
      file.write(source)
    ensure
      file.close
    end

    begin
      HTMLProofer.check_file(file.path, {
        :url_swap => { /^\/(.*)/ => "#{$LOCALHOST}\\1" },
        :check_external_hash => true,
        # :check_favicon => true,
        :check_html => true,
        :validation => {
          # :report_missing_names => true
        },
        :cache => {
          :timeframe => '7d'
        },
        :log_level => :warn
      }).run
    ensure
       file.unlink   # deletes the temp file
    end
  end
ensure
  puts "Killing firebase server on localhost"
  Process.kill(:SIGINT, pid)
end