DROP TABLE "response";
DROP TABLE "question";
DROP TABLE "category";
DROP TABLE "user";

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

CREATE TABLE "result" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user",
    "category_id" INTEGER REFERENCES "category",
    "score" DECIMAL (3, 2)
);

-- the four scales
INSERT INTO "category" ("undesirable", "desirable")
VALUES 
    ('Cruel', 'Benevolent'),
    ('Parasitic', 'Accountable'),
    ('Basic', 'Authentic'),
    ('Inflexible', 'Good-humored');

-- sample data
INSERT INTO "question" 
    (
        "verbiage", "category_id", 
        "option_one", "option_two", "option_three", "option_four"
    )
VALUES
    (
        'Which color?', 1,
        'Blue', 'Green', 'Pink', 'Teal'
    ),
    (
        'How tall?', 2,
        'One foot', 'Six geese', 'A league', 'Eight'
    ),
    (
        'Is a hotdog a sandwich?', 4,
        'Definitely', 'Nope', '''Tis a taco', 'Refuse to respond'
    );