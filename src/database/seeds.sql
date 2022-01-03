INSERT INTO families (name, image_url)
VALUES
	('Mac', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-mac-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1632870674000'),
    ('iPhone', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1630706116000'),
    ('iPad', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783381000'),
    ('Apple Watch', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1631823475000'),
    ('AirPods', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1633718741000'),
    ('AirTags', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000'),
    ('Apple TV', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783378000'),
    ('HomePod mini', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1633355783000');

INSERT INTO models (name)
VALUES
    ('MacBook Air'),
    ('MacBook Pro'),
    ('iMac'),
    ('Mac mini'),
    ('Mac Pro'),
    ('Pro Display XDR');

INSERT INTO products (id_family, id_model, name, image_url)
VALUES
    (1, 1, 'MacBook Air', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726242000'),
    (1, 2, 'MacBook Pro 13"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726243000'),
    (1, 2, 'MacBook Pro 14"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726243000'),
    (1, 2, 'MacBook Pro 16"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-16-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726244000');

INSERT INTO products_options (id_product, name, image_url, price)
VALUES
    (1, 'Apple M1 Chip with 8-Core CPU and 7-Core GPU\n256GB Storage', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000', 999),
    (1, 'Apple M1 Chip with 8-Core CPU and 8-Core GPU\n512GB Storage', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000', 1249);
