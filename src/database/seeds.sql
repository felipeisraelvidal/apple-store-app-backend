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
    ('Pro Display XDR'),
    ('iPhone 13 Pro'),
    ('iPhone 13'),
    ('iPhone 12'),
    ('iPhone SE'),
    ('iPhone 11');

INSERT INTO products (id_family, id_model, name, image_url)
VALUES
    (1, 1, 'MacBook Air', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726242000'),
    (1, 2, 'MacBook Pro 13"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726243000'),
    (1, 2, 'MacBook Pro 14"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726243000'),
    (1, 2, 'MacBook Pro 16"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-16-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1633726244000'),
    (1, 3, 'iMac 24"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=980&hei=1000&fmt=jpeg&qlt=80&.v=1625868688000'),
    (1, 3, 'iMac 27"', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-27-202108?wid=1050&hei=1000&fmt=p-jpg&qlt=95&.v=1626106575000'),
    (1, 4, 'Mac mini', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-mini-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1626106830000'),
    (1, 5, 'Mac Pro', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1625864628000'),
    (1, 6, 'Pro Display XDR', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-display-202108?wid=800&hei=1000&fmt=jpeg&qlt=80&.v=1625864626000'),
    (2, 7, 'iPhone 13', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13problue-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1629948813000'),
    (2, 8, 'iPhone 13', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pink-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1629948812000'),
    (2, 9, 'iPhone 12', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1629948811000'),
    (2, 10, 'iPhone SE', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-SE-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1628098903000'),
    (2, 11, 'iPhone 11', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-11-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1628098906000');

INSERT INTO products_options (id_product, name, image_url, price)
VALUES
    (1, 'Apple M1 Chip with 8-Core CPU and 7-Core GPU\n256GB Storage', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000', 999),
    (1, 'Apple M1 Chip with 8-Core CPU and 8-Core GPU\n512GB Storage', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000', 1249),
    (2, 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU\n256GB SSD Storage', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000', 1299),
    (2, 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU\n512GB SSD Storage', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000', 1499);

INSERT INTO products_options_specs (id_product_option, description)
VALUES
    (1, 'Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine'),
    (1, '8GB unified memory'),
    (1, '256GB SSD storage'),
    (1, 'Retina display with True Tone'),
    (1, 'Magic Keyboard'),
    (1, 'Touch ID'),
    (1, 'Force Touch trackpad'),
    (1, 'Two Thunderbolt / USB 4 ports'),
    (2, 'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine'),
    (2, '8GB unified memory'),
    (2, '512GB SSD storage'),
    (2, 'Retina display with True Tone'),
    (2, 'Magic Keyboard'),
    (2, 'Touch ID'),
    (2, 'Force Touch trackpad'),
    (2, 'Two Thunderbolt / USB 4 ports'),
    (3, 'Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine'),
    (3, '8GB unified memory'),
    (3, '256GB SSD storage'),
    (3, '13-inch Retina display with True Tone'),
    (3, 'Magic Keyboard'),
    (3, 'Touch Bar and Touch ID'),
    (3, 'Force Touch trackpad'),
    (3, 'Two Thunderbolt / USB 4 ports'),
    (4, 'Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine'),
    (4, '8GB unified memory'),
    (4, '512GB SSD storage'),
    (4, '13-inch Retina display with True Tone'),
    (4, 'Magic Keyboard'),
    (4, 'Touch Bar and Touch ID'),
    (4, 'Force Touch trackpad'),
    (4, 'Two Thunderbolt / USB 4 ports');

INSERT INTO products_options_customizations (id_product_option, name, price_change_method)
VALUES
    (1, 'Memory', 'sum_base_price'),
    (1, 'Storage', 'sum_base_price'),
    (1, 'Final Cut Pro', 'sum_base_price'),
    (1, 'Logic Pro', 'sum_base_price'),
    (2, 'Memory', 'sum_base_price'),
    (2, 'Storage', 'sum_base_price'),
    (2, 'Final Cut Pro', 'sum_base_price'),
    (2, 'Logic Pro', 'sum_base_price'),
    (3, 'Memory', 'sum_base_price'),
    (3, 'Storage', 'sum_base_price'),
    (3, 'Final Cut Pro', 'sum_base_price'),
    (3, 'Logic Pro', 'sum_base_price'),
    (4, 'Memory', 'sum_base_price'),
    (4, 'Storage', 'sum_base_price'),
    (4, 'Final Cut Pro', 'sum_base_price'),
    (4, 'Logic Pro', 'sum_base_price');

INSERT INTO products_options_customizations_items (id_product_option_customization, name, price, is_default)
VALUES
    (1, '8GB unified memory', null, 1),
    (1, '16GB unified memory', 200, 0),
    (2, '256GB SSD storage', null, 1),
    (2, '512GB SSD storage', 200, 0),
    (2, '1TB SSD storage', 400, 0),
    (2, '2TB SSD storage', 800, 0),
    (3, 'None', null, 1),
    (3, 'Final Cut Pro', 299.99, 0),
    (4, 'None', null, 1),
    (4, 'Logic Pro', 199.99, 0),
    (5, '8GB unified memory', null, 1),
    (5, '16GB unified memory', 200, 0),
    (6, '512GB SSD storage', null, 1),
    (6, '1TB SSD storage', 200, 0),
    (6, '2TB SSD storage', 600, 0),
    (7, 'None', null, 1),
    (7, 'Final Cut Pro', 299.99, 0),
    (8, 'None', null, 1),
    (8, 'Logic Pro', 199.99, 0),
    (9, '8GB unified memory', null, 1),
    (9, '16GB unified memory', 200, 0),
    (10, '256GB SSD storage', null, 1),
    (10, '512GB SSD storage', 200, 0),
    (10, '1TB SSD storage', 400, 0),
    (10, '2TB SSD storage', 800, 0),
    (11, 'None', null, 1),
    (11, 'Final Cut Pro', 299.99, 0),
    (12, 'None', null, 1),
    (12, 'Logic Pro', 199.99, 0),
    (13, '8GB unified memory', null, 1),
    (13, '16GB unified memory', 200, 0),
    (14, '512GB SSD storage', null, 1),
    (14, '1TB SSD storage', 200, 0),
    (14, '2TB SSD storage', 600, 0),
    (15, 'None', null, 1),
    (15, 'Final Cut Pro', 299.99, 0),
    (16, 'None', null, 1),
    (16, 'Logic Pro', 199.99, 0);

INSERT INTO available_finishes (name, image_url)
VALUES
    ('Space Gray', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'),
    ('Gold', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'),
    ('Silver', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'),
    ('Space Gray', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'),
    ('Gold', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'),
    ('Silver', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'),
    ('Space Gray', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000'),
    ('Silver', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632950226000'),
    ('Space Gray', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000'),
    ('Silver', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632950226000');

INSERT INTO products_options_available_finishes (id_product_option, id_finish)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (2, 6),
    (3, 7),
    (3, 8),
    (4, 9),
    (4, 10);
