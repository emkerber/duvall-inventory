CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "auth_level" INTEGER DEFAULT 0
);

CREATE TABLE "question" (
    "id" SERIAL PRIMARY KEY,
    "verbiage" VARCHAR (300) NOT NULL,
    "category" VARCHAR (20) NOT NULL,
    "weight" INTEGER DEFAULT 1
);

CREATE TABLE "response" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user",
    "question_id" INTEGER REFERENCES "question",
    "answer" INTEGER
);