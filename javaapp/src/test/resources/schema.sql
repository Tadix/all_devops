DROP TABLE product;

CREATE TABLE product (
	id varchar NOT NULL,
	title varchar NULL,
	price float4 NULL,
	CONSTRAINT product_pk PRIMARY KEY (id)
);

DROP SEQUENCE seq_product;
CREATE SEQUENCE seq_product
  START WITH 1
  INCREMENT BY 1;