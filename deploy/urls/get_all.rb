require 'nokogiri'

require_relative 'old_site_urls'

$PORT = 4000
$DOMAIN = 'https://www.dartlang.org/'
$LOCALHOST = "http://localhost:#{$PORT}/"

puts "Parsing current sitemap.xml for all current URLs"
sitemap = File.open("publish/sitemap.xml") { |f| Nokogiri::XML(f) }
urls = sitemap.xpath("//xmlns:loc").map { |node| node.content }

puts "Adding old site's sitemap URLs"
$URLS = urls | $OLD_SITE_URLS  # does not add URLs that already exist
$URLS.sort!

# Change dartlang.org to localhost:4000
$LOCALHOST_URLS = $URLS.map { |url| url.sub($DOMAIN, $LOCALHOST) }