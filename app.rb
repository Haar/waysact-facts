require "cuba"
require "cuba/contrib"
require "cuba/render"
require "mote"

Cuba.plugin Cuba::Mote
Cuba.use Rack::Static, urls: ["/js", "/css", "/img", "/data"], root: "public"

Cuba.define do
  on default do
    res.write view("index")
  end
end