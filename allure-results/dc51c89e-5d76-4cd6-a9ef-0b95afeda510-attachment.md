# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flipkart.search.spec.ts >> search lenevo log5050 and capture price
- Location: tests\flipkart.search.spec.ts:4:5

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('input[name="q"], input[title="Search for products, brands and more"]') resolved to 2 elements:
    1) <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka getByRole('textbox', { name: 'Search for Products, Brands' })
    2) <input readonly name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka locator('a').filter({ hasText: 'Search Icon' }).getByPlaceholder('Search for Products, Brands')

Call log:
  - waiting for locator('input[name="q"], input[title="Search for products, brands and more"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /account/login?ret=/
              - img "Login" [ref=e88]
              - generic [ref=e89]: Login
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e97]: More
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link "For You" [ref=e110] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e112]:
            - img [ref=e115]
            - generic [ref=e116]: For You
        - link "Fashion" [ref=e121] [cursor=pointer]:
          - /url: /aw-base-new-inline-2025-at-store
          - generic [ref=e123]:
            - img [ref=e126]
            - generic [ref=e127]: Fashion
        - link "Mobiles" [ref=e132] [cursor=pointer]:
          - /url: /mobile-phones-store
          - generic [ref=e134]:
            - img [ref=e137]
            - generic [ref=e138]: Mobiles
        - link "Beauty" [ref=e143] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e145]:
            - img [ref=e148]
            - generic [ref=e149]: Beauty
        - link "Electronics" [ref=e154] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e156]:
            - img [ref=e159]
            - generic [ref=e160]: Electronics
        - link "Home" [ref=e165] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e167]:
            - img [ref=e170]
            - generic [ref=e171]: Home
        - link "Appliances" [ref=e176] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e178]:
            - img [ref=e181]
            - generic [ref=e182]: Appliances
        - link "Toys, baby.." [ref=e187] [cursor=pointer]:
          - /url: /toys-baby-2025-new-at-store
          - generic [ref=e189]:
            - img [ref=e192]
            - generic [ref=e193]: Toys, baby..
        - link "Food & Health" [ref=e198] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e200]:
            - img [ref=e203]
            - generic [ref=e204]: Food & Health
        - link "Auto Accessories" [ref=e209] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e211]:
            - img [ref=e214]
            - generic [ref=e215]: Auto Accessories
        - link "2 Wheelers" [ref=e220] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e222]:
            - img [ref=e225]
            - generic [ref=e226]: 2 Wheelers
        - link "Sports & Fitness" [ref=e231] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e233]:
            - img [ref=e236]
            - generic [ref=e237]: Sports & Fitness
        - link "Books & Media" [ref=e242] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e244]:
            - img [ref=e247]
            - generic [ref=e248]: Books & Media
        - link "Furniture" [ref=e253] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e255]:
            - img [ref=e258]
            - generic [ref=e259]: Furniture
    - generic [ref=e267]:
      - generic [ref=e282]:
        - link "Image" [ref=e289] [cursor=pointer]:
          - /url: /infinite-m3-at-store?param=83459&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=C5WMWRU7EW8N_IAD&BU=Mixed
          - img "Image" [ref=e292]
        - link "Image" [ref=e299] [cursor=pointer]:
          - /url: /home-furnishing/bath-linen/bath-towels/pr?sid=jra%2Cjk3%2Cwtg&marketplace=FLIPKART&p%5B%5D=facets.towel_type%255B%255D%3DBath&p%5B%5D=facets.towel_type%255B%255D%3DFace&p%5B%5D=facets.towel_type%255B%255D%3DHand&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.brand%255B%255D%3DFlipkart%2BSmartBuy&p%5B%5D=facets.brand%255B%255D%3DFezora&p%5B%5D=facets.brand%255B%255D%3DTRIDENT&p%5B%5D=facets.brand%255B%255D%3DJOCKEY&p%5B%5D=facets.brand%255B%255D%3DBombay%2BDyeing&p%5B%5D=facets.brand%255B%255D%3DWelspun&p%5B%5D=facets.brand%255B%255D%3DFamyo&p%5B%5D=facets.brand%255B%255D%3DDoctor%2BTowels&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=UO1L84Y5RA8T_IAD&BU=Mixed
          - img "Image" [ref=e302]
        - link "Image" [ref=e309] [cursor=pointer]:
          - /url: /motorola-edge-70-fusion/p/itm0119095a14fb0?pid=MOBHJ7TXGWKERGJG&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=8F81WE9Y1BBS_AD&BU=Mixed
          - img "Image" [ref=e312]
        - link "Image" [ref=e319] [cursor=pointer]:
          - /url: /nothing-phone-2026-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LSYIR8IADBPH_AD&BU=Mixed
          - img "Image" [ref=e322]
        - link "Image" [ref=e329] [cursor=pointer]:
          - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MM1583TNPDQM_AD&BU=Mixed
          - img "Image" [ref=e332]
        - link "Image" [ref=e339] [cursor=pointer]:
          - /url: /6bo/b5g/~cs-amz1xxgpk1/pr?sid=6bo%2Cb5g&collection-tab-name=Core+Ultra&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=K63ZL0A6ZQK5_AD&BU=Mixed
          - img "Image" [ref=e342]
        - link "Image" [ref=e349] [cursor=pointer]:
          - /url: /oppo-reno-16-series-5g-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=910T5OQ1QG34_AD&BU=Mixed
          - img "Image" [ref=e352]
        - link "Image" [ref=e359] [cursor=pointer]:
          - /url: /laptops/~cs-b60x9q066j/pr?sid=6bo%2Cb5g&collection-tab-name=Gaming+PC&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=JJS3KR9HYQ5X_AD&BU=Mixed
          - img "Image" [ref=e362]
        - link "Image" [ref=e369] [cursor=pointer]:
          - /url: /0pm/~cs-hf66q9yolf/pr?sid=0pm&collection-tab-name=speakers+&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=3A9B4RC0HRF7_AD&BU=Mixed
          - img "Image" [ref=e372]
      - generic [ref=e394]:
        - link "Image" [ref=e399] [cursor=pointer]:
          - /url: /watches/wrist-watches/~cs-phtz9ej4gy/pr?sid=r18%2Cf13&collection-tab-name=TITAN+watches&p%5B%5D=facets.brand%255B%255D%3DTitan&p%5B%5D=facets.discount_range_v1%255B%255D%3D10%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WMGEETHS4IHM_AD&BU=Mixed
          - img "Image" [ref=e402]
        - link "Image" [ref=e407] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil&p%5B%5D=facets.brand%255B%255D%3DCAMPUS&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XUOIHOC4GDNQ_AD&BU=Mixed
          - img "Image" [ref=e410]
        - link "Image" [ref=e415] [cursor=pointer]:
          - /url: /product/p/itme?pid=MASH222PGBFZHRJG&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0F78IPWUFPRB_AD&BU=Mixed
          - img "Image" [ref=e418]
      - generic [ref=e428]:
        - generic [ref=e432]:
          - img "Image" [ref=e435]
          - generic [ref=e439]: Popular nearby
        - generic [ref=e442]:
          - link "Image Watches Upto 70% off" [ref=e447] [cursor=pointer]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.ideal_for%255B%255D%3DMen&sort=popularity&p%5B%5D=facets.theme%255B%255D%3DRetro%2BGold&hpid=hLq4J7Z-50XR63zWxy3Xk6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcHRvIDcwJSBvZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJXQVRGVVFFV0JZRlo3R0ZKIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUmV0cm8gR29sZCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e457]
            - generic [ref=e460]:
              - generic [ref=e461]: Watches
              - generic [ref=e462]: Upto 70% off
          - link "Image Cello, Milton & more From ₹99" [ref=e467] [cursor=pointer]:
            - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&hpid=rUgIA3m5TK4wZQuZBiANxqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQk9URkFLVkhaOFNRS0FKUCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGVyIEJvdHRsZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e477]
            - generic [ref=e480]:
              - generic [ref=e481]: Cello, Milton & more
              - generic [ref=e482]: From ₹99
          - link "Image Grab Big Discounts! MIn.40% Off" [ref=e487] [cursor=pointer]:
            - /url: /toys/remote-control-toys/pr?sid=mgl%2C56m&p%5B%5D=facets.discount_range_v1%255B%255D%3D40%2525%2Bor%2Bmore&hpid=AUUmn-c8TLjRmbCrCRnSY6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNSW4uNDAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlJDVEhNUkNFQ0hWOVFTSEUiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJSZW1vdGUgY29udHJvbCB0b3lzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e497]
            - generic [ref=e500]:
              - generic [ref=e501]: Grab Big Discounts!
              - generic [ref=e502]: MIn.40% Off
          - link "Image Cross sandal men From ₹129 From ₹129" [ref=e507] [cursor=pointer]:
            - /url: /mens-footwear/mens-sandals-floaters/pr?sid=osp%2Ccil%2Ce83&p%5B%5D=facets.occasion%255B%255D%3DCasual&p%5B%5D=facets.price_range.from%3D129&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DBERSACHE&p%5B%5D=facets.brand%255B%255D%3DBirde&p%5B%5D=facets.brand%255B%255D%3DFAUSTO&p%5B%5D=facets.brand%255B%255D%3DVellinto&p%5B%5D=facets.brand%255B%255D%3DBRUTON&p%5B%5D=facets.brand%255B%255D%3DSvaar&p%5B%5D=facets.brand%255B%255D%3DKoburg&p%5B%5D=facets.brand%255B%255D%3DCHIPS&p%5B%5D=facets.brand%255B%255D%3DWave%2BWalker&p%5B%5D=facets.brand%255B%255D%3DCassiey&p%5B%5D=facets.brand%255B%255D%3DEVOK&p%5B%5D=facets.brand%255B%255D%3DFabbmate&p%5B%5D=facets.brand%255B%255D%3DFeather%2BLeather&p%5B%5D=facets.brand%255B%255D%3DFOOTSOFT&p%5B%5D=facets.brand%255B%255D%3DFootox&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DKhadim%2527s&p%5B%5D=facets.brand%255B%255D%3DKolapuri&p%5B%5D=facets.brand%255B%255D%3DKraasa&p%5B%5D=facets.brand%255B%255D%3DLakhani%2BVardaan&p%5B%5D=facets.brand%255B%255D%3DLayasa&p%5B%5D=facets.brand%255B%255D%3DKzaara&p%5B%5D=facets.brand%255B%255D%3DOrtho%2B%252B%2BRest&p%5B%5D=facets.brand%255B%255D%3DPampy%2BAngel&p%5B%5D=facets.brand%255B%255D%3DShozie&p%5B%5D=facets.brand%255B%255D%3DVokline&p%5B%5D=facets.brand%255B%255D%3DWELCOME&p%5B%5D=facets.brand%255B%255D%3DYokai&p%5B%5D=facets.brand%255B%255D%3DDOCTOR%2BEXTRA%2BSOFT&p%5B%5D=facets.brand%255B%255D%3DCogs&p%5B%5D=facets.brand%255B%255D%3DDr%2BPlus&p%5B%5D=facets.brand%255B%255D%3DDRACKFOOT&p%5B%5D=facets.brand%255B%255D%3DKapani%2BFashion&p%5B%5D=facets.brand%255B%255D%3DNOBELITE&p%5B%5D=facets.brand%255B%255D%3Dsachin&p%5B%5D=facets.brand%255B%255D%3DRowlans&p%5B%5D=facets.brand%255B%255D%3DThe%2BSouled%2BStore&p%5B%5D=facets.brand%255B%255D%3DTWO%2BSOFT&p%5B%5D=facets.brand%255B%255D%3DBonkerz&p%5B%5D=facets.brand%255B%255D%3DTrendmode&p%5B%5D=facets.brand%255B%255D%3DPaaduks&p%5B%5D=facets.brand%255B%255D%3DNeoz&p%5B%5D=facets.brand%255B%255D%3DLehar&p%5B%5D=facets.brand%255B%255D%3DLakhani&p%5B%5D=facets.brand%255B%255D%3DKolhapuri&p%5B%5D=facets.brand%255B%255D%3DDENSU&p%5B%5D=facets.brand%255B%255D%3Ddensity&p%5B%5D=facets.brand%255B%255D%3DDelize&p%5B%5D=facets.brand%255B%255D%3DBolinzer&p%5B%5D=facets.brand%255B%255D%3DBOLLERO&p%5B%5D=facets.brand%255B%255D%3DBOLTAGO&p%5B%5D=facets.brand%255B%255D%3DBootco&p%5B%5D=facets.brand%255B%255D%3DBOTOWI&p%5B%5D=facets.brand%255B%255D%3DBrawo&p%5B%5D=facets.brand%255B%255D%3Dbrighto&p%5B%5D=facets.brand%255B%255D%3Dbroniq&p%5B%5D=facets.brand%255B%255D%3DAeonik&p%5B%5D=facets.brand%255B%255D%3DAeroFast&p%5B%5D=facets.brand%255B%255D%3DACCENTOR&p%5B%5D=facets.brand%255B%255D%3DEL%2BPASO&param=5678&hpid=dAAP-kK6t8vGKQxrmGjxLKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEyOSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNOREZHVkdSTVczWldZVlAiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJDcm9zcyBzYW5kYWwiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e517]
            - generic [ref=e520]:
              - generic [ref=e521]: Cross sandal men From ₹129
              - generic [ref=e522]: From ₹129
      - generic [ref=e532]:
        - generic [ref=e536]:
          - img "Image" [ref=e539]
          - generic [ref=e543]: Grab or gone
        - generic [ref=e546]:
          - link "Image Top Sellers Min. 50% Off" [ref=e551] [cursor=pointer]:
            - /url: /all/~cs-2a363cbabd01c9162f717d712cce119b/pr?sid=clo%2Cnyk%2Czp4&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDUwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJUS1NHVVRZNFJKQU5GQTdNIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjUwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZW4ncyBUcmFja3N1aXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e561]
            - generic [ref=e564]:
              - generic [ref=e565]: Top Sellers
              - generic [ref=e566]: Min. 50% Off
          - link "Image Grab Or Gone Min. 70% Off" [ref=e571] [cursor=pointer]:
            - /url: /all/~cs-52e18d69a56fcd5f95304541b116bb72/pr?sid=clo%2Cqfl%2Cq5u%2Cla2&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJQQU5INThEUFNBR01NWEQ5IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXb21lbidzIFBhbnRpZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e581]
            - generic [ref=e584]:
              - generic [ref=e585]: Grab Or Gone
              - generic [ref=e586]: Min. 70% Off
          - link "Image Most-loved Special offer" [ref=e591] [cursor=pointer]:
            - /url: /all/~cs-9038cde33c18df328792d743ee683d0d/pr?sid=clo%2Ccfv%2Citg%2Ctys&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiV29tZW4ncyBFdGhuaWMgU2V0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkVUSEhESjRWRDZORVg5WTMiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e601]
            - generic [ref=e604]:
              - generic [ref=e605]: Most-loved
              - generic [ref=e606]: Special offer
          - link "Image Top Picks Special offer" [ref=e611] [cursor=pointer]:
            - /url: /all/~cs-5b97de4ece7bcc81f3e7250f2d9a8e71/pr?sid=eat%2Cltb%2Cngb&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiRHJ5IEZydWl0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik5ERkhLTlQyOFpEQ1pHSk4iLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e621]
            - generic [ref=e624]:
              - generic [ref=e625]: Top Picks
              - generic [ref=e626]: Special offer
      - generic [ref=e636]:
        - generic [ref=e640]: Brands In Spotlight
        - link "Image" [ref=e641] [cursor=pointer]:
          - /url: /audio-video/~cs-24b23rbhyo/pr?sid=0pm&collection-tab-name=boAt&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CYBCBGIQ8O9D_AD&BU=Mixed
          - img "Image" [ref=e647]
      - generic [ref=e659]:
        - link "Image" [ref=e664] [cursor=pointer]:
          - /url: /audio-video/~cs-pkmucaa6rq/pr?sid=0pm&collection-tab-name=Top+deals+on+TRIGGR&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TS8JPAD7XN8E_AD&BU=Mixed
          - img "Image" [ref=e667]
        - link "Image" [ref=e672] [cursor=pointer]:
          - /url: /beauty-and-grooming/body-face-skin-care/body-and-face-care/sunscreen/pr?sid=g9b%2Cema%2C5la%2Cxrh&p%5B%5D=facets.brand%255B%255D%3DThe%2BDerma%2BCo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=4FXSIVHV52YW_AD&BU=Mixed
          - img "Image" [ref=e675]
        - link "Image" [ref=e680] [cursor=pointer]:
          - /url: /samsung-galaxy-watch8-classic-46mm-bluetooth/p/itmd9e540929f46b?pid=SMWGVVSEHKY9GQUQ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L9O0VJ5GJWVL_AD&BU=Mixed
          - img "Image" [ref=e683]
      - generic [ref=e693]:
        - generic [ref=e697]:
          - img "Image" [ref=e700]
          - generic [ref=e702]:
            - generic [ref=e704]: Trending Gadgets & Appliances
            - link [ref=e705] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e708]
        - generic [ref=e712]:
          - link "Image True Wireless Min. 50% Off" [ref=e717] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e727]
            - generic [ref=e730]:
              - generic [ref=e731]: True Wireless
              - generic [ref=e732]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e737] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e747]
            - generic [ref=e750]:
              - generic [ref=e751]: Trimmers
              - generic [ref=e752]: Min. 50% Off
          - link "Image Smart Watches Min. 40% Off" [ref=e757] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e767]
            - generic [ref=e770]:
              - generic [ref=e771]: Smart Watches
              - generic [ref=e772]: Min. 40% Off
          - link "Image Neckband Popular" [ref=e777] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-2a0c4b3036f2339cfee37c9c64a79f41/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e787]
            - generic [ref=e790]:
              - generic [ref=e791]: Neckband
              - generic [ref=e792]: Popular
      - generic [ref=e802]:
        - generic [ref=e806]:
          - img "Image" [ref=e809]
          - generic [ref=e811]:
            - generic [ref=e813]: Fashion's Top Deals
            - link [ref=e814] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_3~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e817]
        - generic [ref=e821]:
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e826] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e836]
            - generic [ref=e839]:
              - generic [ref=e840]: Men’s Slippers & Flip Flops
              - generic [ref=e841]: Min. 70% Off
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e846] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp,cil,e1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e856]
            - generic [ref=e859]:
              - generic [ref=e860]: Men’s Casual Shoes
              - generic [ref=e861]: Min. 70% Off
          - link "Image Men’s Sandals & Floaters Min. 70% Off" [ref=e866] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-7a04c87a03d025d968662615918edf2d/pr?sid=osp,cil,e83&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e876]
            - generic [ref=e879]:
              - generic [ref=e880]: Men’s Sandals & Floaters
              - generic [ref=e881]: Min. 70% Off
          - link "Image Men’s Sports Shoes Min. 70% Off" [ref=e886] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp,cil,1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e896]
            - generic [ref=e899]:
              - generic [ref=e900]: Men’s Sports Shoes
              - generic [ref=e901]: Min. 70% Off
      - generic [ref=e911]:
        - generic [ref=e915]:
          - img "Image" [ref=e918]
          - generic [ref=e920]:
            - generic [ref=e922]: Monsoon Essentials
            - link [ref=e923] [cursor=pointer]:
              - /url: /offers-list/monsoon-essentials?screen=dynamic&pk=contentTags%3DGCD_THEME_5~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e926]
        - generic [ref=e930]:
          - link "Image Bike Body Covers Min. 50% Off" [ref=e935] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-944d28b6c1175931d3a5a729ee70bb44/pr?sid=1mt,aa4,law&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e945]
            - generic [ref=e948]:
              - generic [ref=e949]: Bike Body Covers
              - generic [ref=e950]: Min. 50% Off
          - link "Image Men's T-shirts Min. 50% Off" [ref=e955] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-89a4af89beda2604cb8435b235dee6f1/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e965]
            - generic [ref=e968]:
              - generic [ref=e969]: Men's T-shirts
              - generic [ref=e970]: Min. 50% Off
          - link "Image Men's Shorts Min. 50% Off" [ref=e975] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-d9d4506474c452b01817d1f9cf18fd08/pr?sid=clo,vua,e8g,kc7&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e985]
            - generic [ref=e988]:
              - generic [ref=e989]: Men's Shorts
              - generic [ref=e990]: Min. 50% Off
          - link "Image Kids' Shorts Min. 50% Off" [ref=e995] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-de2fde4872bb1638db072fb85c5dbd7e/pr?sid=clo,vua,e8g,fkx&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1005]
            - generic [ref=e1008]:
              - generic [ref=e1009]: Kids' Shorts
              - generic [ref=e1010]: Min. 50% Off
      - generic [ref=e1020]:
        - generic [ref=e1024]:
          - img "Image" [ref=e1027]
          - generic [ref=e1029]:
            - generic [ref=e1031]: Hair & Skincare Essentials
            - link [ref=e1032] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_10~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e1035]
        - generic [ref=e1039]:
          - link "Image Face Wash Min. 50% Off" [ref=e1044] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5ab19791d4f627a2a36b60d5791384ca/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1054]
            - generic [ref=e1057]:
              - generic [ref=e1058]: Face Wash
              - generic [ref=e1059]: Min. 50% Off
          - link "Image Hair Claw Special offer" [ref=e1064] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e4424a2cdb9ada7b286b12cf5012bd38/pr?sid=g9b,lcf,bjl,zbu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1074]
            - generic [ref=e1077]:
              - generic [ref=e1078]: Hair Claw
              - generic [ref=e1079]: Special offer
          - link "Image Hair Oil Min. 50% Off" [ref=e1084] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-121af17014a18d5ac2b75291ada07534/pr?sid=g9b,lcf,qqm,fmb&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1094]
            - generic [ref=e1097]:
              - generic [ref=e1098]: Hair Oil
              - generic [ref=e1099]: Min. 50% Off
          - link "Image Hair Care Special offer" [ref=e1104] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6c400aca822c7452410b18d07ade65f8/pr?sid=g9b,lcf,qqm&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1114]
            - generic [ref=e1117]:
              - generic [ref=e1118]: Hair Care
              - generic [ref=e1119]: Special offer
      - generic [ref=e1123]: Hang on, loading content
      - generic [ref=e1135]:
        - generic [ref=e1136]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1137]: +
      - contentinfo [ref=e1138]:
        - generic [ref=e1140]:
          - generic [ref=e1141]:
            - generic [ref=e1142]:
              - generic [ref=e1143]: ABOUT
              - link "Contact Us" [ref=e1144] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1145] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1146] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1147] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1148] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1149] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1150]:
              - generic [ref=e1151]: GROUP COMPANIES
              - link "Myntra" [ref=e1152] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1153] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1154] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1155]:
              - generic [ref=e1156]: HELP
              - link "Payments" [ref=e1157] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1158] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1159] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1160] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1161]:
              - generic [ref=e1162]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1163] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1164] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1165] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1166] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1167] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1168] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1169] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1170] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1171]:
              - generic [ref=e1172]: "Mail Us:"
              - generic [ref=e1173]:
                - paragraph [ref=e1174]: Flipkart Internet Private Limited,
                - paragraph [ref=e1175]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1176]: Clove Embassy Tech Village,
                - paragraph [ref=e1177]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1178]: Bengaluru, 560103,
                - paragraph [ref=e1179]: Karnataka, India
              - generic [ref=e1180]: "Social:"
              - generic [ref=e1181]:
                - link "Facebook" [ref=e1183] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1184]
                - link "Twitter" [ref=e1186] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1187]
                - link "YouTube" [ref=e1189] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1190]
                - link "Instagram" [ref=e1192] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1193]
            - generic [ref=e1194]:
              - generic [ref=e1195]: "Registered Office Address:"
              - generic [ref=e1196]:
                - paragraph [ref=e1197]: Flipkart Internet Private Limited,
                - paragraph [ref=e1198]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1199]: Clove Embassy Tech Village,
                - paragraph [ref=e1200]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1201]: Bengaluru, 560103,
                - paragraph [ref=e1202]: Karnataka, India
                - paragraph [ref=e1203]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1204]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1205] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1206] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1207]:
            - generic [ref=e1208]:
              - img "Become a Seller" [ref=e1209]
              - link "Become a Seller" [ref=e1210] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1211]:
              - img "Advertise" [ref=e1212]
              - generic "Advertise" [ref=e1213]
            - generic [ref=e1214]:
              - img "Gift Cards" [ref=e1215]
              - link "Gift Cards" [ref=e1216] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1217]:
              - img "Help Center" [ref=e1218]
              - link "Help Center" [ref=e1219] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1220]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class FlipkartHome {
  4  |   readonly page: Page;
  5  |   readonly closeLogin: Locator;
  6  |   readonly searchInput: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.closeLogin = page.locator('button._2KpZ6l._2doB4z');
  11 |     this.searchInput = page.locator('input[name="q"], input[title="Search for products, brands and more"]');
  12 |   }
  13 | 
  14 |   async goto() {
  15 |     await this.page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });
  16 |     // close login modal if present
  17 |     try {
  18 |       if (await this.closeLogin.count()) {
  19 |         await this.closeLogin.click({ timeout: 2000 });
  20 |       }
  21 |     } catch (e) {
  22 |       // ignore if not present
  23 |     }
  24 |   }
  25 | 
  26 |   async search(query: string) {
> 27 |     await this.searchInput.fill(query);
     |                            ^ Error: locator.fill: Error: strict mode violation: locator('input[name="q"], input[title="Search for products, brands and more"]') resolved to 2 elements:
  28 |     await this.searchInput.press('Enter');
  29 |     await this.page.waitForLoadState('networkidle');
  30 |   }
  31 | }
  32 | 
```