-- Create Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Groups table (for shared expenses)
CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Expenses table
CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(50),
    group_id INTEGER REFERENCES groups(id),
    paid_by INTEGER REFERENCES users(id),
    date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Group Members table (who belongs to which group)
CREATE TABLE group_members (
    id SERIAL PRIMARY KEY,
    group_id INTEGER REFERENCES groups(id),
    user_id INTEGER REFERENCES users(id),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(group_id, user_id)
);

-- Insert some test data
INSERT INTO users (name, email, password_hash) VALUES 
('John Doe', 'john@example.com', 'temp_hash_123'),
('Jane Smith', 'jane@example.com', 'temp_hash_456');

INSERT INTO groups (name, description, created_by) VALUES 
('Roommates', 'Shared apartment expenses', 1),
('Trip to Miami', 'Vacation expenses', 1);

INSERT INTO expenses (description, amount, category, group_id, paid_by) VALUES 
('Grocery Store', 45.67, 'Food', 1, 1),
('Electric Bill', 89.32, 'Utilities', 1, 2),
('Gas Station', 35.00, 'Transportation', 2, 1);