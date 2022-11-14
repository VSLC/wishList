--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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
-- Name: films; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.films (
    id integer NOT NULL,
    name text NOT NULL,
    gender text NOT NULL,
    platform text NOT NULL,
    status boolean DEFAULT false NOT NULL
);


--
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.films_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: films_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.films_id_seq OWNED BY public.films.id;


--
-- Name: notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notes (
    id integer NOT NULL,
    note text NOT NULL,
    idfilm integer NOT NULL
);


--
-- Name: notes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.notes_id_seq OWNED BY public.notes.id;


--
-- Name: films id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films ALTER COLUMN id SET DEFAULT nextval('public.films_id_seq'::regclass);


--
-- Name: notes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public.notes_id_seq'::regclass);


--
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.films VALUES (11, 'Velozes e furiosos', 's', 'Netflix', false);
INSERT INTO public.films VALUES (12, 'Harry Potter', 'fantasy', 'HBO', false);
INSERT INTO public.films VALUES (4, 'The Queen', 'adventure', 'Netflix', true);
INSERT INTO public.films VALUES (9, 'Lupin 3', '1', 'Netflix', true);
INSERT INTO public.films VALUES (13, 'Lagoa azul', 'Estratégia', 'Netflix', true);
INSERT INTO public.films VALUES (14, 'Spotify', 'Drama', 'Netflix', false);


--
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.notes VALUES (1, '{"note":"Um filme muito bom"}', 4);
INSERT INTO public.notes VALUES (2, '{"note":"Um filme muito bom"}', 4);
INSERT INTO public.notes VALUES (3, '{"note":"Um filme muito bom"}', 4);
INSERT INTO public.notes VALUES (4, '{"note":"Um filme muito bom"}', 4);
INSERT INTO public.notes VALUES (5, 'Um filme muito bom', 4);
INSERT INTO public.notes VALUES (6, 'Um filme muito bom', 4);
INSERT INTO public.notes VALUES (7, 'Um filme muito bom', 4);
INSERT INTO public.notes VALUES (8, 'Um filme muito bom da netflix', 9);
INSERT INTO public.notes VALUES (9, 'Lagoa azul é um filme muito bom.', 13);
INSERT INTO public.notes VALUES (10, 'Lagoa azul é um filme muito bom.', 13);


--
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.films_id_seq', 14, true);


--
-- Name: notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.notes_id_seq', 10, true);


--
-- Name: films films_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films
    ADD CONSTRAINT films_pkey PRIMARY KEY (id);


--
-- Name: notes notes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_pkey PRIMARY KEY (id);


--
-- Name: notes notes_idfilm_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_idfilm_fkey FOREIGN KEY (idfilm) REFERENCES public.films(id);


--
-- PostgreSQL database dump complete
--

