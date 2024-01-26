-- DROP TABLE "response";
-- DROP TABLE "question";
-- DROP TABLE "category";
-- DROP TABLE "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (100) NOT NULL,
    "auth_level" INTEGER DEFAULT 0
);

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "undesirable" VARCHAR (50) UNIQUE NOT NULL,
    "desirable" VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE "question" (
    "id" SERIAL PRIMARY KEY,
    "verbiage" VARCHAR (1000) NOT NULL,
    "category_id" INTEGER REFERENCES "category",
    "option_one" VARCHAR (300),
    "option_two" VARCHAR (300),
    "option_three" VARCHAR (300),
    "option_four" VARCHAR (300),
    "weight_one" INTEGER DEFAULT 1,
    "weight_two" INTEGER DEFAULT 1,
    "weight_three" INTEGER DEFAULT 1,
    "weight_four" INTEGER DEFAULT 1
);

CREATE TABLE "response" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user",
    "question_id" INTEGER REFERENCES "question",
    "answer" INTEGER
);

INSERT INTO "category" ("undesirable", "desirable")
VALUES 
    ('Cruel', 'Benevolent'),
    ('Parasitic', 'Accountable'),
    ('Basic', 'Authentic'),
    ('Inflexible', 'Good-humored');