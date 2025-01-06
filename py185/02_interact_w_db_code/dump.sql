--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: expenses; Type: TABLE; Schema: public; Owner: senorvalenz
--

CREATE TABLE public.expenses (
    id integer NOT NULL,
    amount numeric(6,2) NOT NULL,
    memo text NOT NULL,
    created_on date NOT NULL,
    CONSTRAINT non_negative CHECK ((amount > 0.01))
);


ALTER TABLE public.expenses OWNER TO senorvalenz;

--
-- Name: expenses_id_seq; Type: SEQUENCE; Schema: public; Owner: senorvalenz
--

CREATE SEQUENCE public.expenses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.expenses_id_seq OWNER TO senorvalenz;

--
-- Name: expenses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: senorvalenz
--

ALTER SEQUENCE public.expenses_id_seq OWNED BY public.expenses.id;


--
-- Name: expenses id; Type: DEFAULT; Schema: public; Owner: senorvalenz
--

ALTER TABLE ONLY public.expenses ALTER COLUMN id SET DEFAULT nextval('public.expenses_id_seq'::regclass);


--
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: senorvalenz
--

COPY public.expenses (id, amount, memo, created_on) FROM stdin;
9	1.99	Chewing gum	2025-01-03
10	1600.00	Surly LHT	2025-01-03
12	32.45	Wicked Tix	2025-01-03
13	32.45	Hose reel	2025-01-03
15	1.99	Chewing gum	2025-01-03
16	1.00	Great_stuff	2025-01-03
17	20.00	Toxic foam	2025-01-03
18	5.99	Broccoli	2025-01-03
21	99.99	mktg stuff	2025-01-06
22	6.99	hi there	2025-01-06
23	234.45	boof	2025-01-06
\.


--
-- Name: expenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: senorvalenz
--

SELECT pg_catalog.setval('public.expenses_id_seq', 23, true);


--
-- Name: expenses expenses_pkey; Type: CONSTRAINT; Schema: public; Owner: senorvalenz
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

