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
- generic [ref=e1]:
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
          - generic [ref=e84]:
            - generic [ref=e86]:
              - link "Login" [ref=e87] [cursor=pointer]:
                - /url: /account/login?ret=/
                - img "Login" [ref=e88]
                - generic [ref=e89]: Login
              - img "Chevron" [ref=e90]
            - link "Login" [ref=e94] [cursor=pointer]:
              - /url: /account/login?ret=/
          - generic [ref=e99]:
            - link "More" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: More
            - img "Chevron" [ref=e102]
          - link "Cart Cart" [ref=e105] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e106]
            - generic [ref=e107]: Cart
      - generic [ref=e109]:
        - link "For You" [ref=e114] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e116]:
            - img [ref=e119]
            - generic [ref=e120]: For You
        - link "Fashion" [ref=e125] [cursor=pointer]:
          - /url: /aw-base-new-inline-2025-at-store
          - generic [ref=e127]:
            - img [ref=e130]
            - generic [ref=e131]: Fashion
        - link "Mobiles" [ref=e136] [cursor=pointer]:
          - /url: /mobile-phones-store
          - generic [ref=e138]:
            - img [ref=e141]
            - generic [ref=e142]: Mobiles
        - link "Beauty" [ref=e147] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e149]:
            - img [ref=e152]
            - generic [ref=e153]: Beauty
        - link "Electronics" [ref=e158] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e160]:
            - img [ref=e163]
            - generic [ref=e164]: Electronics
        - link "Home" [ref=e169] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e171]:
            - img [ref=e174]
            - generic [ref=e175]: Home
        - link "Appliances" [ref=e180] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e182]:
            - img [ref=e185]
            - generic [ref=e186]: Appliances
        - link "Toys, baby.." [ref=e191] [cursor=pointer]:
          - /url: /toys-baby-2025-new-at-store
          - generic [ref=e193]:
            - img [ref=e196]
            - generic [ref=e197]: Toys, baby..
        - link "Food & Health" [ref=e202] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e204]:
            - img [ref=e207]
            - generic [ref=e208]: Food & Health
        - link "Auto Accessories" [ref=e213] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e215]:
            - img [ref=e218]
            - generic [ref=e219]: Auto Accessories
        - link "2 Wheelers" [ref=e224] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e226]:
            - img [ref=e229]
            - generic [ref=e230]: 2 Wheelers
        - link "Sports & Fitness" [ref=e235] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e237]:
            - img [ref=e240]
            - generic [ref=e241]: Sports & Fitness
        - link "Books & Media" [ref=e246] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e248]:
            - img [ref=e251]
            - generic [ref=e252]: Books & Media
        - link "Furniture" [ref=e257] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e259]:
            - img [ref=e262]
            - generic [ref=e263]: Furniture
    - generic [ref=e271]:
      - generic [ref=e286]:
        - link "Image" [ref=e293] [cursor=pointer]:
          - /url: /infinite-m3-at-store?param=83459&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=C5WMWRU7EW8N_IAD&BU=Mixed
          - img "Image" [ref=e296]
        - link "Image" [ref=e303] [cursor=pointer]:
          - /url: /home-cleaning-bathroom-accessories/bathroom-accessories/pr?sid=rja%2Czqm&marketplace=FLIPKART&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=2SEPMEVF4RSR_IAD&BU=Mixed
          - img "Image" [ref=e306]
        - link "Image" [ref=e313] [cursor=pointer]:
          - /url: /motorola-edge-70-pro/p/itm70caeee0ca941?pid=MOBHHXQRQJX8USUW&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Z0XEV4TNC9L3_AD&BU=Mixed
          - img "Image" [ref=e316]
        - link "Image" [ref=e323] [cursor=pointer]:
          - /url: /nothing-phone-2026-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=RJC3GE57TA5C_AD&BU=Mixed
          - img "Image" [ref=e326]
        - link "Image" [ref=e333] [cursor=pointer]:
          - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MM1583TNPDQM_AD&BU=Mixed
          - img "Image" [ref=e336]
        - link "Image" [ref=e343] [cursor=pointer]:
          - /url: /6bo/b5g/~cs-fi2adiibh4/pr?sid=6bo%2Cb5g&collection-tab-name=Gaming&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BXPUL81OQ4XE_AD&BU=Mixed
          - img "Image" [ref=e346]
        - link "Image" [ref=e353] [cursor=pointer]:
          - /url: /oppo-reno-16-series-5g-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=910T5OQ1QG34_AD&BU=Mixed
          - img "Image" [ref=e356]
        - link "Image" [ref=e363] [cursor=pointer]:
          - /url: /laptops/~cs-b60x9q066j/pr?sid=6bo%2Cb5g&collection-tab-name=Gaming+PC&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=4Q1F7IAHGVTX_AD&BU=Mixed
          - img "Image" [ref=e366]
        - link "Image" [ref=e373] [cursor=pointer]:
          - /url: /0pm/~cs-hf66q9yolf/pr?sid=0pm&collection-tab-name=speakers+&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=3A9B4RC0HRF7_AD&BU=Mixed
          - img "Image" [ref=e376]
      - generic [ref=e398]:
        - link "Image" [ref=e403] [cursor=pointer]:
          - /url: /watches/wrist-watches/~cs-phtz9ej4gy/pr?sid=r18%2Cf13&collection-tab-name=TITAN+watches&p%5B%5D=facets.brand%255B%255D%3DTitan&p%5B%5D=facets.discount_range_v1%255B%255D%3D10%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WMGEETHS4IHM_AD&BU=Mixed
          - img "Image" [ref=e406]
        - link "Image" [ref=e411] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-gjx3e587vt/pr?sid=g9b&collection-tab-name=Beardo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1TFL1C87M5EW_AD&BU=Mixed
          - img "Image" [ref=e414]
        - link "Image" [ref=e419] [cursor=pointer]:
          - /url: /product/p/itme?pid=MASH222PPSPTHRCN&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=VELD6LZN4HCF_AD&BU=Mixed
          - img "Image" [ref=e422]
      - generic [ref=e432]:
        - generic [ref=e436]:
          - img "Image" [ref=e439]
          - generic [ref=e443]: People also viewed
        - generic [ref=e446]:
          - link "Image Grab Or Gone Under ₹999" [ref=e451] [cursor=pointer]:
            - /url: /all/~cs-26ed1ca46cdb7088bac5fab9d3522095/pr?sid=tng%2C56a%2Cfq8%2Cgl8&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk5OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4Ijo5OTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJSQ1RIQ1NUNDJQNlhaVFdFIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUmVtb3RlIENvbnRyb2wgVG95IFZlaGljbGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e461]
            - generic [ref=e464]:
              - generic [ref=e465]: Grab Or Gone
              - generic [ref=e466]: Under ₹999
          - link "Image Most Loved Top Rated" [ref=e471] [cursor=pointer]:
            - /url: /all/~cs-8b4a4063c74cf8fca3134ac09cf822d1/pr?sid=0pm%2Cfcn&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NHUDJISkEzSEtIVEY0IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVG9wIFJhdGVkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e481]
            - generic [ref=e484]:
              - generic [ref=e485]: Most Loved
              - generic [ref=e486]: Top Rated
          - link "Image Big Savings Top Rated" [ref=e491] [cursor=pointer]:
            - /url: /all/~cs-549c7446b792dcd3d97a23a50959bf04/pr?sid=clo%2Ccfv%2Ccib%2Crkt&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJLVEFISFFDMkhKN1JNOEhaIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e501]
            - generic [ref=e504]:
              - generic [ref=e505]: Big Savings
              - generic [ref=e506]: Top Rated
          - link "Image Explore Now Min. 70% Off" [ref=e511] [cursor=pointer]:
            - /url: /all/~cs-91fa4a5752a7d69bb548f74e551c450b/pr?sid=clo%2Cqfl%2Cv5v%2Ckzg&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJCUkFISDhSQURINkdZWjZRIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXb21lbidzIEJyYXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e521]
            - generic [ref=e524]:
              - generic [ref=e525]: Explore Now
              - generic [ref=e526]: Min. 70% Off
      - generic [ref=e536]:
        - generic [ref=e540]:
          - img "Image" [ref=e543]
          - generic [ref=e545]:
            - generic [ref=e547]: Fashion's Top Deals
            - link [ref=e548] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_3~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e551]
        - generic [ref=e555]:
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e560] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e570]
            - generic [ref=e573]:
              - generic [ref=e574]: Men’s Slippers & Flip Flops
              - generic [ref=e575]: Min. 70% Off
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e580] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp,cil,e1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e590]
            - generic [ref=e593]:
              - generic [ref=e594]: Men’s Casual Shoes
              - generic [ref=e595]: Min. 70% Off
          - link "Image Men’s Sandals & Floaters Min. 70% Off" [ref=e600] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-7a04c87a03d025d968662615918edf2d/pr?sid=osp,cil,e83&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e610]
            - generic [ref=e613]:
              - generic [ref=e614]: Men’s Sandals & Floaters
              - generic [ref=e615]: Min. 70% Off
          - link "Image Men’s Sports Shoes Min. 70% Off" [ref=e620] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp,cil,1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e630]
            - generic [ref=e633]:
              - generic [ref=e634]: Men’s Sports Shoes
              - generic [ref=e635]: Min. 70% Off
      - generic [ref=e645]:
        - generic [ref=e649]: Brands In Spotlight
        - link "Image" [ref=e650] [cursor=pointer]:
          - /url: /audio-video/~cs-24b23rbhyo/pr?sid=0pm&collection-tab-name=boAt&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CYBCBGIQ8O9D_AD&BU=Mixed
          - img "Image" [ref=e656]
      - generic [ref=e668]:
        - link "Image" [ref=e673] [cursor=pointer]:
          - /url: /audio-video/~cs-pkmucaa6rq/pr?sid=0pm&collection-tab-name=Top+deals+on+TRIGGR&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TS8JPAD7XN8E_AD&BU=Mixed
          - img "Image" [ref=e676]
        - link "Image" [ref=e681] [cursor=pointer]:
          - /url: /g9b/ema/~cs-a8r8xjy837/pr?sid=g9b%2Cema&collection-tab-name=Dermaco&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=T5VVZ70F6UEB_AD&BU=Mixed
          - img "Image" [ref=e684]
        - link "Image" [ref=e689] [cursor=pointer]:
          - /url: /samsung-galaxy-watch8-classic-46mm-bluetooth/p/itmd9e540929f46b?pid=SMWGVVSEHKY9GQUQ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L9O0VJ5GJWVL_AD&BU=Mixed
          - img "Image" [ref=e692]
      - generic [ref=e702]:
        - generic [ref=e706]:
          - img "Image" [ref=e709]
          - generic [ref=e711]:
            - generic [ref=e713]: Monsoon Essentials
            - link [ref=e714] [cursor=pointer]:
              - /url: /offers-list/monsoon-essentials?screen=dynamic&pk=contentTags%3DGCD_THEME_5~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e717]
        - generic [ref=e721]:
          - link "Image Bike Body Covers Min. 50% Off" [ref=e726] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-944d28b6c1175931d3a5a729ee70bb44/pr?sid=1mt,aa4,law&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e736]
            - generic [ref=e739]:
              - generic [ref=e740]: Bike Body Covers
              - generic [ref=e741]: Min. 50% Off
          - link "Image Men's T-shirts Min. 50% Off" [ref=e746] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-89a4af89beda2604cb8435b235dee6f1/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e756]
            - generic [ref=e759]:
              - generic [ref=e760]: Men's T-shirts
              - generic [ref=e761]: Min. 50% Off
          - link "Image Men's Shorts Min. 50% Off" [ref=e766] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-d9d4506474c452b01817d1f9cf18fd08/pr?sid=clo,vua,e8g,kc7&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e776]
            - generic [ref=e779]:
              - generic [ref=e780]: Men's Shorts
              - generic [ref=e781]: Min. 50% Off
          - link "Image Kids' Shorts Min. 50% Off" [ref=e786] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-de2fde4872bb1638db072fb85c5dbd7e/pr?sid=clo,vua,e8g,fkx&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e796]
            - generic [ref=e799]:
              - generic [ref=e800]: Kids' Shorts
              - generic [ref=e801]: Min. 50% Off
      - generic [ref=e811]:
        - generic [ref=e815]:
          - img "Image" [ref=e818]
          - generic [ref=e820]:
            - generic [ref=e822]: Hair & Skincare Essentials
            - link [ref=e823] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_10~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e826]
        - generic [ref=e830]:
          - link "Image Face Wash Min. 50% Off" [ref=e835] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5ab19791d4f627a2a36b60d5791384ca/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e845]
            - generic [ref=e848]:
              - generic [ref=e849]: Face Wash
              - generic [ref=e850]: Min. 50% Off
          - link "Image Hair Claw Special offer" [ref=e855] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e4424a2cdb9ada7b286b12cf5012bd38/pr?sid=g9b,lcf,bjl,zbu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e865]
            - generic [ref=e868]:
              - generic [ref=e869]: Hair Claw
              - generic [ref=e870]: Special offer
          - link "Image Hair Oil Min. 50% Off" [ref=e875] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-121af17014a18d5ac2b75291ada07534/pr?sid=g9b,lcf,qqm,fmb&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e885]
            - generic [ref=e888]:
              - generic [ref=e889]: Hair Oil
              - generic [ref=e890]: Min. 50% Off
          - link "Image Hair Care Special offer" [ref=e895] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6c400aca822c7452410b18d07ade65f8/pr?sid=g9b,lcf,qqm&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e905]
            - generic [ref=e908]:
              - generic [ref=e909]: Hair Care
              - generic [ref=e910]: Special offer
      - generic [ref=e920]:
        - generic [ref=e924]:
          - img "Image" [ref=e927]
          - generic [ref=e929]:
            - generic [ref=e931]: Trending Gadgets & Appliances
            - link [ref=e932] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e935]
        - generic [ref=e939]:
          - link "Image True Wireless Min. 50% Off" [ref=e944] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e954]
            - generic [ref=e957]:
              - generic [ref=e958]: True Wireless
              - generic [ref=e959]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e964] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e974]
            - generic [ref=e977]:
              - generic [ref=e978]: Trimmers
              - generic [ref=e979]: Min. 50% Off
          - link "Image Smart Watches Min. 40% Off" [ref=e984] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e994]
            - generic [ref=e997]:
              - generic [ref=e998]: Smart Watches
              - generic [ref=e999]: Min. 40% Off
          - link "Image Neckband Popular" [ref=e1004] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-2a0c4b3036f2339cfee37c9c64a79f41/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1014]
            - generic [ref=e1017]:
              - generic [ref=e1018]: Neckband
              - generic [ref=e1019]: Popular
      - generic [ref=e1029]:
        - generic [ref=e1033]:
          - img "Image" [ref=e1036]
          - generic [ref=e1040]: In demand
        - generic [ref=e1043]:
          - link "Image Shop now From ₹299" [ref=e1048] [cursor=pointer]:
            - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&sort=popularity&p%5B%5D=facets.pattern%255B%255D%3DEmbroidered&p%5B%5D=facets.price_range.from%3D299&p%5B%5D=facets.price_range.to%3DMax&Param=54711&hpid=hHYMAnA4Ps7KRrEuOnW-fqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTI5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkVUSEhHQ0pKQ1pNUzVZRloiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJFbWJyb2lkZXJlZCBzZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1058]
            - generic [ref=e1061]:
              - generic [ref=e1062]: Shop now
              - generic [ref=e1063]: From ₹299
          - link "Image Eveready, Wipro & More From ₹89" [ref=e1068] [cursor=pointer]:
            - /url: /home-lighting/utility-lighting/torches/pr?sid=jhg%2Cyqn%2Cdb9&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&hpid=Az6d2hhzukqaT7dGbDwRjqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTg5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiVE9IR1RSNjZEOEVHVFZDVSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlRvcmNoZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e1078]
            - generic [ref=e1081]:
              - generic [ref=e1082]: Eveready, Wipro & More
              - generic [ref=e1083]: From ₹89
          - link "Image Breezy, checked & more Under ₹299" [ref=e1088] [cursor=pointer]:
            - /url: /clothing-and-accessories/topwear/shirts/pr?sid=clo%2Cash%2Caxc&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D299&p%5B%5D=facets.trend_markers%3D1&param=34724&hpid=SO4tG89TAaE3nJyUpM41Uap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkyOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTSFRIRDRYUEY0SFlBOEJHIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU3BveWwgU2hpcnRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1098]
            - generic [ref=e1101]:
              - generic [ref=e1102]: Breezy, checked & more
              - generic [ref=e1103]: Under ₹299
          - link "Image Cotton Kurtaz & more Under ₹699" [ref=e1108] [cursor=pointer]:
            - /url: /clothing-and-accessories/kurtas-ethnic-sets-and-bottoms/kurtas/pr?sid=clo%2Ccfv%2Ccib&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D699&p%5B%5D=facets.trend_markers%3D1&param=67434&hpid=zB8TwDAQyLLiz4t4YZP1Bap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk2OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJLVEFIQ0NGVldaSFFVUERGIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU3BveWwtS3VydGF6Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1118]
            - generic [ref=e1121]:
              - generic [ref=e1122]: Cotton Kurtaz & more
              - generic [ref=e1123]: Under ₹699
      - generic [ref=e1127]: Hang on, loading content
      - generic [ref=e1139]:
        - generic [ref=e1140]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1141]: +
      - contentinfo [ref=e1142]:
        - generic [ref=e1144]:
          - generic [ref=e1145]:
            - generic [ref=e1146]:
              - generic [ref=e1147]: ABOUT
              - link "Contact Us" [ref=e1148] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1149] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1150] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1151] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1152] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1153] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1154]:
              - generic [ref=e1155]: GROUP COMPANIES
              - link "Myntra" [ref=e1156] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1157] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1158] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1159]:
              - generic [ref=e1160]: HELP
              - link "Payments" [ref=e1161] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1162] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1163] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1164] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1165]:
              - generic [ref=e1166]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1167] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1168] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1169] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1170] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1171] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1172] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1173] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1174] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1175]:
              - generic [ref=e1176]: "Mail Us:"
              - generic [ref=e1177]:
                - paragraph [ref=e1178]: Flipkart Internet Private Limited,
                - paragraph [ref=e1179]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1180]: Clove Embassy Tech Village,
                - paragraph [ref=e1181]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1182]: Bengaluru, 560103,
                - paragraph [ref=e1183]: Karnataka, India
              - generic [ref=e1184]: "Social:"
              - generic [ref=e1185]:
                - link "Facebook" [ref=e1187] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1188]
                - link "Twitter" [ref=e1190] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1191]
                - link "YouTube" [ref=e1193] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1194]
                - link "Instagram" [ref=e1196] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1197]
            - generic [ref=e1198]:
              - generic [ref=e1199]: "Registered Office Address:"
              - generic [ref=e1200]:
                - paragraph [ref=e1201]: Flipkart Internet Private Limited,
                - paragraph [ref=e1202]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1203]: Clove Embassy Tech Village,
                - paragraph [ref=e1204]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1205]: Bengaluru, 560103,
                - paragraph [ref=e1206]: Karnataka, India
                - paragraph [ref=e1207]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1208]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1209] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1210] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1211]:
            - generic [ref=e1212]:
              - img "Become a Seller" [ref=e1213]
              - link "Become a Seller" [ref=e1214] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1215]:
              - img "Advertise" [ref=e1216]
              - generic "Advertise" [ref=e1217]
            - generic [ref=e1218]:
              - img "Gift Cards" [ref=e1219]
              - link "Gift Cards" [ref=e1220] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1221]:
              - img "Help Center" [ref=e1222]
              - link "Help Center" [ref=e1223] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1224]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
  - generic [ref=e1226]:
    - button "✕" [ref=e1227] [cursor=pointer]
    - generic [ref=e1229]:
      - generic [ref=e1230]:
        - text: Login
        - paragraph [ref=e1231]: Get access to your Orders, Wishlist and Recommendations
      - generic [ref=e1234]:
        - generic [ref=e1235]:
          - textbox [active] [ref=e1236]
          - generic: Enter Email/Mobile number
        - generic [ref=e1237]:
          - text: By continuing, you agree to Flipkart's
          - link "Terms of Use" [ref=e1238] [cursor=pointer]:
            - /url: /pages/terms
          - text: and
          - link "Privacy Policy" [ref=e1239] [cursor=pointer]:
            - /url: /pages/privacypolicy
          - text: .
        - button "Request OTP" [ref=e1241] [cursor=pointer]
        - link "New to Flipkart? Create an account" [ref=e1243] [cursor=pointer]:
          - /url: /account/login?signup=true
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