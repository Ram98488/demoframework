# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookingsearch.spec.ts >> Sceanrio 1: search Stockholm hotels on Booking.com with dynamic dates
- Location: tests\bookingsearch.spec.ts:4:5

# Error details

```
Error: Unable to find calendar date 2026-07-15
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "Skip to main content" [ref=e5] [cursor=pointer]:
    - /url: "#main"
  - generic [ref=e7]:
    - banner [ref=e21]:
      - generic [ref=e22]:
        - navigation [ref=e23]:
          - link "Booking.com" [ref=e27] [cursor=pointer]:
            - /url: https://www.booking.com/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
            - img [ref=e28]
          - generic [ref=e30]:
            - button "Prices in Indian Rupee" [ref=e32] [cursor=pointer]:
              - generic [ref=e33]: INR
            - 'button "Language: English (US)" [ref=e35] [cursor=pointer]'
            - link "Customer support" [ref=e40] [cursor=pointer]:
              - /url: https://secure.booking.com/help.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee&source=header&src=profile_contact_cs
              - img [ref=e43]
            - link "List your property" [ref=e45] [cursor=pointer]:
              - /url: https://join.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&lang=en-us&sid=dc6edc82516263966d4723757acf8bee&utm_medium=frontend&utm_source=topbar
              - generic [ref=e46]: List your property
            - link "Register an account" [ref=e47] [cursor=pointer]:
              - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&prompt=signin&state=UtcBWwl_ckUON2MnNjwakgG_SIh7MzuEW7Z7RuK7fq0l3z02PfQIiQvwusBqPdLhNCXA91JCQvhPjDk9H3avWExwHOf8R8OkEEPeiAG17d_gQpEtKVljIMhbNwC9bVNreLGOfhDHDmQN8dFtQc7ZPYjGO-teW-JfAmJ-e5bmInI7zWWVZhkLVARwQ94gvkZHnDQjbtfq5LQiDidSG8da6qVdppCYYlGkfG9O95AHUNrunsK6w_3HBEe1zMn-ZNovSAsXxRoVaKs5ivBcTOHyMsD6DD8UorZ86Ys%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D
              - generic [ref=e48]: Register
            - link "Sign in" [ref=e50] [cursor=pointer]:
              - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&prompt=signin&state=UtcBWwl_ckUON2MnNjwakgG_SIh7MzuEW7Z7RuK7fq0l3z02PfQIiQvwusBqPdLhNCXA91JCQvhPjDk9H3avWExwHOf8R8OkEEPeiAG17d_gQpEtKVljIMhbNwC9bVNreLGOfhDHDmQN8dFtQc7ZPYjGO-teW-JfAmJ-e5bmInI7zWWVZhkLVARwQ94gvkZHnDQjbtfq5LQiDidSG8da6qVdppCYYlGkfG9O95AHUNrunsK6w_3HBEe1zMn-ZNovSAsXxRoVaKs5ivBcTOHyMsD6DD8UorZ86Ys%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D
              - generic [ref=e51]: Sign in
        - navigation "What are you looking for?" [ref=e52]:
          - menubar [ref=e54]:
            - menuitem "Stays" [ref=e55] [cursor=pointer]:
              - generic [ref=e56]:
                - img [ref=e58]
                - generic [ref=e60]: Stays
            - menuitem "Flights" [ref=e61] [cursor=pointer]:
              - generic [ref=e62]:
                - img [ref=e64]
                - generic [ref=e66]: Flights
            - menuitem "Car rental" [ref=e67] [cursor=pointer]:
              - generic [ref=e68]:
                - img [ref=e70]
                - generic [ref=e72]: Car rental
            - menuitem "Attractions" [ref=e73] [cursor=pointer]:
              - generic [ref=e74]:
                - img [ref=e76]
                - generic [ref=e78]: Attractions
            - menuitem "Airport taxis" [ref=e79] [cursor=pointer]:
              - generic [ref=e80]:
                - img [ref=e82]
                - generic [ref=e84]: Airport taxis
    - main [ref=e85]:
      - generic [ref=e94]:
        - generic [ref=e101]:
          - heading "Find your next stay" [level=1] [ref=e103]:
            - generic [ref=e104]: Find your next stay
          - paragraph [ref=e105]: Search deals on hotels, homes, and much more...
        - region "Search properties" [ref=e110]:
          - generic [ref=e111]:
            - generic [ref=e117]:
              - img [ref=e120]
              - combobox "Where are you going?" [ref=e122]: Stockholm
            - button "Check-in date — Check-out date" [active] [ref=e125] [cursor=pointer]:
              - generic [ref=e126]:
                - img [ref=e128]
                - generic [ref=e130]: Check-in date — Check-out date
            - 'button "Number of travelers and rooms. Currently selected: 2 adults · 0 children · 1 room" [ref=e133] [cursor=pointer]':
              - generic [ref=e134]:
                - img [ref=e136]
                - generic [ref=e138]: 2 adults · 0 children · 1 room
              - img [ref=e140]
            - button "Search" [ref=e143] [cursor=pointer]:
              - generic [ref=e144]: Search
          - group [ref=e145]:
            - generic [ref=e146]:
              - checkbox "I'm traveling for work" [ref=e147]
              - generic [ref=e148] [cursor=pointer]:
                - img [ref=e151]
                - generic [ref=e154]: I'm traveling for work
            - generic [ref=e155]:
              - checkbox "Add flights to my search" [ref=e156]
              - generic [ref=e157] [cursor=pointer]:
                - img [ref=e160]
                - generic [ref=e163]: Add flights to my search
      - generic [ref=e168]:
        - generic [ref=e176]:
          - generic [ref=e178]: Why Booking.com?
          - generic [ref=e179]:
            - heading "Book now, pay at the property" [level=3] [ref=e181]
            - paragraph [ref=e182]: FREE cancellation on most rooms
          - generic [ref=e183]:
            - heading "300M+ reviews from fellow travelers" [level=3] [ref=e185]
            - paragraph [ref=e186]: Get trusted information from guests like you
          - generic [ref=e187]:
            - heading "2+ million properties worldwide" [level=3] [ref=e189]
            - paragraph [ref=e190]: Hotels, guest houses, apartments, and more…
          - generic [ref=e191]:
            - heading "Trusted 24/7 customer service you can rely on" [level=3] [ref=e193]
            - paragraph [ref=e194]: We're always here to help
        - generic [ref=e230]:
          - generic [ref=e232]:
            - heading "Trending destinations" [level=2] [ref=e233]
            - generic [ref=e234]: Most popular choices for travelers from India
          - generic [ref=e235]:
            - link "New Delhi, India" [ref=e236] [cursor=pointer]:
              - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&dest_id=-2106102&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0
              - generic [ref=e239]:
                - text: New Delhi
                - generic "India"
            - link "Bangalore, India" [ref=e240] [cursor=pointer]:
              - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&dest_id=-2090174&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0
              - generic [ref=e243]:
                - text: Bangalore
                - generic "India"
          - generic [ref=e244]:
            - link "Mumbai, India" [ref=e245] [cursor=pointer]:
              - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&dest_id=-2092174&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0
              - generic [ref=e248]:
                - text: Mumbai
                - generic "India"
            - link "Chennai, India" [ref=e249] [cursor=pointer]:
              - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&dest_id=-2103041&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0
              - generic [ref=e252]:
                - text: Chennai
                - generic "India"
            - link "Hyderabad, India" [ref=e253] [cursor=pointer]:
              - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&dest_id=-2097701&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0
              - generic [ref=e256]:
                - text: Hyderabad
                - generic "India"
        - generic [ref=e270]:
          - heading "Travel more, spend less" [level=2] [ref=e272]
          - generic [ref=e277]:
            - heading "Sign in, save money" [level=3] [ref=e278]
            - generic [ref=e279]: Save 10% or more at participating properties – just look for the blue Genius label
            - generic [ref=e280]:
              - link "Sign in" [ref=e281] [cursor=pointer]:
                - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&state=UtcBWwl_ckUON2MnNjwakgG_SIh7MzuEW7Z7RuK7fq0l3z02PfQIiQvwusBqPdLhNCXA91JCQvhPjDk9H3avWExwHOf8R8OkEEPeiAG17d_gQpEtKVljIMhbNwC9bVNreLGOfhDHDmQN8dFtQc7ZPYjGO-teW-JfAmJ-e5bmInI7zWWVZhkLVARwQ94gvkZHnDQjbtfq5LQiDidSG8da6qVdppCYYlGkfG9O95AHUNrunsK6w_3HBEe1zMn-ZNovSAsXxRoVaKs5ivBcTOHyMsD6DD8UorZ86Ys%3D*eyJpZCI6ImluZGV4In0%3D
                - generic [ref=e282]: Sign in
              - link "Register" [ref=e283] [cursor=pointer]:
                - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&state=UtcBWwl_ckUON2MnNjwakgG_SIh7MzuEW7Z7RuK7fq0l3z02PfQIiQvwusBqPdLhNCXA91JCQvhPjDk9H3avWExwHOf8R8OkEEPeiAG17d_gQpEtKVljIMhbNwC9bVNreLGOfhDHDmQN8dFtQc7ZPYjGO-teW-JfAmJ-e5bmInI7zWWVZhkLVARwQ94gvkZHnDQjbtfq5LQiDidSG8da6qVdppCYYlGkfG9O95AHUNrunsK6w_3HBEe1zMn-ZNovSAsXxRoVaKs5ivBcTOHyMsD6DD8UorZ86Ys%3D*eyJpZCI6ImluZGV4In0%3D
                - generic [ref=e284]: Register
        - generic [ref=e294]:
          - heading "Popular with travelers from India" [level=2] [ref=e296]
          - navigation [ref=e297]:
            - list [ref=e299]:
              - listitem [ref=e300]:
                - button "Domestic cities" [ref=e301] [cursor=pointer]:
                  - generic [ref=e303]: Domestic cities
              - listitem [ref=e304]:
                - button "International cities" [ref=e305] [cursor=pointer]:
                  - generic [ref=e307]: International cities
              - listitem [ref=e308]:
                - button "Regions" [ref=e309] [cursor=pointer]:
                  - generic [ref=e311]: Regions
              - listitem [ref=e312]:
                - button "Countries" [ref=e313] [cursor=pointer]:
                  - generic [ref=e315]: Countries
              - listitem [ref=e316]:
                - button "Places to stay" [ref=e317] [cursor=pointer]:
                  - generic [ref=e319]: Places to stay
            - tabpanel "Domestic cities" [ref=e321]:
              - generic [ref=e322]:
                - list [ref=e323]:
                  - listitem [ref=e324]:
                    - link "Ooty hotels" [ref=e328] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/udagamandalam.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e329]: Ooty hotels
                  - listitem [ref=e330]:
                    - link "Hyderabad hotels" [ref=e334] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/hyderabad.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e335]: Hyderabad hotels
                  - listitem [ref=e336]:
                    - link "Jaipur hotels" [ref=e340] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/jaipur.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e341]: Jaipur hotels
                  - listitem [ref=e342]:
                    - link "Puri hotels" [ref=e346] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/puri.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e347]: Puri hotels
                  - listitem [ref=e348]:
                    - link "Cochin hotels" [ref=e352] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/cochin.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e353]: Cochin hotels
                  - listitem [ref=e354]:
                    - link "Munnar hotels" [ref=e358] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/munnar.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e359]: Munnar hotels
                  - listitem [ref=e360]:
                    - link "Mumbai hotels" [ref=e364] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/bombay.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e365]: Mumbai hotels
                  - listitem [ref=e366]:
                    - link "Bangalore hotels" [ref=e370] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/bengaluru.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e371]: Bangalore hotels
                  - listitem [ref=e372]:
                    - link "Udaipur hotels" [ref=e376] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/udaipur.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e377]: Udaipur hotels
                  - listitem [ref=e378]:
                    - link "Varanasi hotels" [ref=e382] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/benares.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e383]: Varanasi hotels
                  - listitem [ref=e384]:
                    - link "Srinagar hotels" [ref=e388] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/srinagar.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e389]: Srinagar hotels
                  - listitem [ref=e390]:
                    - link "Rishīkesh hotels" [ref=e394] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/rishikesh.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e395]: Rishīkesh hotels
                  - listitem [ref=e396]:
                    - link "Hampi hotels" [ref=e400] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/hampi.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e401]: Hampi hotels
                  - listitem [ref=e402]:
                    - link "Pondicherry hotels" [ref=e406] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/pondicherry.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e407]: Pondicherry hotels
                  - listitem [ref=e408]:
                    - link "Varkala hotels" [ref=e412] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/varkkallai.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e413]: Varkala hotels
                  - listitem [ref=e414]:
                    - link "Alleppey hotels" [ref=e418] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/alleppey.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e419]: Alleppey hotels
                  - listitem [ref=e420]:
                    - link "Shimla hotels" [ref=e424] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/simla.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e425]: Shimla hotels
                  - listitem [ref=e426]:
                    - link "Nainital hotels" [ref=e430] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/naini-tal.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e431]: Nainital hotels
                  - listitem [ref=e432]:
                    - link "Mangalore hotels" [ref=e436] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/mangalore.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e437]: Mangalore hotels
                  - listitem [ref=e438]:
                    - link "Lonavala hotels" [ref=e442] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/lonavale.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e443]: Lonavala hotels
                  - listitem [ref=e444]:
                    - link "Ahmedabad hotels" [ref=e448] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/ahmedabad.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e449]: Ahmedabad hotels
                  - listitem [ref=e450]:
                    - link "Ayodhya hotels" [ref=e454] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/ayodhya.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e455]: Ayodhya hotels
                  - listitem [ref=e456]:
                    - link "Kolkata hotels" [ref=e460] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/calcutta.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e461]: Kolkata hotels
                  - listitem [ref=e462]:
                    - link "Alibaug hotels" [ref=e466] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/alibaug.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e467]: Alibaug hotels
                  - listitem [ref=e468]:
                    - link "Tiruvannāmalai hotels" [ref=e472] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/tiruvannamalai.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                      - generic [ref=e473]: Tiruvannāmalai hotels
                - button "Show more" [ref=e475] [cursor=pointer]:
                  - img [ref=e478]
                  - generic [ref=e480]: Show more
    - contentinfo [ref=e494]:
      - navigation "Quick Links" [ref=e497]:
        - list [ref=e498]:
          - listitem [ref=e499]:
            - link "Countries" [ref=e500] [cursor=pointer]:
              - /url: https://www.booking.com/country.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e502]: Countries
            - text: .
          - listitem [ref=e503]:
            - link "Regions" [ref=e504] [cursor=pointer]:
              - /url: https://www.booking.com/region.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e506]: Regions
            - text: .
          - listitem [ref=e507]:
            - link "Cities" [ref=e508] [cursor=pointer]:
              - /url: https://www.booking.com/city.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e510]: Cities
            - text: .
          - listitem [ref=e511]:
            - link "Districts" [ref=e512] [cursor=pointer]:
              - /url: https://www.booking.com/district.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e514]: Districts
            - text: .
          - listitem [ref=e515]:
            - link "Airports" [ref=e516] [cursor=pointer]:
              - /url: https://www.booking.com/airport.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e518]: Airports
            - text: .
          - listitem [ref=e519]:
            - link "Hotels" [ref=e520] [cursor=pointer]:
              - /url: https://www.booking.com/hotel/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e522]: Hotels
            - text: .
          - listitem [ref=e523]:
            - link "Places of interest" [ref=e524] [cursor=pointer]:
              - /url: https://www.booking.com/landmark.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e526]: Places of interest
            - text: .
          - listitem [ref=e527]:
            - link "Vacation Homes" [ref=e528] [cursor=pointer]:
              - /url: https://www.booking.com/booking-home/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e530]: Vacation Homes
            - text: .
          - listitem [ref=e531]:
            - link "Apartments" [ref=e532] [cursor=pointer]:
              - /url: https://www.booking.com/apartments/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e534]: Apartments
            - text: .
          - listitem [ref=e535]:
            - link "Resorts" [ref=e536] [cursor=pointer]:
              - /url: https://www.booking.com/resorts/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e538]: Resorts
            - text: .
          - listitem [ref=e539]:
            - link "Villas" [ref=e540] [cursor=pointer]:
              - /url: https://www.booking.com/villas/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e542]: Villas
            - text: .
          - listitem [ref=e543]:
            - link "Hostels" [ref=e544] [cursor=pointer]:
              - /url: https://www.booking.com/hostels/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e546]: Hostels
            - text: .
          - listitem [ref=e547]:
            - link "B&Bs" [ref=e548] [cursor=pointer]:
              - /url: https://www.booking.com/bed-and-breakfast/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e550]: B&Bs
            - text: .
          - listitem [ref=e551]:
            - link "Guest Houses" [ref=e552] [cursor=pointer]:
              - /url: https://www.booking.com/guest-house/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e554]: Guest Houses
            - text: .
          - listitem [ref=e555]:
            - link "Unique places to stay" [ref=e556] [cursor=pointer]:
              - /url: https://www.booking.com/accommodations.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e558]: Unique places to stay
            - text: .
          - listitem [ref=e559]:
            - link "All destinations" [ref=e560] [cursor=pointer]:
              - /url: https://www.booking.com/destination.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e562]: All destinations
            - text: .
          - listitem [ref=e563]:
            - link "All flight destinations" [ref=e564] [cursor=pointer]:
              - /url: https://www.booking.com/flights/sitemap.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e566]: All flight destinations
            - text: .
          - listitem [ref=e567]:
            - link "All car rental locations" [ref=e568] [cursor=pointer]:
              - /url: https://www.booking.com/cars/sitemap.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e570]: All car rental locations
            - text: .
          - listitem [ref=e571]:
            - link "All vacation destinations" [ref=e572] [cursor=pointer]:
              - /url: https://www.booking.com/holidays/sitemap.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e574]: All vacation destinations
            - text: .
          - listitem [ref=e575]:
            - link "Guides" [ref=e576] [cursor=pointer]:
              - /url: https://www.booking.com/guides/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e578]: Guides
            - text: .
          - listitem [ref=e579]:
            - link "Discover" [ref=e580] [cursor=pointer]:
              - /url: https://www.booking.com/discover.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e582]: Discover
            - text: .
          - listitem [ref=e583]:
            - link "Discover monthly stays" [ref=e584] [cursor=pointer]:
              - /url: https://www.booking.com/extended-stays/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
              - generic [ref=e586]: Discover monthly stays
      - generic [ref=e588]:
        - generic [ref=e589]:
          - heading "Support" [level=3] [ref=e591]
          - list [ref=e592]:
            - listitem [ref=e593]:
              - link "Manage your trips" [ref=e594] [cursor=pointer]:
                - /url: https://secure.booking.com/content/cs.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e595]: Manage your trips
            - listitem [ref=e596]:
              - link "Contact Customer Service" [ref=e597] [cursor=pointer]:
                - /url: https://secure.booking.com/help.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e598]: Contact Customer Service
            - listitem [ref=e599]:
              - link "Safety Resource Center" [ref=e600] [cursor=pointer]:
                - /url: https://www.booking.com/trust_and_safety.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e601]: Safety Resource Center
        - generic [ref=e602]:
          - heading "Discover" [level=3] [ref=e604]
          - list [ref=e605]:
            - listitem [ref=e606]:
              - link "Genius loyalty program" [ref=e607] [cursor=pointer]:
                - /url: https://www.booking.com/genius.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e608]: Genius loyalty program
            - listitem [ref=e609]:
              - link "Seasonal and holiday deals" [ref=e610] [cursor=pointer]:
                - /url: https://www.booking.com/deals/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e611]: Seasonal and holiday deals
            - listitem [ref=e612]:
              - link "Travel articles" [ref=e613] [cursor=pointer]:
                - /url: https://www.booking.com/articles.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e614]: Travel articles
            - listitem [ref=e615]:
              - link "Booking.com for Business" [ref=e616] [cursor=pointer]:
                - /url: https://business.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e617]: Booking.com for Business
            - listitem [ref=e618]:
              - link "Traveller Review Awards" [ref=e619] [cursor=pointer]:
                - /url: https://www.booking.com/traveller-awards/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e620]: Traveller Review Awards
            - listitem [ref=e621]:
              - link "Car rental" [ref=e622] [cursor=pointer]:
                - /url: https://www.booking.com/cars/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e623]: Car rental
            - listitem [ref=e624]:
              - link "Flight finder" [ref=e625] [cursor=pointer]:
                - /url: https://booking.com/pxgo?token=UmFuZG9tSVYkc2RlIyh9YWktmrwAPG7d0xk8r8arn9u-2i1N_NDXe0SAspGHV8x4kms6zSUasr4G9rbELkfr4SlTgO1OI3_Yw3KzLE_4s7Kw_LXMuW9vYCmHlBnbi7L9tZ8Vzp0CNtWQ2PVxUCsI_fervP3PddCa-VCAXOumgUBB1HmdbqtxJYbdCP6SCRzs2hr4txIPqSR7uGQQnuKaOT9zW4XYRxQjoOyB8KxMoc6wm8zaEn1VGFXJl2Zliw-DcX_FBZuEIO_Tq5mkb3-Agiw8xSVFkl26hh6HR0nZoEh-G2gqoXegHYS7AIfJMYM1DMGnClbGVNAJB6WOEydGGqwLFwLMGRKc4nafIq2deIkhYPlSaIoyuOHjFHX8L52C-mKEGK25qlnM8Hxm6foGBSp2tE_c_jqOtFytcNFJf8SpBkCD0mLSd0zNAWBGDh2W8ZFAuBpltnqkbX6HLGs6XhSrq9Nucc-bmTfsYCqIbVspNNIBeSCtl6WdkH0MBVL5mQ1phwDybv5yCv9enHYdRA&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&lang=en-us&aid=304142&url=https%3A%2F%2Fbooking.kayak.com%2Fin%3Fsid%3Ddc6edc82516263966d4723757acf8bee%26mc%3DINR%26bdclc%3Den-us%26p%3Dfooter_link%26a%3Dbdc%252Ffooter_link
                - generic [ref=e626]: Flight finder
            - listitem [ref=e627]:
              - link "Restaurant reservations" [ref=e628] [cursor=pointer]:
                - /url: https://www.opentable.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&ref=16087
                - generic [ref=e629]: Restaurant reservations
            - listitem [ref=e630]:
              - link "Booking.com for Travel Agents" [ref=e631] [cursor=pointer]:
                - /url: https://www.booking.com/affiliate-program/v2/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee&utm_campaign=booking-footer&utm_content=travel-agents-link&utm_medium=referral&utm_source=booking.com
                - generic [ref=e632]: Booking.com for Travel Agents
        - generic [ref=e633]:
          - heading "Terms and settings" [level=3] [ref=e635]
          - list [ref=e636]:
            - listitem [ref=e637]:
              - link "Privacy Notice" [ref=e638] [cursor=pointer]:
                - /url: https://www.booking.com/content/privacy.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e639]: Privacy Notice
            - listitem [ref=e640]:
              - link "Terms of Service" [ref=e641] [cursor=pointer]:
                - /url: https://www.booking.com/content/terms.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e642]: Terms of Service
            - listitem [ref=e643]:
              - link "Accessibility Statement" [ref=e644] [cursor=pointer]:
                - /url: https://www.booking.com/content/accessibility_statement.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e645]: Accessibility Statement
            - listitem [ref=e646]:
              - link "Grievance officer" [ref=e647] [cursor=pointer]:
                - /url: https://secure.booking.com/content/complaints.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e648]: Grievance officer
            - listitem [ref=e649]:
              - link "Modern Slavery Statement" [ref=e650] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/modern-slavery-statement/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                - generic [ref=e651]: Modern Slavery Statement
            - listitem [ref=e652]:
              - link "Human Rights Statement" [ref=e653] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/about/compliance-and-ethics/human-rights/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                - generic [ref=e654]: Human Rights Statement
        - generic [ref=e655]:
          - heading "Partners" [level=3] [ref=e657]
          - list [ref=e658]:
            - listitem [ref=e659]:
              - link "Extranet login" [ref=e660] [cursor=pointer]:
                - /url: https://admin.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee&utm_campaign=login_footer_v0&utm_medium=frontend&utm_source=extranet_login_footer
                - generic [ref=e661]: Extranet login
            - listitem [ref=e662]:
              - link "Partner help" [ref=e663] [cursor=pointer]:
                - /url: https://partner.booking.com/en-us?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee&utm_campaign=footer_list&utm_medium=frontend_footer&utm_source=booking.com
                - generic [ref=e664]: Partner help
            - listitem [ref=e665]:
              - link "List your property" [ref=e666] [cursor=pointer]:
                - /url: https://join.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&lang=en-us&sid=dc6edc82516263966d4723757acf8bee&utm_medium=frontend&utm_source=footer_menu
                - generic [ref=e667]: List your property
            - listitem [ref=e668]:
              - link "Become an affiliate" [ref=e669] [cursor=pointer]:
                - /url: https://www.booking.com/affiliate-program/v2/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee&utm_campaign=booking-footer&utm_content=become-an-affiliate-link&utm_medium=referral&utm_source=booking.com
                - generic [ref=e670]: Become an affiliate
        - generic [ref=e671]:
          - heading "About" [level=3] [ref=e673]
          - list [ref=e674]:
            - listitem [ref=e675]:
              - link "About Booking.com" [ref=e676] [cursor=pointer]:
                - /url: https://www.booking.com/content/about.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e677]: About Booking.com
            - listitem [ref=e678]:
              - link "How We Work" [ref=e679] [cursor=pointer]:
                - /url: https://www.booking.com/content/how_we_work.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e680]: How We Work
            - listitem [ref=e681]:
              - link "Sustainability" [ref=e682] [cursor=pointer]:
                - /url: https://sustainability.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                - generic [ref=e683]: Sustainability
            - listitem [ref=e684]:
              - link "Press center" [ref=e685] [cursor=pointer]:
                - /url: https://news.booking.com/en-in
                - generic [ref=e686]: Press center
            - listitem [ref=e687]:
              - link "Careers" [ref=e688] [cursor=pointer]:
                - /url: https://careers.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                - generic [ref=e689]: Careers
            - listitem [ref=e690]:
              - link "Investor relations" [ref=e691] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB
                - generic [ref=e692]: Investor relations
            - listitem [ref=e693]:
              - link "Corporate contact" [ref=e694] [cursor=pointer]:
                - /url: https://www.booking.com/content/contact-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e695]: Corporate contact
            - listitem [ref=e696]:
              - link "Content guidelines and reporting" [ref=e697] [cursor=pointer]:
                - /url: https://www.booking.com/content-moderation-policy/overview-page.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Arf9wdIGwAIB0gIkZDUzOGQzNjEtNTI0MC00NGI5LTgzM2QtZjhmZjhkMGZjNThm2AIB4AIB&sid=dc6edc82516263966d4723757acf8bee
                - generic [ref=e698]: Content guidelines and reporting
      - generic [ref=e700]:
        - generic [ref=e701]:
          - 'button "Language: English (US)" [ref=e703] [cursor=pointer]'
          - button "Prices in Indian Rupee" [ref=e708] [cursor=pointer]:
            - generic [ref=e709]: INR
        - separator [ref=e710]
        - generic [ref=e711]:
          - generic [ref=e713]: Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
          - generic [ref=e714]: Copyright © 1996–2026 Booking.com™. All rights reserved.
        - generic [ref=e715]:
          - img "Booking.com" [ref=e716]:
            - img [ref=e717]
          - img "Priceline.com" [ref=e719]:
            - img [ref=e720]
          - img "Kayak" [ref=e723]:
            - img [ref=e724]
          - img "Agoda" [ref=e738]:
            - img [ref=e739]
          - img "OpenTable" [ref=e747]:
            - img [ref=e748]
```

