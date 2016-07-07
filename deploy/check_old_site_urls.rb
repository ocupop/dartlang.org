#!/usr/bin/env ruby

require 'html-proofer'
require_relative 'old_site_urls'

DOMAIN = 'https://www.dartlang.org/'
LOCALHOST = 'http://localhost:4000/'

localhost_urls = $OLD_SITE_URLS.map { |url| url.sub(DOMAIN, LOCALHOST) }

puts "===== Checking all links from old site's sitemap.xml ====="
puts "Spawning firebase server on localhost"
pid = spawn("firebase serve --port 4000", :out => "/dev/null")
puts "..."
sleep 5

begin
  puts "Checking links"
  HTMLProofer.check_links(localhost_urls, {
    :check_external_hash => true,
    :check_favicon => true,
    :check_html => true,
    :validation => {
      :report_invalid_tags => true,
      :report_missing_names => true
    }
  }).run
ensure
  puts "Killing firebase server on localhost"
  Process.kill(:SIGINT, pid)
end