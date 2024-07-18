CREATE TABLE product (
	id varchar NOT NULL,
	title varchar NULL,
	price float4 NULL,
	CONSTRAINT product_pk PRIMARY KEY (id)
);

CREATE SEQUENCE seq_product
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

-- insert into product
INSERT INTO product
(id, title, price)
VALUES
    (nextval('seq_product'), 'processeur', 674.0),
    (nextval('seq_product'), 'disque dur', 112.0),
    (nextval('seq_product'), 'barette memoire', 258.0);