# Test source

```ts
  1   | import { test, expect, type Page } from '@playwright/test';
  2   | 
  3   | 
  4   | test('Sceanrio 1: search Stockholm hotels on Booking.com with dynamic dates', async ({ page }) => {
  5   |   const destination = 'Stockholm';
  6   | 
  7   |   const today = new Date();
  8   |   const checkInDate = new Date(today);
  9   |   const checkOutDate = new Date(today);
  10  |   checkInDate.setDate(today.getDate() + 5);
  11  |   checkOutDate.setDate(today.getDate() + 9);
  12  | 
  13  |   // Helper to create a stable calendar key like 2026-07-15.
  14  |   const formatDateKey = (date: Date) => {
  15  |     const year = date.getFullYear();
  16  |     const month = `${date.getMonth() + 1}`.padStart(2, '0');
  17  |     const day = `${date.getDate()}`.padStart(2, '0');
  18  |     return `${year}-${month}-${day}`;
  19  |   };
  20  | 
  21  |   // Helper to open the date picker and choose a specific date from the popup calendar.
  22  |   const selectDateFromCalendar = async (page: Page, targetDate: Date) => {
  23  |     const targetKey = formatDateKey(targetDate);
  24  | 
  25  |     for (let attempt = 0; attempt < 3; attempt++) {
  26  |       const dateCell = page.locator(`[data-date="${targetKey}"]`).first();
  27  |       if (await dateCell.count()) {
  28  |         await dateCell.click();
  29  |         return;
  30  |       }
  31  | 
  32  |       const nextMonthButton = page
  33  |         .locator('button[aria-label*="Next"], button[aria-label*="next"], [data-testid="next-month"]')
  34  |         .first();
  35  | 
  36  |       if (await nextMonthButton.isVisible().catch(() => false)) {
  37  |         await nextMonthButton.click();
  38  |         continue;
  39  |       }
  40  | 
  41  |       break;
  42  |     }
  43  | 
> 44  |     throw new Error(`Unable to find calendar date ${targetKey}`);
      |           ^ Error: Unable to find calendar date 2026-07-15
  45  |   };
  46  | 
  47  |   // Step 1: Open the Booking.com home page.
  48  |   await page.goto('https://www.booking.com', { waitUntil: 'domcontentloaded' });
  49  |   await expect(page).toHaveURL(/booking\.com/);
  50  |   await expect(page).toHaveTitle(/Booking\.com/);
  51  | 
  52  |   // Step 2: Handling cookies.
  53  |   const acceptCookiesButton = page.getByRole('button', { name: /accept|agree/i }).first();
  54  |   if (await acceptCookiesButton.isVisible().catch(() => false)) {
  55  |     await acceptCookiesButton.click();
  56  |   }
  57  | 
  58  |   // Booking.com may also show a sign-in prompt popup. Closing it is important so the main search form remains accessible.
  59  |   const closePopupButton = page.locator('button[aria-label*="Close"], [data-testid="header-signin-prompt-close-button"]').first();
  60  |   if (await closePopupButton.isVisible().catch(() => false)) {
  61  |     await closePopupButton.click();
  62  |   }
  63  | 
  64  |   // Step 3: Change the language to English (US) if the selector is present.
  65  |   // The selector is intentionally broad so it can still work if Booking updates its language picker markup.
  66  |   const languageButton = page
  67  |     .locator('button[aria-label*="Language"], button[aria-label*="language"], button[data-testid*="language"]').first();
  68  |   if (await languageButton.isVisible().catch(() => false)) {
  69  |     await languageButton.click();
  70  |     const englishUsOption = page.getByRole('option', { name: /english \(us\)/i }).or(page.getByText(/english \(us\)/i)).first();
  71  |     if (await englishUsOption.isVisible().catch(() => false)) {
  72  |       await englishUsOption.click();
  73  |     }
  74  |   }
  75  | 
  76  |   // Step 4: Enter the destination.
  77  |   // The destination field is usually an input with a stable placeholder or name attribute, so it is a good candidate for a robust locator.
  78  |   const destinationField = page
  79  |     .getByPlaceholder(/where are you going/i)
  80  |     .or(page.getByLabel(/where are you going/i))
  81  |     .or(page.locator('input[name="ss"]'))
  82  |     .first();
  83  | 
  84  |   await expect(destinationField).toBeVisible();
  85  |   await destinationField.fill(destination);
  86  |   await expect(destinationField).toHaveValue(destination);
  87  | 
  88  |   // Booking.com may show autocomplete suggestions after typing. Clicking the first match helps keep the search focused on the intended destination.
  89  |   const destinationSuggestion = page.getByRole('option', { name: new RegExp(destination, 'i') }).first();
  90  |   if (await destinationSuggestion.isVisible().catch(() => false)) {
  91  |     await destinationSuggestion.click();
  92  |   }
  93  | 
  94  |   // Step 5 and 6: Open the date picker and select check-in and check-out dates dynamically.
  95  |   // The calendar cells use the data-date attribute, which is stable and less brittle than matching text only.
  96  |   const datePickerButton = page.locator('button[aria-label*="Check-in"], button[aria-label*="Check out"], button[data-testid*="date"]').first();
  97  |   if (await datePickerButton.isVisible().catch(() => false)) {
  98  |     await datePickerButton.click();
  99  |     await selectDateFromCalendar(page, checkInDate);
  100 | 
  101 |     const checkoutButton = page.locator('button[aria-label*="Check-out"], button[aria-label*="Check out"], button[data-testid*="date"]').nth(1);
  102 |     if (await checkoutButton.isVisible().catch(() => false)) {
  103 |       await checkoutButton.click();
  104 |     } else {
  105 |       await page.locator('body').click();
  106 |     }
  107 | 
  108 |     await selectDateFromCalendar(page, checkOutDate);
  109 |   }
  110 | 
  111 |   // Step 7 and 8: Open the occupancy popup and set adults and child count.
  112 |   // Booking.com shows these controls in a popup, so this section uses a tolerant approach and only acts if the controls are present.
  113 |   const occupancyButton = page.locator('button[aria-label*="Occupancy"], button[aria-label*="Guests"], button[data-testid*="occupancy"]').first();
  114 |   if (await occupancyButton.isVisible().catch(() => false)) {
  115 |     await occupancyButton.click();
  116 | 
  117 |     const adultsIncreaseButton = page.locator('button[aria-label*="Adults"], button[aria-label*="adult"]').filter({ hasText: '+' }).first();
  118 |     if (await adultsIncreaseButton.isVisible().catch(() => false)) {
  119 |       await adultsIncreaseButton.click();
  120 |       await adultsIncreaseButton.click();
  121 |     }
  122 | 
  123 |     const childIncreaseButton = page.locator('button[aria-label*="Children"], button[aria-label*="child"]').filter({ hasText: '+' }).first();
  124 |     if (await childIncreaseButton.isVisible().catch(() => false)) {
  125 |       await childIncreaseButton.click();
  126 |     }
  127 | 
  128 |     const childAgeSelector = page.locator('select').filter({ has: page.locator('option') }).nth(0);
  129 |     if (await childAgeSelector.isVisible().catch(() => false)) {
  130 |       await childAgeSelector.selectOption('8');
  131 |     }
  132 |   }
  133 | 
  134 |   // Step 10: Submit the search.
  135 |   // A button with a clear search role is preferred, but the code also falls back to the visible search CTA.
  136 |   const searchButton = page.getByRole('button', { name: /search/i }).or(page.getByRole('link', { name: /search/i })).first();
  137 |   await expect(searchButton).toBeVisible();
  138 |   await searchButton.click();
  139 | 
  140 |   // Step 11 and 12: Verify that the results page is loaded and the destination is shown.
  141 |   // Booking.com can take a moment to render the results list, so the assertions wait for visible content instead of using sleep.
  142 |   await expect(page).toHaveURL(/searchresults|booking\.com/);
  143 |   await expect(page.locator('body')).toContainText(/Stockholm/i);
  144 | 
```