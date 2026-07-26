CREATE TABLE portfolio_posts (
    id UUID PRIMARY KEY,
    artist_id UUID,
    vertical VARCHAR(50),
    caption TEXT,
    created_at TIMESTAMP
);

CREATE TABLE portfolio_images (
    id UUID PRIMARY KEY,
    post_id UUID,
    image_url VARCHAR(512),
    image_type VARCHAR(20)
);
