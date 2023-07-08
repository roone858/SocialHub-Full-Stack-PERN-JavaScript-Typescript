-- Create the User table
CREATE TABLE users (
     user_id SERIAL PRIMARY KEY,
     name VARCHAR(100),
     username VARCHAR(50) UNIQUE,
     email VARCHAR(100) UNIQUE,
     bio TEXT,
     password VARCHAR(100)
);

-- Create the Post table
CREATE TABLE posts (
     post_id SERIAL PRIMARY KEY,
     content TEXT,
     created_at TIMESTAMP DEFAULT NOW(),
     user_id INTEGER REFERENCES users(user_id)
);

-- Create the Comment table
CREATE TABLE comments (
     comment_id SERIAL PRIMARY KEY,
     content TEXT,
     created_at TIMESTAMP DEFAULT NOW(),
     user_id INTEGER REFERENCES users(user_id),
     post_id INTEGER REFERENCES posts(post_id)
);

-- Create the Like table
CREATE TABLE likes (
     like_id SERIAL PRIMARY KEY,
     created_at TIMESTAMP DEFAULT NOW(),
     user_id INTEGER REFERENCES users(user_id),
     post_id INTEGER REFERENCES posts(post_id)
);

-- Create the Friendships table
CREATE TABLE friendships (
     friendship_id SERIAL PRIMARY KEY,
     user_id1 INTEGER REFERENCES users(user_id),
     user_id2 INTEGER REFERENCES users(user_id),
     created_at TIMESTAMP DEFAULT NOW()
);

netstat -a -o -n | findstr "5432"
taskkill /pid 4728 /F