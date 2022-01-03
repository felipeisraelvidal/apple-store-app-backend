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
    (2, 'Two Thunderbolt / USB 4 ports');

INSERT INTO products_options_customizations (id_product_option, name, price_change_method)
VALUES
    (1, 'Memory', 'sum_base_price'),
    (1, 'Storage', 'sum_base_price'),
    (1, 'Final Cut Pro', 'sum_base_price'),
    (1, 'Logic Pro', 'sum_base_price'),
    (2, 'Memory', 'sum_base_price'),
    (2, 'Storage', 'sum_base_price'),
    (2, 'Final Cut Pro', 'sum_base_price'),
    (2, 'Logic Pro', 'sum_base_price');

INSERT INTO products_options_customizations_items (id_product_option_customization, name, price, is_default)
VALUES
    (1, '8GB unified memory', 0, 1),
    (1, '16GB unified memory', 200, 0),
    (2, '256GB SSD storage', 0, 1),
    (2, '512GB SSD storage', 200, 0),
    (2, '1TB SSD storage', 400, 0),
    (2, '2TB SSD storage', 800, 0),
    (3, 'None', 0, 1),
    (3, 'Final Cut Pro', 299.99, 0),
    (4, 'None', 0, 1),
    (4, 'Logic Pro', 199.99, 0),
    (5, '8GB unified memory', 0, 1),
    (5, '16GB unified memory', 200, 0),
    (6, '512GB SSD storage', 0, 1),
    (6, '1TB SSD storage', 200, 0),
    (6, '2TB SSD storage', 600, 0),
    (7, 'None', 0, 1),
    (7, 'Final Cut Pro', 299.99, 0),
    (8, 'None', 0, 1),
    (8, 'Logic Pro', 199.99, 0);
