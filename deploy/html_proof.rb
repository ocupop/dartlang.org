#!/usr/bin/env ruby

require 'html-proofer'
require 'nokogiri'

require_relative 'old_site_urls'

DOMAIN = 'https://www.dartlang.org/'
LOCALHOST = 'http://localhost:4000/'

puts "===== Checking links, redirects and HTML through HTMLProofer ====="

puts "Parsing current sitemap.xml for all current URLs"
sitemap = File.open("publish/sitemap.xml") { |f| Nokogiri::XML(f) }
urls = sitemap.xpath("//xmlns:loc").map { |node| node.content }

puts "Adding old site's sitemap URLs"
urls = urls | $OLD_SITE_URLS  # does not add URLs that already exist

# Change dartlang.org to localhost:4000
localhost_urls = urls.map { |url| url.sub(DOMAIN, LOCALHOST) }

# TODO(filiph) remove when not needed
localhost_urls.delete("http://localhost:4000/events/2016/summit/index.html")

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
    },
    :log_level => :warn
  }).run
ensure
  puts "Killing firebase server on localhost"
  Process.kill(:SIGINT, pid)
end