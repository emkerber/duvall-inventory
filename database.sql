CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "auth_level" INTEGER DEFAULT 0
);

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "undesirable_label" VARCHAR (50) UNIQUE NOT NULL,
    "desirable_label" VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE "question" (
    "id" SERIAL PRIMARY KEY,
    "verbiage" VARCHAR (300) NOT NULL,
    "category_id" INTEGER REFERENCES "category",
    "weight" INTEGER DEFAULT 1
);

CREATE TABLE "response" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user",
    "question_id" INTEGER REFERENCES "question",
    "answer" INTEGER
);

