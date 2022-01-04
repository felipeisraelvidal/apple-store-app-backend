DROP TABLE IF EXISTS families;
CREATE TABLE IF NOT EXISTS families (
  id INTEGER PRIMARY KEY,
  name VARCHAR NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS models;
CREATE TABLE IF NOT EXISTS models (
    id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    id_family INTEGER NOT NULL,
    id_model INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_family) REFERENCES families (id) ON DELETE CASCADE,
    FOREIGN KEY (id_model) REFERENCES models (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products_options;
CREATE TABLE IF NOT EXISTS products_options (
    id INTEGER PRIMARY KEY,
    id_product INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    image_url TEXT,
    price DOUBLE(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_product) REFERENCES products (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products_options_specs;
CREATE TABLE IF NOT EXISTS products_options_specs (
    id INTEGER PRIMARY KEY,
    id_product_option INTEGER NOT NULL,
    description VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_product_option) REFERENCES products_options (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products_options_customizations;
CREATE TABLE IF NOT EXISTS products_options_customizations (
    id INTEGER PRIMARY KEY,
    id_product_option INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    price_change_method VARCHAR CHECK(price_change_method IN ('none', 'change_base_price', 'sum_base_price')) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_product_option) REFERENCES products_options (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products_options_customizations_items;
CREATE TABLE IF NOT EXISTS products_options_customizations_items (
    id INTEGER PRIMARY KEY,
    id_product_option_customization INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    price DOUBLE(10, 2) NOT NULL,
    is_default BOOLEAN NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_product_option_customization) REFERENCES products_options_customizations (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS available_finishes;
CREATE TABLE IF NOT EXISTS available_finishes (
    id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS products_options_available_finishes;
CREATE TABLE IF NOT EXISTS products_options_available_finishes (
    id_product_option INTEGER NOT NULL,
    id_finish INTEGER NOT NULL,

    PRIMARY KEY (id_product_option, id_finish),
    FOREIGN KEY (id_product_option) REFERENCES products_options (id) ON DELETE CASCADE,
    FOREIGN KEY (id_finish) REFERENCES available_finishes (id) ON DELETE CASCADE
);
