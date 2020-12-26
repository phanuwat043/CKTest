CREATE TABLE public.product (
	id serial NOT NULL,
	name varchar NOT NULL,
	quantity varchar NOT NULL,
	unit varchar NOT NULL
);

INSERT INTO public.product
(id, "name", quantity, unit)
VALUES(1, 'pepsi', '10', 'can');
INSERT INTO public.product
(id, "name", quantity, unit)
VALUES(2, 'sprite', '20', 'can');
INSERT INTO public.product
(id, "name", quantity, unit)
VALUES(3, 'orange', '2', 'can');
