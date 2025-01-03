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
-- Name: temperatures; Type: TABLE; Schema: public; Owner: senorvalenz
--

CREATE TABLE public.temperatures (
    id integer NOT NULL,
    date date NOT NULL,
    low integer NOT NULL,
    high integer NOT NULL,
    weather numeric(5,3) DEFAULT 0
);


ALTER TABLE public.temperatures OWNER TO senorvalenz;

--
-- Name: temperatures_id_seq; Type: SEQUENCE; Schema: public; Owner: senorvalenz
--

CREATE SEQUENCE public.temperatures_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.temperatures_id_seq OWNER TO senorvalenz;

--
-- Name: temperatures_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: senorvalenz
--

ALTER SEQUENCE public.temperatures_id_seq OWNED BY public.temperatures.id;


--
-- Name: temperatures id; Type: DEFAULT; Schema: public; Owner: senorvalenz
--

ALTER TABLE ONLY public.temperatures ALTER COLUMN id SET DEFAULT nextval('public.temperatures_id_seq'::regclass);


--
-- Data for Name: temperatures; Type: TABLE DATA; Schema: public; Owner: senorvalenz
--

COPY public.temperatures (id, date, low, high, weather) FROM stdin;
1	2016-03-01	34	43	0.120
2	2016-03-02	32	44	0.120
3	2016-03-03	31	47	0.160
4	2016-03-04	33	42	0.080
5	2016-03-05	39	46	0.280
6	2016-03-06	32	43	0.080
7	2016-03-07	29	32	0.000
8	2016-03-08	23	31	0.000
9	2016-03-09	17	28	0.000
\.


--
-- Name: temperatures_id_seq; Type: SEQUENCE SET; Schema: public; Owner: senorvalenz
--

SELECT pg_catalog.setval('public.temperatures_id_seq', 9, true);


--
-- Name: temperatures temperatures_pkey; Type: CONSTRAINT; Schema: public; Owner: senorvalenz
--

ALTER TABLE ONLY public.temperatures
    ADD CONSTRAINT temperatures_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

